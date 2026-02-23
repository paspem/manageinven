// ================================================
// SIMUMU — Google Apps Script Backend
// Paste kode ini di: script.google.com
// Fungsi: REST API untuk Google Sheets
// ================================================

// ===== KONFIGURASI =====
const SHEET_SURAT     = 'DATA_SURAT';
const SHEET_KATALOG   = 'KATALOG_MASTER';
const SHEET_LOG       = 'LOG_AKTIVITAS';

const HEADERS_SURAT = [
  'ID', 'NO_URUT', 'NO_SURAT', 'NO_PPM', 'TGL_SURAT', 'TGL_PPM',
  'NAMA_KLIEN', 'KATALOG', 'NAMA_BARANG', 'SAT', 'JUMLAH',
  'GUNA_KATEGORI', 'CREATED_AT', 'UPDATED_AT'
];

// ===== CORS & RESPONSE HELPER =====
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

function response(data, status = 200) {
  const payload = JSON.stringify({ status, data, timestamp: new Date().toISOString() });
  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}

function errorResponse(msg, status = 400) {
  const payload = JSON.stringify({ status, error: msg, timestamp: new Date().toISOString() });
  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== MAIN ROUTER =====
function doGet(e) {
  try {
    const action = e.parameter.action || '';
    const id     = e.parameter.id || '';

    switch (action) {
      case 'getSurat':     return getSurat(e.parameter);
      case 'getKatalog':   return getKatalog();
      case 'getStats':     return getStats();
      case 'getLaporan':   return getLaporan(e.parameter);
      case 'getLog':       return getLog();
      case 'ping':         return response({ message: 'SIMUMU API aktif', version: '1.0' });
      default:             return errorResponse('Action tidak dikenal: ' + action);
    }
  } catch (err) {
    return errorResponse('Server error: ' + err.message, 500);
  }
}

function doPost(e) {
  try {
    const body   = JSON.parse(e.postData.contents);
    const action = body.action || '';

    switch (action) {
      case 'addSurat':    return addSurat(body.data);
      case 'updateSurat': return updateSurat(body.id, body.data);
      case 'deleteSurat': return deleteSurat(body.id);
      case 'initSheets':  return initSheets();
      default:            return errorResponse('Action tidak dikenal: ' + action);
    }
  } catch (err) {
    return errorResponse('Server error: ' + err.message, 500);
  }
}

// ===== INIT SHEETS =====
function initSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Sheet DATA_SURAT
  let shSurat = ss.getSheetByName(SHEET_SURAT);
  if (!shSurat) {
    shSurat = ss.insertSheet(SHEET_SURAT);
    shSurat.getRange(1, 1, 1, HEADERS_SURAT.length).setValues([HEADERS_SURAT]);
    shSurat.getRange(1, 1, 1, HEADERS_SURAT.length)
      .setBackground('#1c2410')
      .setFontColor('#c8b96a')
      .setFontWeight('bold');
    shSurat.setFrozenRows(1);
  }

  // Sheet LOG
  let shLog = ss.getSheetByName(SHEET_LOG);
  if (!shLog) {
    shLog = ss.insertSheet(SHEET_LOG);
    shLog.getRange(1, 1, 1, 5).setValues([['TIMESTAMP', 'AKSI', 'ID', 'USER', 'DETAIL']]);
    shLog.getRange(1, 1, 1, 5)
      .setBackground('#1c2410')
      .setFontColor('#c8b96a')
      .setFontWeight('bold');
    shLog.setFrozenRows(1);
  }

  return response({ message: 'Sheet berhasil diinisialisasi' });
}

// ===== GET SURAT =====
function getSurat(params) {
  const sh   = getOrCreateSheet(SHEET_SURAT, HEADERS_SURAT);
  const data = sheetToObjects(sh);

  let filtered = data;

  // Filter
  if (params.guna)   filtered = filtered.filter(r => r.GUNA_KATEGORI === params.guna);
  if (params.tahun)  filtered = filtered.filter(r => (r.TGL_SURAT || '').startsWith(params.tahun));
  if (params.bulan)  filtered = filtered.filter(r => (r.TGL_SURAT || '').substring(5, 7) === params.bulan);
  if (params.search) {
    const q = params.search.toLowerCase();
    filtered = filtered.filter(r =>
      (r.NO_SURAT   || '').toLowerCase().includes(q) ||
      (r.NO_PPM     || '').toLowerCase().includes(q) ||
      (r.NAMA_KLIEN || '').toLowerCase().includes(q) ||
      (r.KATALOG    || '').toLowerCase().includes(q) ||
      (r.GUNA_KATEGORI || '').toLowerCase().includes(q)
    );
  }

  // Sort by TGL_SURAT desc
  filtered.sort((a, b) => new Date(b.TGL_SURAT) - new Date(a.TGL_SURAT));

  return response(filtered);
}

