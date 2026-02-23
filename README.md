# ☆ SIMUMU — Sistem Manajemen Munisi 

> Sistem manajemen materil militer berbasis web dengan AI Analis terintegrasi (Anthropic Claude). Mengelola data Surat/PPM, 62 Katalog baku, rekap laporan Bulanan/Triwulan/Tahunan/Per Kategori/Per Klien.

![Status](https://img.shields.io/badge/Status-Aktif-brightgreen)
![AI](https://img.shields.io/badge/AI-Claude%20API-orange)
![No Backend](https://img.shields.io/badge/Backend-Tidak%20Diperlukan-blue)

---

## ✨ Fitur Lengkap

### 📋 Data Surat / PPM
Kolom sesuai format database:
| Kolom | Keterangan |
|---|---|
| NO | Nomor urut otomatis |
| NO. SURAT | Nomor surat (mis: SP/1244/IX/2025) |
| NO. PPM | Nomor PPM (mis: PPM/520/MU/IX/2025) |
| NAMA KLIEN | Nama satuan/klien penerima |
| KATALOG | Kode katalog — dipilih dari 62 katalog baku |
| JENIS BARANG | **Otomatis dari katalog, tidak dapat diubah** |
| SAT | **Otomatis dari katalog, tidak dapat diubah** |
| JUMLAH | Jumlah materil keluar |
| GUNA KATEGORI | Kategori penggunaan (mis: MAEN NAGA TW 1) |

### 🏷️ Katalog Materil (62 Jenis — BAKU)
- Semua 62 katalog sudah hardcoded sesuai data Excel
- **Kode Katalog dan Nama Barang TIDAK DAPAT DIUBAH**
- Prefix: `IF`, `ART`, `SUS`, `E`
- Satuan: BUTIR, BATANG, METER, SET, REK, REN, SLOP

### 📊 Rekap Laporan (5 Jenis)
| Laporan | Keterangan |
|---|---|
| **Bulanan** | Rekap per bulan, filter tahun & bulan |
| **Triwulan** | Rekap TW I–IV dengan % distribusi |
| **Tahunan** | Perbandingan antar tahun + pertumbuhan % |
| **Per Kategori** | Rekap per Guna Kategori |
| **Per Klien** | Rekap per satuan/klien penerima |

### 🤖 AI Analis (Claude API)
- Analisis data pengeluaran materil
- Identifikasi katalog & klien terbanyak
- Prediksi kebutuhan materil
- Rekapitulasi laporan natural language
- Rekomendasi pengadaan

---

## 🚀 Cara Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/simumu.git
cd simumu
```

### 2. Jalankan (Tidak Perlu Server)
```bash
# Langsung buka di browser:
open index.html

# Atau Python:
python3 -m http.server 8080

# Atau VS Code Live Server extension
```

### 3. Setup AI Analis (Opsional)
1. Buat akun di [console.anthropic.com](https://console.anthropic.com)
2. Generate API Key
3. Di aplikasi → **AI ANALIS** → masukkan API Key → klik **SIMPAN**

---

## 📁 Struktur File

```
simumu/
├── index.html    # Struktur halaman & navigasi
├── style.css     # Tema green army + oranye, dark mode
├── app.js        # Logic + 62 katalog baku + AI integration
└── README.md     # Dokumentasi
```

---

## 🎨 Tema Visual

- **Background**: Dark military green (#0e1008)
- **Aksen Utama**: Green Army (#4a7c2f / #6aad40)
- **Aksen Oranye**: (#e07820 / #f59940)
- **Font**: Rajdhani (judul), Saira (body), Share Tech Mono (kode)

---

## 🔧 Kustomisasi

### Tambah Guna Kategori Default
Di `app.js`, cari `SAMPLE_GUNA`:
```javascript
const SAMPLE_GUNA = [
  'MAEN NAGA TW 1', 'MAEN NAGA TW 2', ...
  'TAMBAHKAN KATEGORI BARU DI SINI'
];
```

### Ganti Model AI
Di fungsi `sendChat()`:
```javascript
model: 'claude-sonnet-4-6'  // lebih hemat
// atau
model: 'claude-opus-4-6'    // paling canggih
```

### Hapus Data Sample
Buka DevTools (F12) → Console → ketik:
```javascript
localStorage.clear()
```
Kemudian refresh halaman.

---

## ⚠️ Aturan Bisnis

1. **62 Katalog BAKU** — kode dan nama barang tidak dapat diubah
2. Saat memilih katalog dalam form, **Jenis Barang dan Satuan otomatis terisi**
3. Saat edit data, katalog lama **tidak dapat diganti** (hapus dan buat ulang)

---

## 📄 Lisensi

MIT — Bebas digunakan dan dimodifikasi untuk kebutuhan internal.
