// ================================================
// SIMUMU — Sistem Manajemen Munisi & Materil
// Versi 1.0 | AI-powered by Anthropic Claude
// ================================================

// ===== 62 KATALOG BAKU (TIDAK DAPAT DIUBAH) =====
const KATALOG_MASTER = [
  { no:1,  katalog:'IF/13/01/B',    nama:'4 Naga',          sat:'BUTIR',  prefix:'IF' },
  { no:2,  katalog:'IF/13/18/B',    nama:'0 Naga',          sat:'BATANG', prefix:'IF' },
  { no:3,  katalog:'IF/13/19/B',    nama:'5 Naga',          sat:'METER',  prefix:'IF' },
  { no:4,  katalog:'IF/13/24/B',    nama:'Materil IF-13-24',sat:'SET',    prefix:'IF' },
  { no:5,  katalog:'IF/7/01/B',     nama:'9 Naga',          sat:'BUTIR',  prefix:'IF' },
  { no:6,  katalog:'IF/18/18/REK',  nama:'Materil IF-18-18',sat:'REK',   prefix:'IF' },
  { no:7,  katalog:'IF/8/01/B',     nama:'Materil IF-8-01', sat:'BUTIR',  prefix:'IF' },
  { no:8,  katalog:'IF/8/18/B',     nama:'Materil IF-8-18', sat:'BATANG', prefix:'IF' },
  { no:9,  katalog:'IF/15/14/B',    nama:'Materil IF-15-14',sat:'BUTIR',  prefix:'IF' },
  { no:10, katalog:'IF/37/02/B',    nama:'Materil IF-37-02',sat:'BUTIR',  prefix:'IF' },
  { no:11, katalog:'IF/37/06/B',    nama:'Materil IF-37-06',sat:'BUTIR',  prefix:'IF' },
  { no:12, katalog:'IF/6/02/Rek',   nama:'Materil IF-6-02', sat:'REK',   prefix:'IF' },
  { no:13, katalog:'IF/78/05/B',    nama:'Materil IF-78-05',sat:'BUTIR',  prefix:'IF' },
  { no:14, katalog:'IF/78/08/B',    nama:'Materil IF-78-08',sat:'BUTIR',  prefix:'IF' },
  { no:15, katalog:'IF/78/09/B',    nama:'Materil IF-78-09',sat:'BUTIR',  prefix:'IF' },
  { no:16, katalog:'IF/78/09/Ren',  nama:'Materil IF-78-09 Ren',sat:'REN',prefix:'IF' },
  { no:17, katalog:'IF/78/10/B',    nama:'Materil IF-78-10',sat:'BUTIR',  prefix:'IF' },
  { no:18, katalog:'IF/78/17/B',    nama:'Materil IF-78-17',sat:'BUTIR',  prefix:'IF' },
  { no:19, katalog:'IF/79/05/B',    nama:'Materil IF-79-05',sat:'BUTIR',  prefix:'IF' },
  { no:20, katalog:'IF/79/05/Ren',  nama:'Materil IF-79-05 Ren',sat:'REN',prefix:'IF' },
  { no:21, katalog:'ART/74/14/B',   nama:'Materil ART-74-14',sat:'BUTIR',prefix:'ART'},
  { no:22, katalog:'ART/74/18/B',   nama:'Materil ART-74-18',sat:'BUTIR',prefix:'ART'},
  { no:23, katalog:'SUS/54/15/B',   nama:'Materil SUS-54-15',sat:'BUTIR',prefix:'SUS'},
  { no:24, katalog:'SUS/64/01/B',   nama:'Materil SUS-64-01',sat:'BUTIR',prefix:'SUS'},
  { no:25, katalog:'SUS/64/02/B',   nama:'Materil SUS-64-02',sat:'BUTIR',prefix:'SUS'},
  { no:26, katalog:'SUS/64/11/B',   nama:'Materil SUS-64-11',sat:'BUTIR',prefix:'SUS'},
  { no:27, katalog:'SUS/64/14/B',   nama:'Materil SUS-64-14',sat:'BUTIR',prefix:'SUS'},
  { no:28, katalog:'SUS/64/19/B',   nama:'Materil SUS-64-19',sat:'BUTIR',prefix:'SUS'},
  { no:29, katalog:'SUS/64/20/B',   nama:'Materil SUS-64-20',sat:'BUTIR',prefix:'SUS'},
  { no:30, katalog:'SUS/64/23/B',   nama:'Materil SUS-64-23',sat:'BUTIR',prefix:'SUS'},
  { no:31, katalog:'SUS/65/02/B',   nama:'Materil SUS-65-02',sat:'BUTIR',prefix:'SUS'},
  { no:32, katalog:'SUS/65/03/B',   nama:'Materil SUS-65-03 A',sat:'BUTIR',prefix:'SUS'},
  { no:33, katalog:'SUS/65/03/B',   nama:'Materil SUS-65-03 B',sat:'BUTIR',prefix:'SUS'},
  { no:34, katalog:'SUS/65/20/B',   nama:'Materil SUS-65-20',sat:'BUTIR',prefix:'SUS'},
  { no:35, katalog:'SUS/65/20/Slop',nama:'Materil SUS-65-20 Slop',sat:'SLOP',prefix:'SUS'},
  { no:36, katalog:'SUS/66/02/B',   nama:'Materil SUS-66-02',sat:'BUTIR',prefix:'SUS'},
  { no:37, katalog:'SUS/66/03/B',   nama:'Materil SUS-66-03',sat:'BUTIR',prefix:'SUS'},
  { no:38, katalog:'SUS/66/05/B',   nama:'Materil SUS-66-05',sat:'BUTIR',prefix:'SUS'},
  { no:39, katalog:'SUS/66/11/B',   nama:'Materil SUS-66-11',sat:'BUTIR',prefix:'SUS'},
  { no:40, katalog:'SUS/66/14/B',   nama:'Materil SUS-66-14',sat:'BUTIR',prefix:'SUS'},
  { no:41, katalog:'SUS/66/15/B',   nama:'Materil SUS-66-15',sat:'BUTIR',prefix:'SUS'},
  { no:42, katalog:'SUS/67/02/Rek', nama:'Materil SUS-67-02',sat:'REK',  prefix:'SUS'},
  { no:43, katalog:'E-2-C',         nama:'Materil E-2-C',    sat:'BUTIR',prefix:'E'  },
  { no:44, katalog:'SUS/69/00/B',   nama:'Materil SUS-69-00',sat:'BUTIR',prefix:'SUS'},
  { no:45, katalog:'SUS/69/00/Rek', nama:'Materil SUS-69-00 Rek',sat:'REK',prefix:'SUS'},
  { no:46, katalog:'SUS/69/03/B',   nama:'Materil SUS-69-03',sat:'BUTIR',prefix:'SUS'},
  { no:47, katalog:'SUS/70/10/B',   nama:'Materil SUS-70-10',sat:'BUTIR',prefix:'SUS'},
  { no:48, katalog:'SUS/70/11/B',   nama:'Materil SUS-70-11',sat:'BUTIR',prefix:'SUS'},
  { no:49, katalog:'SUS/71/02/B',   nama:'Materil SUS-71-02',sat:'BUTIR',prefix:'SUS'},
  { no:50, katalog:'IF/22/20/B-Lat',nama:'Materil IF-22-20 Lat',sat:'BUTIR',prefix:'IF'},
  { no:51, katalog:'IF/22/32/B',    nama:'Materil IF-22-32',sat:'BUTIR', prefix:'IF' },
  { no:52, katalog:'IF/22/33/B',    nama:'Materil IF-22-33',sat:'BUTIR', prefix:'IF' },
  { no:53, katalog:'IF/22/34/B',    nama:'Materil IF-22-34',sat:'BUTIR', prefix:'IF' },
  { no:54, katalog:'IF/22/35/B',    nama:'Materil IF-22-35',sat:'BUTIR', prefix:'IF' },
  { no:55, katalog:'IF/22/36/B',    nama:'Materil IF-22-36',sat:'BUTIR', prefix:'IF' },
  { no:56, katalog:'IF/22/37/B',    nama:'Materil IF-22-37',sat:'BUTIR', prefix:'IF' },
  { no:57, katalog:'IF/22/47/B',    nama:'Materil IF-22-47',sat:'BUTIR', prefix:'IF' },
  { no:58, katalog:'IF/ 1/01/B',    nama:'Naga Putih',       sat:'BUTIR', prefix:'IF' },
  { no:59, katalog:'IF/ 1/02/B',    nama:'Naga Merah',       sat:'BUTIR', prefix:'IF' },
  { no:60, katalog:'IF/ 1/03/B',    nama:'Naga Hijau',       sat:'BUTIR', prefix:'IF' },
  { no:61, katalog:'ART/59/02/B',   nama:'Materil ART-59-02',sat:'BUTIR',prefix:'ART'},
  { no:62, katalog:'ART/59/03/B',   nama:'Materil ART-59-03',sat:'BUTIR',prefix:'ART'},
];

