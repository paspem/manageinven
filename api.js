// ================================================
// SIMUMU — API Connector ke Google Apps Script
// File ini menghubungkan frontend ke Google Sheets
// ================================================

const API = {

  // ===== KONFIGURASI =====
  // Ganti URL ini setelah deploy Apps Script
  BASE_URL: localStorage.getItem('simumu_api_url') || '',

  // ===== SET URL =====
  setUrl(url) {
    this.BASE_URL = url.trim();
    localStorage.setItem('simumu_api_url', this.BASE_URL);
  },

  isConfigured() {
    return this.BASE_URL && this.BASE_URL.startsWith('https://script.google.com');
  },

  // ===== GET REQUEST =====
  async get(action, params = {}) {
    if (!this.isConfigured()) throw new Error('API URL belum dikonfigurasi');
    const qs = new URLSearchParams({ action, ...params }).toString();
    const res = await fetch(`${this.BASE_URL}?${qs}`);
    const json = await res.json();
    if (json.error) throw new Error(json.error);
    return json.data;
  },

  // ===== POST REQUEST =====
  async post(action, payload = {}) {
    if (!this.isConfigured()) throw new Error('API URL belum dikonfigurasi');
    const res = await fetch(this.BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' }, // Apps Script butuh text/plain
      body: JSON.stringify({ action, ...payload })
    });
    const json = await res.json();
    if (json.error) throw new Error(json.error);
    return json.data;
  },

  // ===== ENDPOINTS =====
  async ping()                  { return this.get('ping'); },
  async getSurat(params = {})   { return this.get('getSurat', params); },
  async getStats()              { return this.get('getStats'); },
  async getLaporan(params = {}) { return this.get('getLaporan', params); },
  async getLog()                { return this.get('getLog'); },

  async addSurat(data)          { return this.post('addSurat', { data }); },
  async updateSurat(id, data)   { return this.post('updateSurat', { id, data }); },
  async deleteSurat(id)         { return this.post('deleteSurat', { id }); },
  async initSheets()            { return this.post('initSheets'); },
};

// ===== MODE MANAGER =====
// Otomatis fallback ke localStorage jika API belum dikonfigurasi
const DB = {

  mode: API.isConfigured() ? 'api' : 'local', // 'api' atau 'local'

  setMode(m) {
    this.mode = m;
    console.log('[SIMUMU] Mode database:', m.toUpperCase());
  },

  async getSurat(params = {}) {
    if (this.mode === 'api') {
      return await API.getSurat(params);
    }
    // localStorage fallback
    return filterLocal(STATE.surat, params);
  },

  async addSurat(data) {
    if (this.mode === 'api') {
      const result = await API.addSurat(data);
      await this.syncFromAPI(); // refresh data lokal
      return result;
    }
    // localStorage fallback
    const newId = 'S' + String(STATE.surat.length + 1).padStart(4, '0');
    const record = {
      id: newId,
      noSurat: data.noSurat,
      noPPM: data.noPPM,
      tglSurat: data.tglSurat,
      tglPPM: data.tglPPM,
      namaKlien: data.namaKlien,
      katalog: data.katalog,
      namaBarang: data.namaBarang,
      sat: data.sat,
      jumlah: parseInt(data.jumlah),
      gunaKategori: data.gunaKategori,
      createdAt: data.tglSurat
    };
    STATE.surat.unshift(record);
    saveData();
    return { id: newId };
  },

  async updateSurat(id, data) {
    if (this.mode === 'api') {
      const result = await API.updateSurat(id, data);
      await this.syncFromAPI();
      return result;
    }
    // localStorage fallback
    const s = STATE.surat.find(x => x.id === id);
    if (s) {
      Object.assign(s, {
        noSurat: data.noSurat || s.noSurat,
        noPPM: data.noPPM || s.noPPM,
        tglSurat: data.tglSurat || s.tglSurat,
        tglPPM: data.tglPPM || s.tglPPM,
        namaKlien: data.namaKlien || s.namaKlien,
        jumlah: data.jumlah ? parseInt(data.jumlah) : s.jumlah,
        gunaKategori: data.gunaKategori || s.gunaKategori,
      });
      saveData();
    }
    return { id };
  },

  async deleteSurat(id) {
    if (this.mode === 'api') {
      const result = await API.deleteSurat(id);
      STATE.surat = STATE.surat.filter(s => s.id !== id);
      saveData();
      return result;
    }
    // localStorage fallback
    STATE.surat = STATE.surat.filter(s => s.id !== id);
    saveData();
    return { id };
  },

  async getStats() {
    if (this.mode === 'api') {
      return await API.getStats();
    }
    // hitung dari lokal
    return null; // app.js akan hitung sendiri
  },

  // Sync data dari API ke STATE lokal (untuk offline cache)
  async syncFromAPI() {
    try {
      const data = await API.getSurat();
      // Normalize field names dari Google Sheets (UPPERCASE) ke camelCase
      STATE.surat = data.map(r => ({
        id: r.ID,
        noSurat: r.NO_SURAT,
        noPPM: r.NO_PPM,
        tglSurat: r.TGL_SURAT,
        tglPPM: r.TGL_PPM,
        namaKlien: r.NAMA_KLIEN,
        katalog: r.KATALOG,
        namaBarang: r.NAMA_BARANG,
        sat: r.SAT,
        jumlah: parseInt(r.JUMLAH) || 0,
        gunaKategori: r.GUNA_KATEGORI,
        createdAt: r.TGL_SURAT
      }));
      saveData(); // cache ke localStorage juga
      console.log('[SIMUMU] Sync dari API berhasil:', STATE.surat.length, 'record');
    } catch (err) {
      console.warn('[SIMUMU] Sync API gagal, pakai data lokal:', err.message);
    }
  }
};

// Filter lokal (untuk mode localStorage)
function filterLocal(data, params) {
  let result = [...data];
  if (params.guna)   result = result.filter(s => s.gunaKategori === params.guna);
  if (params.tahun)  result = result.filter(s => (s.tglSurat || '').startsWith(params.tahun));
  if (params.bulan)  result = result.filter(s => (s.tglSurat || '').substring(5, 7) === params.bulan);
  if (params.search) {
    const q = params.search.toLowerCase();
    result = result.filter(s =>
      (s.noSurat || '').toLowerCase().includes(q) ||
      (s.noPPM || '').toLowerCase().includes(q) ||
      (s.namaKlien || '').toLowerCase().includes(q) ||
      (s.katalog || '').toLowerCase().includes(q) ||
      (s.gunaKategori || '').toLowerCase().includes(q)
    );
  }
  return result.sort((a, b) => new Date(b.tglSurat) - new Date(a.tglSurat));
}
