# 📋 PANDUAN SETUP GOOGLE SHEETS BACKEND
## SIMUMU — Sistem Manajemen Munisi & Materil

---

## 🏗️ ARSITEKTUR SISTEM

```
┌─────────────────────┐     HTTPS      ┌──────────────────────┐     Read/Write    ┌─────────────────┐
│  SIMUMU             │ ◄──────────── ► │  Google Apps Script  │ ◄───────────────► │  Google Sheets  │
│  (GitHub Pages)     │                 │  (REST API / Backend)│                   │  (Database)     │
└─────────────────────┘                 └──────────────────────┘                   └─────────────────┘
```

**Tidak perlu server!** Semua gratis dan berjalan di cloud Google.

---

## LANGKAH 1 — Buat Google Sheets

1. Buka [sheets.google.com](https://sheets.google.com)
2. Buat spreadsheet baru
3. Beri nama: **"SIMUMU Database"**
4. Catat URL spreadsheet (akan dipakai nanti)

---

## LANGKAH 2 — Setup Google Apps Script

1. Di Google Sheets, klik menu **Extensions → Apps Script**
2. Hapus semua kode default yang ada
3. **Copy-paste** seluruh isi file `backend/Code.gs` dari repository ini
4. Klik ikon 💾 **Save** (atau Ctrl+S)
5. Beri nama project: **"SIMUMU API"**

### Test Dulu (Opsional)
- Di editor Apps Script, pilih fungsi `testAPI` di dropdown
- Klik ▶ **Run**
- Cek **Execution Log** — harus ada output sukses

---

## LANGKAH 3 — Deploy sebagai Web App

1. Klik **Deploy → New Deployment**
2. Klik ⚙ icon di samping "Select type" → pilih **Web app**
3. Isi konfigurasi:
   ```
   Description    : SIMUMU API v1
   Execute as     : Me (akun Google Anda)
   Who has access : Anyone  ← PENTING!
   ```
4. Klik **Deploy**
5. Klik **Authorize access** jika diminta → izinkan semua permission
6. **Copy URL** yang muncul (format: `https://script.google.com/macros/s/AKfy.../exec`)

⚠️ **Simpan URL ini!** Ini adalah endpoint API Anda.

---

## LANGKAH 4 — Hubungkan ke SIMUMU

### Via Tombol di Aplikasi:
1. Buka SIMUMU di browser
2. Klik tombol **⚙** di sidebar kiri bawah
3. Paste URL Apps Script ke kolom yang tersedia
4. Klik **🔌 TEST KONEKSI** — pastikan berhasil
5. Klik **📤 Upload Lokal → Sheets** untuk migrasi data sample
6. Klik **SIMPAN KONFIGURASI**

### Via Code (alternatif):
Edit file `api.js` baris pertama:
```javascript
BASE_URL: 'https://script.google.com/macros/s/PASTE_URL_ANDA_DISINI/exec',
```

---

## LANGKAH 5 — Setup GitHub Pages

1. Push semua file ke GitHub repository
2. Settings → Pages → Source: **Deploy from branch**
3. Branch: `main` / Folder: `/ (root)`
4. Tunggu beberapa menit
5. Akses di: `https://username.github.io/simumu`

---

## 📂 Struktur Google Sheets (otomatis dibuat)

Sheet **DATA_SURAT** (dibuat otomatis saat pertama kali pakai):

| ID | NO_URUT | NO_SURAT | NO_PPM | TGL_SURAT | TGL_PPM | NAMA_KLIEN | KATALOG | NAMA_BARANG | SAT | JUMLAH | GUNA_KATEGORI | CREATED_AT | UPDATED_AT |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Sheet **LOG_AKTIVITAS** (otomatis mencatat semua perubahan):

| TIMESTAMP | AKSI | ID | USER | DETAIL |
|---|---|---|---|---|

---

## 🔁 Mode Operasi

| Mode | Deskripsi | Kapan Dipakai |
|---|---|---|
| **Google Sheets** | Data tersimpan di cloud, bisa diakses dari mana saja | Setelah setup selesai |
| **localStorage** | Data tersimpan di browser lokal | Sebelum setup / offline |

Aplikasi otomatis **fallback ke localStorage** jika API tidak dapat dijangkau.

---

## ⚡ Tips & Catatan

- **Quota Apps Script**: 6 menit/eksekusi, 20.000 request/hari (lebih dari cukup)
- **Update kode**: Jika edit `Code.gs`, buat **deployment baru** (bukan update existing) agar URL tidak berubah
- **Backup**: Google Sheets bisa di-download kapan saja sebagai Excel
- **Akses bersama**: Bisa share Google Sheets ke tim untuk edit langsung via spreadsheet
- **CORS**: Apps Script otomatis handle CORS, tidak perlu konfigurasi tambahan

---

## 🛠️ Troubleshooting

| Masalah | Solusi |
|---|---|
| "Access denied" | Pastikan "Who has access" = **Anyone** saat deploy |
| Test koneksi gagal | Coba buat deployment **baru** (jangan update existing) |
| Data tidak muncul | Klik "📥 Sync Sheets → Lokal" di panel konfigurasi |
| Error 403 | Re-authorize di Apps Script Editor → Run fungsi apapun |

---

## 📌 Referensi

- [Google Apps Script Docs](https://developers.google.com/apps-script)
- [GitHub Pages Docs](https://pages.github.com)
- [Apps Script Quotas](https://developers.google.com/apps-script/guides/services/quotas)