// ===== STATE =====
const STATE = {
  surat: [],           // data utama surat/PPM
  currentReport: 'bulanan',
  apiKey: localStorage.getItem('simumu_api_key') || '',
  charts: {}
};

// ===== SAMPLE DATA =====
const SAMPLE_KLIEN = [
  'Danyonif TP 836/BY', 'Danyonif 511/DY', 'Danyonif 413/BT',
  'Danyonkav 6/NK', 'Danyonpur 7/DPK', 'Danrem 081/DSJ',
  'Danyonif 502/BS', 'Dandenpal 2/I'
];
const SAMPLE_GUNA = [
  'MAEN NAGA TW 1', 'MAEN NAGA TW 2', 'MAEN NAGA TW 3', 'MAEN NAGA TW 4',
  'LATIHAN MENEMBAK', 'OPERASI TAKTIS', 'PEMELIHARAAN SENJATA', 'UJI PETIK'
];

function initSampleData() {
  if (STATE.surat.length > 0) return;
  let idx = 1;
  for (let i = 0; i < 20; i++) {
    const tglSurat = randDate(365);
    const tglPPM = addDays(tglSurat, -7);
    const klien = SAMPLE_KLIEN[Math.floor(Math.random() * SAMPLE_KLIEN.length)];
    const guna = SAMPLE_GUNA[Math.floor(Math.random() * SAMPLE_GUNA.length)];
    const numItems = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < numItems; j++) {
      const kat = KATALOG_MASTER[Math.floor(Math.random() * KATALOG_MASTER.length)];
      const noSurat = `SP/${1200 + i}/${romBulan(tglSurat)}/${tglSurat.split('-')[0]}`;
      const noPPM = `PPM/${500 + i}/MU/${romBulan(tglPPM)}/${tglPPM.split('-')[0]}`;
      STATE.surat.push({
        id: `S${String(idx++).padStart(4,'0')}`,
        no: idx - 1,
        noSurat,
        noPPM,
        tglSurat,
        tglPPM,
        namaKlien: klien,
        katalog: kat.katalog,
        namaBarang: kat.nama,
        sat: kat.sat,
        jumlah: Math.floor(Math.random() * 5000) + 100,
        gunaKategori: guna,
        createdAt: tglSurat
      });
    }
  }
  saveData();
}

function randDate(days) {
  const d = new Date();
  d.setDate(d.getDate() - Math.floor(Math.random() * days));
  return d.toISOString().split('T')[0];
}

function addDays(dateStr, n) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

function romBulan(dateStr) {
  const roms = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  return roms[new Date(dateStr).getMonth()];
}

// ===== STORAGE =====
function saveData() {
  localStorage.setItem('simumu_surat', JSON.stringify(STATE.surat));
}

function loadData() {
  const s = localStorage.getItem('simumu_surat');
  if (s) STATE.surat = JSON.parse(s);
  if (STATE.surat.length === 0) initSampleData();
}

// ===== NAVIGATION =====
function navigate(page) {
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const pg = document.getElementById(page);
  if (pg) pg.classList.add('active');
  const nav = document.querySelector(`[data-page="${page}"]`);
  if (nav) nav.classList.add('active');
  const titles = {
    dashboard: 'DASHBOARD', surat: 'DATA SURAT / PPM',
    katalog: 'KATALOG MATERIL', reports: 'REKAP LAPORAN', 'ai-chat': 'AI ANALIS'
  };
  document.getElementById('pageTitle').textContent = titles[page] || page;
  if (page === 'dashboard') renderDashboard();
  else if (page === 'surat') renderSuratTable();
  else if (page === 'katalog') renderKatalogTable();
  else if (page === 'reports') generateReport();
}

document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', e => { e.preventDefault(); navigate(el.dataset.page); });
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== DASHBOARD =====
function renderDashboard() {
  const uniqueSurat = [...new Set(STATE.surat.map(s => s.noSurat))];
  const totalJumlah = STATE.surat.reduce((a, s) => a + (s.jumlah || 0), 0);
  const uniqueKlien = [...new Set(STATE.surat.map(s => s.namaKlien))];

  document.getElementById('st-surat').textContent = uniqueSurat.length;
  document.getElementById('st-transaksi').textContent = totalJumlah.toLocaleString('id-ID');
  document.getElementById('st-klien').textContent = uniqueKlien.length;

  renderRecentSurat();
  renderTopKatalog();
  renderTrendChart();
  renderKategoriChart();
}

function renderRecentSurat() {
  const el = document.getElementById('recentSurat');
  const recent = [...STATE.surat].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
  el.innerHTML = recent.map(s => `
    <div class="recent-item">
      <div class="recent-dot"></div>
      <div style="flex:1">
        <div class="recent-no">${s.noSurat}</div>
        <div class="recent-detail">${s.namaKlien} — <code>${s.katalog}</code> ${s.jumlah.toLocaleString('id-ID')} ${s.sat}</div>
        <div class="recent-detail">${s.gunaKategori} | ${s.tglSurat}</div>
      </div>
    </div>`).join('');
}

function renderTopKatalog() {
  const el = document.getElementById('topKatalog');
  const map = {};
  STATE.surat.forEach(s => {
    map[s.katalog] = (map[s.katalog] || 0) + s.jumlah;
  });
  const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const max = sorted[0]?.[1] || 1;
  el.innerHTML = sorted.map(([kat, jml]) => `
    <div class="top-kat-item">
      <code style="min-width:120px;font-size:10px">${kat}</code>
      <div class="top-kat-bar"><div class="top-kat-fill" style="width:${(jml/max*100).toFixed(0)}%"></div></div>
      <span style="font-size:11px;color:var(--orange-lt);min-width:60px;text-align:right">${jml.toLocaleString('id-ID')}</span>
    </div>`).join('');
}