// ===== ADD SURAT =====
function addSurat(data) {
  if (!data.noSurat || !data.noPPM || !data.namaKlien || !data.katalog || !data.jumlah || !data.gunaKategori) {
    return errorResponse('Field wajib tidak lengkap');
  }

  const sh      = getOrCreateSheet(SHEET_SURAT, HEADERS_SURAT);
  const lastRow = sh.getLastRow();
  const newId   = 'S' + String(lastRow).padStart(4, '0');
  const now     = new Date().toISOString();
  const noUrut  = lastRow; // baris data (tanpa header)

  const row = [
    newId,
    noUrut,
    data.noSurat,
    data.noPPM,
    data.tglSurat || now.split('T')[0],
    data.tglPPM   || '',
    data.namaKlien,
    data.katalog,
    data.namaBarang || '',
    data.sat        || '',
    parseInt(data.jumlah) || 0,
    data.gunaKategori,
    now,
    now
  ];

  sh.appendRow(row);
  addLog('TAMBAH', newId, 'Surat baru: ' + data.noSurat);

  return response({ id: newId, message: 'Data berhasil disimpan' });
}

// ===== UPDATE SURAT =====
function updateSurat(id, data) {
  if (!id) return errorResponse('ID tidak boleh kosong');

  const sh      = getOrCreateSheet(SHEET_SURAT, HEADERS_SURAT);
  const allData = sh.getDataRange().getValues();
  const headers = allData[0];
  const idIdx   = headers.indexOf('ID');

  for (let i = 1; i < allData.length; i++) {
    if (allData[i][idIdx] === id) {
      const row   = i + 1; // 1-indexed
      const now   = new Date().toISOString();
      const colMap = {};
      headers.forEach((h, idx) => colMap[h] = idx + 1);

      if (data.noSurat)      sh.getRange(row, colMap['NO_SURAT']).setValue(data.noSurat);
      if (data.noPPM)        sh.getRange(row, colMap['NO_PPM']).setValue(data.noPPM);
      if (data.tglSurat)     sh.getRange(row, colMap['TGL_SURAT']).setValue(data.tglSurat);
      if (data.tglPPM)       sh.getRange(row, colMap['TGL_PPM']).setValue(data.tglPPM);
      if (data.namaKlien)    sh.getRange(row, colMap['NAMA_KLIEN']).setValue(data.namaKlien);
      if (data.jumlah)       sh.getRange(row, colMap['JUMLAH']).setValue(parseInt(data.jumlah));
      if (data.gunaKategori) sh.getRange(row, colMap['GUNA_KATEGORI']).setValue(data.gunaKategori);
      sh.getRange(row, colMap['UPDATED_AT']).setValue(now);

      addLog('UPDATE', id, 'Data diperbarui');
      return response({ id, message: 'Data berhasil diperbarui' });
    }
  }

  return errorResponse('Data dengan ID ' + id + ' tidak ditemukan', 404);
}

// ===== DELETE SURAT =====
function deleteSurat(id) {
  if (!id) return errorResponse('ID tidak boleh kosong');

  const sh      = getOrCreateSheet(SHEET_SURAT, HEADERS_SURAT);
  const allData = sh.getDataRange().getValues();
  const headers = allData[0];
  const idIdx   = headers.indexOf('ID');

  for (let i = 1; i < allData.length; i++) {
    if (allData[i][idIdx] === id) {
      sh.deleteRow(i + 1);
      addLog('HAPUS', id, 'Data dihapus');
      return response({ id, message: 'Data berhasil dihapus' });
    }
  }

  return errorResponse('Data dengan ID ' + id + ' tidak ditemukan', 404);
}

// ===== GET KATALOG =====
function getKatalog() {
  // Katalog master sudah hardcoded di frontend
  // Endpoint ini untuk validasi server-side
  return response({ total: 62, message: 'Katalog master tersedia' });
}