function renderTrendChart() {
  const year = document.getElementById('chartYear').value;
  const period = document.getElementById('chartPeriod').value;

  let labels, data;
  if (period === 'monthly') {
    labels = ['JAN','FEB','MAR','APR','MEI','JUN','JUL','AGU','SEP','OKT','NOV','DES'];
    data = Array(12).fill(0);
    STATE.surat.filter(s => s.tglSurat?.startsWith(year)).forEach(s => {
      const m = new Date(s.tglSurat).getMonth();
      data[m] += s.jumlah || 0;
    });
  } else {
    labels = ['TW 1 (Jan-Mar)', 'TW 2 (Apr-Jun)', 'TW 3 (Jul-Sep)', 'TW 4 (Okt-Des)'];
    data = Array(4).fill(0);
    STATE.surat.filter(s => s.tglSurat?.startsWith(year)).forEach(s => {
      const m = new Date(s.tglSurat).getMonth();
      data[Math.floor(m / 3)] += s.jumlah || 0;
    });
  }

  const ctx = document.getElementById('trendChart').getContext('2d');
  if (STATE.charts.trend) STATE.charts.trend.destroy();
  STATE.charts.trend = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'JUMLAH MATERIL KELUAR',
        data,
        backgroundColor: data.map((_, i) => i % 2 === 0 ? 'rgba(74,124,47,0.5)' : 'rgba(224,120,32,0.5)'),
        borderColor: data.map((_, i) => i % 2 === 0 ? 'rgba(106,173,64,0.9)' : 'rgba(245,153,64,0.9)'),
        borderWidth: 1,
        borderRadius: 3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: '#7a9060', font: { family: 'Saira', size: 11 } } }
      },
      scales: {
        x: { ticks: { color: '#7a9060', font: { family: 'Share Tech Mono', size: 10 } }, grid: { color: 'rgba(46,61,26,0.6)' } },
        y: { ticks: { color: '#7a9060', font: { family: 'Share Tech Mono', size: 10 } }, grid: { color: 'rgba(46,61,26,0.6)' } }
      }
    }
  });
}

function renderKategoriChart() {
  const map = {};
  STATE.surat.forEach(s => {
    const gk = s.gunaKategori || 'LAIN-LAIN';
    map[gk] = (map[gk] || 0) + s.jumlah;
  });
  const labels = Object.keys(map);
  const data = Object.values(map);
  const colors = ['#4a7c2f','#e07820','#c8b96a','#6aad40','#f59940','#8a7d50','#2d4d1c','#a85810'];

  const ctx = document.getElementById('kategoriChart').getContext('2d');
  if (STATE.charts.kategori) STATE.charts.kategori.destroy();
  STATE.charts.kategori = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{ data, backgroundColor: colors.slice(0, labels.length), borderWidth: 0 }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#7a9060', font: { family: 'Saira', size: 10 }, padding: 10 } }
      }
    }
  });
}

// ===== SURAT TABLE =====
function renderSuratTable() {
  updateGunaFilter();
  let data = [...STATE.surat];

  const guna = document.getElementById('filterGuna').value;
  const tahun = document.getElementById('filterTahun').value;
  const bulan = document.getElementById('filterBulan').value;
  const search = document.getElementById('globalSearch').value.toLowerCase();

  if (guna) data = data.filter(s => s.gunaKategori === guna);
  if (tahun) data = data.filter(s => s.tglSurat?.startsWith(tahun));
  if (bulan) data = data.filter(s => s.tglSurat?.substring(5, 7) === bulan);
  if (search) data = data.filter(s =>
    s.noSurat?.toLowerCase().includes(search) ||
    s.noPPM?.toLowerCase().includes(search) ||
    s.namaKlien?.toLowerCase().includes(search) ||
    s.katalog?.toLowerCase().includes(search) ||
    s.namaBarang?.toLowerCase().includes(search) ||
    s.gunaKategori?.toLowerCase().includes(search)
  );

  data.sort((a, b) => new Date(b.tglSurat) - new Date(a.tglSurat));

  const tbody = document.getElementById('suratTableBody');
  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="11"><div class="empty-state">⚠ TIDAK ADA DATA DITEMUKAN</div></td></tr>`;
    return;
  }

  tbody.innerHTML = data.map((s, i) => {
    const prefixClass = `prefix-${s.katalog.split('/')[0].split('-')[0]}`;
    return `<tr>
      <td style="color:var(--text2);font-family:'Share Tech Mono',monospace">${i+1}</td>
      <td><code>${s.noSurat}</code></td>
      <td><code style="font-size:10px;color:var(--text2)">${s.noPPM}</code></td>
      <td style="font-weight:500">${s.namaKlien}</td>
      <td><span class="katalog-prefix ${prefixClass}">${s.katalog}</span></td>
      <td>${s.namaBarang}</td>
      <td><span class="badge badge-khaki">${s.sat}</span></td>
      <td style="font-weight:700;color:var(--orange-lt)">${(s.jumlah||0).toLocaleString('id-ID')}</td>
      <td><span class="badge badge-army">${s.gunaKategori}</span></td>
      <td style="font-size:11px;color:var(--text2)">${s.tglSurat || '-'}</td>
      <td>
        <button class="act-btn" onclick="openModal('editSurat','${s.id}')">EDIT</button>
        <button class="act-btn del" onclick="deleteSurat('${s.id}')">HAPUS</button>
      </td>
    </tr>`;
  }).join('');
}

function updateGunaFilter() {
  const sel = document.getElementById('filterGuna');
  const cats = [...new Set(STATE.surat.map(s => s.gunaKategori).filter(Boolean))].sort();
  const cur = sel.value;
  sel.innerHTML = '<option value="">SEMUA KATEGORI</option>' +
    cats.map(c => `<option value="${c}" ${c===cur?'selected':''}>${c}</option>`).join('');
}

function handleGlobalSearch(val) {
  const active = document.querySelector('.page.active');
  if (active?.id === 'surat') renderSuratTable();
  else if (active?.id === 'katalog') renderKatalogTable();
}

// ===== KATALOG TABLE =====
function renderKatalogTable() {
  const search = document.getElementById('globalSearch').value.toLowerCase();
  let list = [...KATALOG_MASTER];
  if (search) list = list.filter(k =>
    k.katalog.toLowerCase().includes(search) ||
    k.nama.toLowerCase().includes(search)
  );

  // Count usage per katalog
  const usage = {};
  const suratCount = {};
  STATE.surat.forEach(s => {
    usage[s.katalog] = (usage[s.katalog] || 0) + (s.jumlah || 0);
    suratCount[s.katalog] = (suratCount[s.katalog] || 0) + 1;
  });

  document.getElementById('katalogTableBody').innerHTML = list.map(k => {
    const prefixClass = `prefix-${k.prefix}`;
    const totalKeluar = usage[k.katalog] || 0;
    const totalSurat = suratCount[k.katalog] || 0;
    return `<tr>
      <td style="color:var(--text2);font-family:'Share Tech Mono',monospace;font-size:11px">${k.no}</td>
      <td><code>${k.katalog}</code></td>
      <td style="font-weight:500">${k.nama}</td>
      <td><span class="badge badge-khaki">${k.sat}</span></td>
      <td><span class="katalog-prefix ${prefixClass}">${k.prefix}</span></td>
      <td style="color:var(--orange-lt);font-weight:700">${totalKeluar > 0 ? totalKeluar.toLocaleString('id-ID') : '—'}</td>
      <td style="color:var(--text2)">${totalSurat > 0 ? totalSurat + ' surat' : '—'}</td>
    </tr>`;
  }).join('');
}

// ===== REPORTS =====
function switchReport(period, btn) {
  STATE.currentReport = period;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const rptMonth = document.getElementById('rptMonth');
  rptMonth.style.display = period === 'bulanan' ? '' : 'none';
  generateReport();
}

function generateReport() {
  const p = STATE.currentReport;
  const year = document.getElementById('rptYear').value;
  const month = document.getElementById('rptMonth').value;
  if (p === 'bulanan') rptBulanan(year, month);
  else if (p === 'triwulan') rptTriwulan(year);
  else if (p === 'tahunan') rptTahunan();
  else if (p === 'kategori') rptKategori(year);
  else if (p === 'klien') rptKlien(year);
}

function rptBulanan(year, month) {
  const BULAN = ['JAN','FEB','MAR','APR','MEI','JUN','JUL','AGU','SEP','OKT','NOV','DES'];
  let data = STATE.surat.filter(s => s.tglSurat?.startsWith(year));
  if (month) data = data.filter(s => s.tglSurat?.substring(5,7) === month);

  const totalItem = data.length;
  const totalJumlah = data.reduce((a, s) => a + (s.jumlah||0), 0);
  const uniqueSurat = [...new Set(data.map(s => s.noSurat))].length;

  document.getElementById('rptSummary').innerHTML = `
    <div class="summary-tile"><div class="val">${uniqueSurat}</div><div class="lbl">TOTAL SURAT</div></div>
    <div class="summary-tile accent"><div class="val">${totalItem}</div><div class="lbl">TOTAL BARIS DATA</div></div>
    <div class="summary-tile"><div class="val">${totalJumlah.toLocaleString('id-ID')}</div><div class="lbl">TOTAL JUMLAH MATERIL</div></div>
  `;

  const monthly = Array(12).fill(0);
  STATE.surat.filter(s => s.tglSurat?.startsWith(year)).forEach(s => {
    monthly[new Date(s.tglSurat).getMonth()] += s.jumlah || 0;
  });
  renderReportChart(BULAN, monthly, null, 'bar', 'JUMLAH MATERIL');

  // Group by katalog
  const map = {};
  data.forEach(s => {
    if (!map[s.katalog]) map[s.katalog] = { nama: s.namaBarang, sat: s.sat, jumlah: 0, surat: 0 };
    map[s.katalog].jumlah += s.jumlah || 0;
    map[s.katalog].surat++;
  });

  document.getElementById('rptHead').innerHTML = `<tr><th>KATALOG</th><th>NAMA BARANG</th><th>SAT</th><th>TOTAL JUMLAH</th><th>JML SURAT</th></tr>`;
  document.getElementById('rptBody').innerHTML = Object.entries(map)
    .sort((a,b) => b[1].jumlah - a[1].jumlah)
    .map(([kat, v]) => `<tr>
      <td><code>${kat}</code></td>
      <td>${v.nama}</td>
      <td><span class="badge badge-khaki">${v.sat}</span></td>
      <td style="font-weight:700;color:var(--orange-lt)">${v.jumlah.toLocaleString('id-ID')}</td>
      <td style="color:var(--text2)">${v.surat}</td>
    </tr>`).join('') || '<tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text2)">TIDAK ADA DATA</td></tr>';
}

function rptTriwulan(year) {
  const TW = ['TRIWULAN I (Jan-Mar)', 'TRIWULAN II (Apr-Jun)', 'TRIWULAN III (Jul-Sep)', 'TRIWULAN IV (Okt-Des)'];
  const jumlah = Array(4).fill(0);
  const surat = Array(4).fill(0);
  const suratSet = [new Set(), new Set(), new Set(), new Set()];

  STATE.surat.filter(s => s.tglSurat?.startsWith(year)).forEach(s => {
    const m = new Date(s.tglSurat).getMonth();
    const tw = Math.floor(m / 3);
    jumlah[tw] += s.jumlah || 0;
    surat[tw]++;
    suratSet[tw].add(s.noSurat);
  });

  const totalJml = jumlah.reduce((a,b)=>a+b,0);
  const totalSrt = [...new Set(STATE.surat.filter(s=>s.tglSurat?.startsWith(year)).map(s=>s.noSurat))].length;

  document.getElementById('rptSummary').innerHTML = `
    <div class="summary-tile"><div class="val">${totalSrt}</div><div class="lbl">TOTAL SURAT ${year}</div></div>
    <div class="summary-tile accent"><div class="val">${totalJml.toLocaleString('id-ID')}</div><div class="lbl">TOTAL MATERIL ${year}</div></div>
    <div class="summary-tile"><div class="val">${jumlah.indexOf(Math.max(...jumlah)) + 1}</div><div class="lbl">TRIWULAN TERTINGGI</div></div>
  `;

  renderReportChart(['TW I','TW II','TW III','TW IV'], jumlah, null, 'bar', 'JUMLAH MATERIL');

  document.getElementById('rptHead').innerHTML = `<tr><th>TRIWULAN</th><th>TOTAL SURAT</th><th>BARIS DATA</th><th>TOTAL MATERIL</th><th>% DARI TOTAL</th></tr>`;
  document.getElementById('rptBody').innerHTML = TW.map((tw, i) => `<tr>
    <td><strong>${tw}</strong></td>
    <td>${suratSet[i].size}</td>
    <td>${surat[i]}</td>
    <td style="font-weight:700;color:var(--orange-lt)">${jumlah[i].toLocaleString('id-ID')}</td>
    <td style="color:var(--text2)">${totalJml > 0 ? (jumlah[i]/totalJml*100).toFixed(1)+'%' : '—'}</td>
  </tr>`).join('');
}

function rptTahunan() {
  const years = ['2023', '2024', '2025'];
  const data = years.map(y => {
    const filtered = STATE.surat.filter(s => s.tglSurat?.startsWith(y));
    return {
      jumlah: filtered.reduce((a,s) => a+(s.jumlah||0), 0),
      surat: [...new Set(filtered.map(s=>s.noSurat))].length,
      klien: [...new Set(filtered.map(s=>s.namaKlien))].length
    };
  });

  document.getElementById('rptSummary').innerHTML = `
    <div class="summary-tile"><div class="val">${data.reduce((a,d)=>a+d.surat,0)}</div><div class="lbl">TOTAL SURAT SEMUA TAHUN</div></div>
    <div class="summary-tile accent"><div class="val">${data.reduce((a,d)=>a+d.jumlah,0).toLocaleString('id-ID')}</div><div class="lbl">TOTAL MATERIL SEMUA TAHUN</div></div>
    <div class="summary-tile"><div class="val">${data.reduce((a,d)=>a+d.klien,0)}</div><div class="lbl">TOTAL KLIEN UNIK</div></div>
  `;

  renderReportChart(years, data.map(d=>d.jumlah), null, 'bar', 'JUMLAH MATERIL');

  document.getElementById('rptHead').innerHTML = `<tr><th>TAHUN</th><th>TOTAL SURAT</th><th>TOTAL KLIEN</th><th>TOTAL MATERIL</th><th>PERTUMBUHAN</th></tr>`;
  document.getElementById('rptBody').innerHTML = years.map((y, i) => {
    const growth = i > 0 && data[i-1].jumlah > 0
      ? ((data[i].jumlah - data[i-1].jumlah) / data[i-1].jumlah * 100).toFixed(1)
      : null;
    return `<tr>
      <td><strong>${y}</strong></td>
      <td>${data[i].surat}</td>
      <td>${data[i].klien}</td>
      <td style="font-weight:700;color:var(--orange-lt)">${data[i].jumlah.toLocaleString('id-ID')}</td>
      <td>${growth !== null ? `<span style="color:${parseFloat(growth)>=0?'var(--army-lt)':'var(--red)'}">${growth}%</span>` : '—'}</td>
    </tr>`;
  }).join('');
}

function rptKategori(year) {
  const map = {};
  STATE.surat.filter(s => !year || s.tglSurat?.startsWith(year)).forEach(s => {
    const gk = s.gunaKategori || 'LAIN-LAIN';
    if (!map[gk]) map[gk] = { jumlah: 0, surat: new Set(), klien: new Set() };
    map[gk].jumlah += s.jumlah || 0;
    map[gk].surat.add(s.noSurat);
    map[gk].klien.add(s.namaKlien);
  });

  const sorted = Object.entries(map).sort((a,b) => b[1].jumlah - a[1].jumlah);
  const total = sorted.reduce((a,[,v])=>a+v.jumlah, 0);

  document.getElementById('rptSummary').innerHTML = `
    <div class="summary-tile"><div class="val">${sorted.length}</div><div class="lbl">TOTAL GUNA KATEGORI</div></div>
    <div class="summary-tile accent"><div class="val">${total.toLocaleString('id-ID')}</div><div class="lbl">TOTAL MATERIL ${year}</div></div>
    <div class="summary-tile"><div class="val">${sorted[0]?.[0] || '—'}</div><div class="lbl">KATEGORI TERTINGGI</div></div>
  `;

  const colors = ['#4a7c2f','#e07820','#c8b96a','#6aad40','#f59940','#8a7d50','#2d4d1c','#a85810'];
  renderReportChart(sorted.map(([k])=>k), sorted.map(([,v])=>v.jumlah), null, 'doughnut', 'JUMLAH');

  document.getElementById('rptHead').innerHTML = `<tr><th>GUNA KATEGORI</th><th>TOTAL SURAT</th><th>TOTAL KLIEN</th><th>TOTAL MATERIL</th><th>% TOTAL</th></tr>`;
  document.getElementById('rptBody').innerHTML = sorted.map(([gk, v]) => `<tr>
    <td><span class="badge badge-army">${gk}</span></td>
    <td>${v.surat.size}</td>
    <td>${v.klien.size}</td>
    <td style="font-weight:700;color:var(--orange-lt)">${v.jumlah.toLocaleString('id-ID')}</td>
    <td style="color:var(--text2)">${total > 0 ? (v.jumlah/total*100).toFixed(1)+'%' : '—'}</td>
  </tr>`).join('');
}

function rptKlien(year) {
  const map = {};
  STATE.surat.filter(s => !year || s.tglSurat?.startsWith(year)).forEach(s => {
    if (!map[s.namaKlien]) map[s.namaKlien] = { jumlah: 0, surat: new Set(), katalog: new Set() };
    map[s.namaKlien].jumlah += s.jumlah || 0;
    map[s.namaKlien].surat.add(s.noSurat);
    map[s.namaKlien].katalog.add(s.katalog);
  });

  const sorted = Object.entries(map).sort((a,b) => b[1].jumlah - a[1].jumlah);

  document.getElementById('rptSummary').innerHTML = `
    <div class="summary-tile"><div class="val">${sorted.length}</div><div class="lbl">TOTAL KLIEN</div></div>
    <div class="summary-tile accent"><div class="val">${sorted[0]?.[0].split(' ')[0] || '—'}</div><div class="lbl">KLIEN TERBANYAK</div></div>
    <div class="summary-tile"><div class="val">${sorted.reduce((a,[,v])=>a+v.jumlah,0).toLocaleString('id-ID')}</div><div class="lbl">TOTAL MATERIL</div></div>
  `;

  renderReportChart(sorted.slice(0,8).map(([k])=>k.split(' ')[0]), sorted.slice(0,8).map(([,v])=>v.jumlah), null, 'bar', 'JUMLAH');

  document.getElementById('rptHead').innerHTML = `<tr><th>NAMA KLIEN</th><th>TOTAL SURAT</th><th>JENIS KATALOG</th><th>TOTAL MATERIL</th></tr>`;
  document.getElementById('rptBody').innerHTML = sorted.map(([klien, v]) => `<tr>
    <td style="font-weight:500">${klien}</td>
    <td>${v.surat.size}</td>
    <td style="color:var(--text2)">${v.katalog.size} jenis</td>
    <td style="font-weight:700;color:var(--orange-lt)">${v.jumlah.toLocaleString('id-ID')}</td>
  </tr>`).join('');
}

function renderReportChart(labels, data1, data2, type, label1) {
  const ctx = document.getElementById('reportChart').getContext('2d');
  if (STATE.charts.report) STATE.charts.report.destroy();
  const colors = ['#4a7c2f','#e07820','#c8b96a','#6aad40','#f59940','#8a7d50','#2d4d1c','#a85810'];

  STATE.charts.report = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [{
        label: label1,
        data: data1,
        backgroundColor: type === 'doughnut' ? colors : 'rgba(74,124,47,0.5)',
        borderColor: type === 'doughnut' ? colors : 'rgba(106,173,64,0.8)',
        borderWidth: type === 'doughnut' ? 0 : 1,
        borderRadius: type === 'bar' ? 3 : 0,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#7a9060', font: { family: 'Saira', size: 11 } } } },
      scales: type !== 'doughnut' ? {
        x: { ticks: { color: '#7a9060', font: { family: 'Share Tech Mono', size: 10 } }, grid: { color: 'rgba(46,61,26,0.6)' } },
        y: { ticks: { color: '#7a9060' }, grid: { color: 'rgba(46,61,26,0.6)' } }
      } : undefined
    }
  });
}

// ===== MODAL =====
function openModal(type, id) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  overlay.classList.add('active');

  const katalogOptions = KATALOG_MASTER.map(k =>
    `<option value="${k.katalog}" data-nama="${k.nama}" data-sat="${k.sat}">${k.katalog} — ${k.nama}</option>`
  ).join('');

  const gunaOptions = [...new Set([
    'MAEN NAGA TW 1', 'MAEN NAGA TW 2', 'MAEN NAGA TW 3', 'MAEN NAGA TW 4',
    'LATIHAN MENEMBAK', 'OPERASI TAKTIS', 'PEMELIHARAAN SENJATA', 'UJI PETIK',
    ...STATE.surat.map(s => s.gunaKategori).filter(Boolean)
  ])].map(g => `<option value="${g}">${g}</option>`).join('');

  if (type === 'addSurat') {
    body.innerHTML = `
      <h3>+ TAMBAH DATA SURAT / PPM</h3>
      <div class="form-row">
        <div class="form-group"><label>NO. SURAT *</label><input id="m_noSurat" placeholder="SP/1244/IX/2025"></div>
        <div class="form-group"><label>NO. PPM *</label><input id="m_noPPM" placeholder="PPM/520/MU/IX/2025"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>TGL SURAT</label><input id="m_tglSurat" type="date" value="${new Date().toISOString().split('T')[0]}"></div>
        <div class="form-group"><label>TGL PPM</label><input id="m_tglPPM" type="date"></div>
      </div>
      <div class="form-group"><label>NAMA KLIEN *</label><input id="m_klien" placeholder="Danyonif TP 836/BY"></div>
      <div class="form-group">
        <label>KATALOG * <span style="color:var(--orange);font-size:10px">(TETAP — TIDAK DAPAT DIUBAH SETELAH DIPILIH)</span></label>
        <select id="m_katalog" onchange="onKatalogChange(this)">
          <option value="">— PILIH KATALOG —</option>
          ${katalogOptions}
        </select>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>JENIS BARANG <span class="form-note">AUTO DARI KATALOG</span></label>
          <input id="m_namaBarang" readonly placeholder="Otomatis terisi">
        </div>
        <div class="form-group">
          <label>SATUAN <span class="form-note">AUTO DARI KATALOG</span></label>
          <input id="m_sat" readonly placeholder="Otomatis terisi">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>JUMLAH *</label><input id="m_jumlah" type="number" placeholder="0" min="1"></div>
        <div class="form-group">
          <label>GUNA KATEGORI *</label>
          <select id="m_guna">
            <option value="">— PILIH KATEGORI —</option>
            ${gunaOptions}
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn-cancel" onclick="closeModal()">BATAL</button>
        <button class="btn-primary" onclick="saveSurat()">SIMPAN DATA</button>
      </div>`;
  }

  else if (type === 'editSurat') {
    const s = STATE.surat.find(x => x.id === id);
    body.innerHTML = `
      <h3>EDIT DATA SURAT</h3>
      <input type="hidden" id="m_id" value="${s.id}">
      <div class="form-row">
        <div class="form-group"><label>NO. SURAT</label><input id="m_noSurat" value="${s.noSurat}"></div>
        <div class="form-group"><label>NO. PPM</label><input id="m_noPPM" value="${s.noPPM}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>TGL SURAT</label><input id="m_tglSurat" type="date" value="${s.tglSurat}"></div>
        <div class="form-group"><label>TGL PPM</label><input id="m_tglPPM" type="date" value="${s.tglPPM || ''}"></div>
      </div>
      <div class="form-group"><label>NAMA KLIEN</label><input id="m_klien" value="${s.namaKlien}"></div>
      <div class="form-group">
        <label>KATALOG <span style="color:var(--orange);font-size:10px">⚠ KODE & NAMA TIDAK DAPAT DIUBAH</span></label>
        <input readonly value="${s.katalog}" style="font-family:'Share Tech Mono',monospace;color:var(--army-lt)">
      </div>
      <div class="form-row">
        <div class="form-group"><label>JENIS BARANG</label><input readonly value="${s.namaBarang}"></div>
        <div class="form-group"><label>SATUAN</label><input readonly value="${s.sat}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label>JUMLAH</label><input id="m_jumlah" type="number" value="${s.jumlah}"></div>
        <div class="form-group">
          <label>GUNA KATEGORI</label>
          <select id="m_guna">
            ${gunaOptions.replace(`value="${s.gunaKategori}"`, `value="${s.gunaKategori}" selected`)}
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn-cancel" onclick="closeModal()">BATAL</button>
        <button class="btn-primary" onclick="updateSurat('${s.id}')">PERBARUI</button>
      </div>`;
  }
}

function onKatalogChange(sel) {
  const opt = sel.options[sel.selectedIndex];
  document.getElementById('m_namaBarang').value = opt.dataset.nama || '';
  document.getElementById('m_sat').value = opt.dataset.sat || '';
}

async function saveSurat() {
  const noSurat = document.getElementById('m_noSurat').value.trim();
  const noPPM   = document.getElementById('m_noPPM').value.trim();
  const klien   = document.getElementById('m_klien').value.trim();
  const katalog = document.getElementById('m_katalog').value;
  const jumlah  = parseInt(document.getElementById('m_jumlah').value);
  const guna    = document.getElementById('m_guna').value;

  if (!noSurat || !noPPM || !klien || !katalog || !jumlah || !guna) {
    showToast('⚠ LENGKAPI SEMUA KOLOM WAJIB', true); return;
  }

  const katData = KATALOG_MASTER.find(k => k.katalog === katalog);
  showLoading(true);

  try {
    await DB.addSurat({
      noSurat, noPPM,
      tglSurat:     document.getElementById('m_tglSurat').value,
      tglPPM:       document.getElementById('m_tglPPM').value,
      namaKlien:    klien,
      katalog,
      namaBarang:   katData?.nama || '',
      sat:          katData?.sat  || '',
      jumlah,
      gunaKategori: guna
    });
    closeModal();
    renderSuratTable();
    showToast('✅ DATA DISIMPAN' + (DB.mode === 'api' ? ' → GOOGLE SHEETS' : ' (LOKAL)'));
  } catch (err) {
    showToast('❌ GAGAL: ' + err.message, true);
  } finally {
    showLoading(false);
  }
}

async function updateSurat(id) {
  showLoading(true);
  try {
    await DB.updateSurat(id, {
      noSurat:      document.getElementById('m_noSurat').value,
      noPPM:        document.getElementById('m_noPPM').value,
      tglSurat:     document.getElementById('m_tglSurat').value,
      tglPPM:       document.getElementById('m_tglPPM').value,
      namaKlien:    document.getElementById('m_klien').value,
      jumlah:       document.getElementById('m_jumlah').value,
      gunaKategori: document.getElementById('m_guna').value,
    });
    closeModal();
    renderSuratTable();
    showToast('✅ DATA DIPERBARUI' + (DB.mode === 'api' ? ' → GOOGLE SHEETS' : ''));
  } catch (err) {
    showToast('❌ GAGAL: ' + err.message, true);
  } finally {
    showLoading(false);
  }
}

async function deleteSurat(id) {
  if (!confirm('HAPUS DATA INI?')) return;
  showLoading(true);
  try {
    await DB.deleteSurat(id);
    renderSuratTable();
    showToast('✅ DATA DIHAPUS' + (DB.mode === 'api' ? ' DARI GOOGLE SHEETS' : ''));
  } catch (err) {
    showToast('❌ GAGAL HAPUS: ' + err.message, true);
  } finally {
    showLoading(false);
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// ===== EXPORT =====
function exportSuratCSV() {
  const headers = ['NO','NO. SURAT','NO. PPM','TGL SURAT','TGL PPM','NAMA KLIEN','KATALOG','JENIS BARANG','SAT','JUMLAH','GUNA KATEGORI'];
  const rows = STATE.surat.map((s, i) => [
    i+1, s.noSurat, s.noPPM, s.tglSurat, s.tglPPM, s.namaKlien,
    s.katalog, s.namaBarang, s.sat, s.jumlah, s.gunaKategori
  ]);
  dlCSV(headers, rows, `simumu_data_surat_${today()}.csv`);
  showToast('✅ EXPORT CSV BERHASIL');
}

function exportReport() {
  const thead = document.getElementById('rptHead');
  const tbody = document.getElementById('rptBody');
  const headers = Array.from(thead.querySelectorAll('th')).map(th => th.textContent);
  const rows = Array.from(tbody.querySelectorAll('tr')).map(tr =>
    Array.from(tr.querySelectorAll('td')).map(td => td.innerText)
  );
  dlCSV(headers, rows, `simumu_laporan_${STATE.currentReport}_${today()}.csv`);
  showToast('✅ EXPORT LAPORAN BERHASIL');
}

function dlCSV(headers, rows, filename) {
  const csv = [headers, ...rows].map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

function today() { return new Date().toISOString().split('T')[0]; }

// ===== AI CHAT =====
function saveApiKey() {
  const k = document.getElementById('apiKeyInput').value.trim();
  if (!k) { showToast('⚠ MASUKKAN API KEY', true); return; }
  STATE.apiKey = k;
  localStorage.setItem('simumu_api_key', k);
  showToast('✅ API KEY TERSIMPAN');
}

function getDataSummary() {
  const totalJml = STATE.surat.reduce((a,s)=>a+s.jumlah,0);
  const uniqSurat = [...new Set(STATE.surat.map(s=>s.noSurat))];
  const uniqKlien = [...new Set(STATE.surat.map(s=>s.namaKlien))];
  const katMap = {};
  STATE.surat.forEach(s => { katMap[s.katalog] = (katMap[s.katalog]||0) + s.jumlah; });
  const topKat = Object.entries(katMap).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const gunaMap = {};
  STATE.surat.forEach(s => { gunaMap[s.gunaKategori] = (gunaMap[s.gunaKategori]||0) + s.jumlah; });

  return `
SIMUMU — DATA INVENTORI MATERIL
Total Surat/PPM: ${uniqSurat.length}
Total Baris Data: ${STATE.surat.length}
Total Jumlah Materil Keluar: ${totalJml.toLocaleString('id-ID')}
Total Klien: ${uniqKlien.length}
Total Jenis Katalog Tersedia: 62

TOP 5 KATALOG TERBANYAK DIKELUARKAN:
${topKat.map(([k,v])=>`- ${k}: ${v.toLocaleString('id-ID')} satuan`).join('\n')}

DISTRIBUSI GUNA KATEGORI:
${Object.entries(gunaMap).map(([g,v])=>`- ${g}: ${v.toLocaleString('id-ID')} satuan`).join('\n')}

DAFTAR KLIEN AKTIF:
${uniqKlien.join(', ')}

10 DATA TERBARU:
${STATE.surat.slice(0,10).map(s=>`- ${s.tglSurat} | ${s.noSurat} | ${s.namaKlien} | ${s.katalog} | ${s.jumlah} ${s.sat} | ${s.gunaKategori}`).join('\n')}
`;
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
}

function sendQuick(text) {
  document.getElementById('chatInput').value = text;
  sendChat();
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  if (!STATE.apiKey) {
    showToast('⚠ MASUKKAN API KEY DI ATAS TERLEBIH DAHULU', true); return;
  }

  input.value = '';
  addMsg(msg, 'user');

  const typing = document.createElement('div');
  typing.className = 'chat-msg ai';
  typing.id = 'typing';
  typing.innerHTML = `<div class="chat-avatar">AI</div><div class="bubble"><div class="typing"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  document.getElementById('chatBox').appendChild(typing);
  scrollChat();

  const btn = document.getElementById('sendBtn');
  btn.disabled = true;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': STATE.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        system: `Anda adalah AI Analis untuk sistem SIMUMU (Sistem Manajemen Materil Militer). Anda memiliki akses ke data berikut:\n\n${getDataSummary()}\n\nBerikan analisis yang tajam, terstruktur, dan menggunakan terminologi militer yang tepat. Gunakan Bahasa Indonesia formal. Saat memberikan angka, gunakan format yang mudah dibaca. Berikan insight yang actionable dan konkret.`,
        messages: [{ role: 'user', content: msg }]
      })
    });

    const data = await res.json();
    document.getElementById('typing')?.remove();

    if (data.content?.[0]) addMsg(data.content[0].text, 'ai');
    else addMsg(`ERROR: ${data.error?.message || 'Tidak dapat menghubungi AI'}`, 'ai');
  } catch (err) {
    document.getElementById('typing')?.remove();
    addMsg(`KONEKSI GAGAL: ${err.message}`, 'ai');
  }

  btn.disabled = false;
}