// ===== GET STATS =====
function getStats() {
  const sh   = getOrCreateSheet(SHEET_SURAT, HEADERS_SURAT);
  const data = sheetToObjects(sh);

  const totalSurat   = [...new Set(data.map(r => r.NO_SURAT))].length;
  const totalJumlah  = data.reduce((a, r) => a + (parseInt(r.JUMLAH) || 0), 0);
  const totalKlien   = [...new Set(data.map(r => r.NAMA_KLIEN))].length;
  const totalBaris   = data.length;

  // Katalog terbanyak
  const katMap = {};
  data.forEach(r => { katMap[r.KATALOG] = (katMap[r.KATALOG] || 0) + (parseInt(r.JUMLAH) || 0); });
  const topKatalog = Object.entries(katMap).sort((a, b) => b[1] - a[1]).slice(0, 5)
    .map(([katalog, jumlah]) => ({ katalog, jumlah }));

  // Guna kategori
  const gunaMap = {};
  data.forEach(r => { gunaMap[r.GUNA_KATEGORI] = (gunaMap[r.GUNA_KATEGORI] || 0) + (parseInt(r.JUMLAH) || 0); });

  return response({ totalSurat, totalJumlah, totalKlien, totalBaris, topKatalog, gunaMap });
}

// ===== GET LAPORAN =====
function getLaporan(params) {
  const sh   = getOrCreateSheet(SHEET_SURAT, HEADERS_SURAT);
  const data = sheetToObjects(sh);
  const type = params.type || 'bulanan';
  const year = params.tahun || new Date().getFullYear().toString();

  let result = {};

  if (type === 'bulanan') {
    const monthly = Array(12).fill(0);
    const monthlyMap = {};
    data.filter(r => (r.TGL_SURAT || '').startsWith(year)).forEach(r => {
      const m = new Date(r.TGL_SURAT).getMonth();
      monthly[m] += parseInt(r.JUMLAH) || 0;
    });
    result = { labels: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'], data: monthly };

  } else if (type === 'triwulan') {
    const tw = [0, 0, 0, 0];
    data.filter(r => (r.TGL_SURAT || '').startsWith(year)).forEach(r => {
      const m = new Date(r.TGL_SURAT).getMonth();
      tw[Math.floor(m / 3)] += parseInt(r.JUMLAH) || 0;
    });
    result = { labels: ['TW I', 'TW II', 'TW III', 'TW IV'], data: tw };

  } else if (type === 'kategori') {
    const map = {};
    data.filter(r => (r.TGL_SURAT || '').startsWith(year)).forEach(r => {
      const gk = r.GUNA_KATEGORI || 'LAIN-LAIN';
      map[gk] = (map[gk] || 0) + (parseInt(r.JUMLAH) || 0);
    });
    result = { labels: Object.keys(map), data: Object.values(map) };
  }

  return response(result);
}

// ===== GET LOG =====
function getLog() {
  const sh = getOrCreateSheet(SHEET_LOG, ['TIMESTAMP', 'AKSI', 'ID', 'USER', 'DETAIL']);
  const data = sheetToObjects(sh);
  return response(data.slice(-50).reverse()); // 50 log terakhir
}

// ===== HELPER FUNCTIONS =====
function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    sh.getRange(1, 1, 1, headers.length)
      .setBackground('#1c2410')
      .setFontColor('#c8b96a')
      .setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function sheetToObjects(sh) {
  const data = sh.getDataRange().getValues();
  if (data.length <= 1) return [];
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  }).filter(r => r['ID'] !== ''); // filter baris kosong
}

function addLog(aksi, id, detail) {
  try {
    const sh = getOrCreateSheet(SHEET_LOG, ['TIMESTAMP', 'AKSI', 'ID', 'USER', 'DETAIL']);
    sh.appendRow([new Date().toISOString(), aksi, id, 'OPERATOR', detail]);
  } catch (e) {
    // silent fail
  }
}

// ===== TEST FUNCTION (jalankan manual di Apps Script editor) =====
function testAPI() {
  Logger.log('=== TEST INIT SHEETS ===');
  const init = initSheets();
  Logger.log(init.getContent());

  Logger.log('=== TEST ADD SURAT ===');
  const add = addSurat({
    noSurat: 'SP/TEST/I/2025',
    noPPM: 'PPM/TEST/MU/I/2025',
    tglSurat: '2025-01-15',
    tglPPM: '2025-01-10',
    namaKlien: 'Test Klien',
    katalog: 'IF/7/01/B',
    namaBarang: '9 Naga',
    sat: 'BUTIR',
    jumlah: 1000,
    gunaKategori: 'MAEN NAGA TW 1'
  });
  Logger.log(add.getContent());

  Logger.log('=== TEST GET SURAT ===');
  const get = getSurat({});
  Logger.log(get.getContent());

  Logger.log('=== TEST GET STATS ===');
  const stats = getStats();
  Logger.log(stats.getContent());
}