function addMsg(text, role) {
  const box = document.getElementById('chatBox');
  const d = document.createElement('div');
  d.className = `chat-msg ${role}`;
  const avatar = role === 'ai' ? '<div class="chat-avatar">AI</div>' : '<div class="chat-avatar" style="background:var(--orange-dk);border-color:var(--orange);color:var(--orange-lt)">OPR</div>';
  d.innerHTML = `${role==='ai'?avatar:''}<div class="bubble">${fmtText(text)}</div>${role==='user'?avatar:''}`;
  box.appendChild(d);
  scrollChat();
}

function fmtText(t) {
  return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
           .replace(/\*(.*?)\*/g,'<em>$1</em>')
           .replace(/\n/g,'<br>');
}

function scrollChat() {
  const b = document.getElementById('chatBox');
  b.scrollTop = b.scrollHeight;
}

// ===== LOADING INDICATOR =====
function showLoading(show) {
  let el = document.getElementById('loadingBar');
  if (!el) {
    el = document.createElement('div');
    el.id = 'loadingBar';
    el.style.cssText = 'position:fixed;top:0;left:0;right:0;height:2px;background:var(--orange);z-index:9999;animation:loadPulse 1s infinite;display:none';
    document.body.appendChild(el);
    const style = document.createElement('style');
    style.textContent = '@keyframes loadPulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}';
    document.head.appendChild(style);
  }
  el.style.display = show ? 'block' : 'none';
}

// ===== DB STATUS INDICATOR =====
function updateDBStatus() {
  const dot   = document.getElementById('statusDot');
  const label = document.getElementById('statusLabel');
  const modeEl = document.getElementById('dbModeLabel');
  if (!dot) return;

  if (DB.mode === 'api') {
    dot.style.background = '#6aad40';
    dot.style.boxShadow  = '0 0 6px #6aad40';
    label.textContent    = 'ONLINE';
    if (modeEl) modeEl.textContent = 'Google Sheets';
  } else {
    dot.style.background = '#e07820';
    dot.style.boxShadow  = '0 0 6px #e07820';
    label.textContent    = 'LOKAL';
    if (modeEl) modeEl.textContent = 'localStorage';
  }
}

// ===== CONFIG API MODAL =====
function openConfigModal() {
  openModal('configAPI');
}

// Tambahkan ke openModal()
const _origOpenModal = openModal;
function openModal(type, id) {
  if (type === 'configAPI') {
    const overlay = document.getElementById('modalOverlay');
    const body    = document.getElementById('modalBody');
    overlay.classList.add('active');
    const savedUrl = localStorage.getItem('simumu_api_url') || '';
    body.innerHTML = `
      <h3>⚙ KONFIGURASI DATABASE</h3>

      <div style="background:var(--bg3);border:1px solid var(--border2);border-left:3px solid var(--orange);border-radius:4px;padding:14px;margin-bottom:18px;font-size:12px;line-height:1.7;color:var(--text2)">
        <strong style="color:var(--orange-lt)">CARA SETUP GOOGLE SHEETS:</strong><br>
        1. Buka <a href="https://script.google.com" target="_blank" style="color:var(--army-lt)">script.google.com</a> → Project Baru<br>
        2. Copy-paste isi file <code>backend/Code.gs</code><br>
        3. Klik <strong>Deploy → New Deployment → Web App</strong><br>
        4. Execute as: <strong>Me</strong> | Access: <strong>Anyone</strong><br>
        5. Copy URL deployment → paste di bawah<br>
        6. Klik <strong>TEST KONEKSI</strong> dulu sebelum simpan
      </div>

      <div class="form-group">
        <label>URL GOOGLE APPS SCRIPT *</label>
        <input id="cfg_url" placeholder="https://script.google.com/macros/s/AKfy.../exec"
          value="${savedUrl}" style="font-family:'Share Tech Mono',monospace;font-size:11px">
      </div>

      <div style="display:flex;gap:10px;align-items:center;margin-bottom:14px">
        <button class="btn-export" onclick="testAPIConnection()" id="btnTest">🔌 TEST KONEKSI</button>
        <div id="testResult" style="font-size:12px;color:var(--text2)"></div>
      </div>

      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:4px;padding:12px;margin-bottom:16px">
        <div style="font-size:10px;font-weight:700;letter-spacing:1px;color:var(--text2);margin-bottom:8px">MODE AKTIF SEKARANG</div>
        <div style="display:flex;gap:10px">
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:12px">
            <input type="radio" name="dbMode" value="api" ${DB.mode==='api'?'checked':''} onchange="DB.setMode('api');updateDBStatus()">
            Google Sheets (Online)
          </label>
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:12px">
            <input type="radio" name="dbMode" value="local" ${DB.mode==='local'?'checked':''} onchange="DB.setMode('local');updateDBStatus()">
            localStorage (Offline)
          </label>
        </div>
      </div>

      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:4px;padding:12px;margin-bottom:16px">
        <div style="font-size:10px;font-weight:700;letter-spacing:1px;color:var(--text2);margin-bottom:8px">MIGRASI DATA</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn-export" onclick="migrateLocalToSheets()" id="btnMigrate">📤 Upload Lokal → Sheets</button>
          <button class="btn-export" onclick="syncFromSheets()">📥 Sync Sheets → Lokal</button>
        </div>
        <div id="migrateResult" style="font-size:11px;color:var(--text2);margin-top:8px"></div>
      </div>

      <div class="form-actions">
        <button class="btn-cancel" onclick="closeModal()">TUTUP</button>
        <button class="btn-primary" onclick="saveAPIConfig()">SIMPAN KONFIGURASI</button>
      </div>`;
    return;
  }
  _origOpenModal(type, id);
}

async function testAPIConnection() {
  const url = document.getElementById('cfg_url').value.trim();
  if (!url) { showToast('⚠ Masukkan URL terlebih dahulu', true); return; }
  const btn = document.getElementById('btnTest');
  const res = document.getElementById('testResult');
  btn.textContent = '⏳ Mengecek...';
  btn.disabled = true;
  res.textContent = '';
  try {
    API.setUrl(url);
    const data = await API.ping();
    res.innerHTML = `<span style="color:var(--army-lt)">✅ TERHUBUNG — ${data.message}</span>`;
  } catch (err) {
    res.innerHTML = `<span style="color:var(--red)">❌ GAGAL: ${err.message}</span>`;
  } finally {
    btn.textContent = '🔌 TEST KONEKSI';
    btn.disabled = false;
  }
}

function saveAPIConfig() {
  const url = document.getElementById('cfg_url').value.trim();
  if (url) {
    API.setUrl(url);
    DB.setMode('api');
  }
  updateDBStatus();
  closeModal();
  showToast('✅ KONFIGURASI DISIMPAN');
}

async function migrateLocalToSheets() {
  if (!API.isConfigured()) { showToast('⚠ Konfigurasi API URL dulu', true); return; }
  const btn = document.getElementById('btnMigrate');
  const res = document.getElementById('migrateResult');
  btn.disabled = true;
  btn.textContent = '⏳ Mengupload...';

  let success = 0, fail = 0;
  for (const s of STATE.surat) {
    try {
      await API.addSurat({
        noSurat: s.noSurat, noPPM: s.noPPM,
        tglSurat: s.tglSurat, tglPPM: s.tglPPM,
        namaKlien: s.namaKlien, katalog: s.katalog,
        namaBarang: s.namaBarang, sat: s.sat,
        jumlah: s.jumlah, gunaKategori: s.gunaKategori
      });
      success++;
    } catch { fail++; }
  }

  res.innerHTML = `<span style="color:var(--army-lt)">✅ ${success} berhasil</span>${fail > 0 ? ` <span style="color:var(--red)">| ${fail} gagal</span>` : ''}`;
  btn.textContent = '📤 Upload Lokal → Sheets';
  btn.disabled = false;
  if (success > 0) showToast(`✅ ${success} data berhasil diupload ke Google Sheets`);
}

async function syncFromSheets() {
  if (!API.isConfigured()) { showToast('⚠ Konfigurasi API URL dulu', true); return; }
  showLoading(true);
  try {
    await DB.syncFromAPI();
    renderDashboard();
    showToast('✅ DATA BERHASIL DISYNC DARI GOOGLE SHEETS');
    document.getElementById('migrateResult').innerHTML =
      `<span style="color:var(--army-lt)">✅ ${STATE.surat.length} record berhasil disync</span>`;
  } catch (err) {
    showToast('❌ SYNC GAGAL: ' + err.message, true);
  } finally {
    showLoading(false);
  }
}

// ===== UTILS =====
function showToast(msg, isErr = false) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  t.className = `toast${isErr ? ' err' : ''}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// ===== INIT =====
async function init() {
  loadData();
  if (STATE.apiKey) document.getElementById('apiKeyInput').value = '••••••••••••';

  // Cek apakah API sudah dikonfigurasi
  if (API.isConfigured()) {
    DB.setMode('api');
    try {
      showLoading(true);
      await DB.syncFromAPI();
    } catch (e) {
      console.warn('API tidak dapat dijangkau, fallback ke lokal');
      DB.setMode('local');
    } finally {
      showLoading(false);
    }
  } else {
    DB.setMode('local');
  }

  updateDBStatus();
  renderDashboard();
  navigate('dashboard');
}

window.addEventListener('DOMContentLoaded', init);
