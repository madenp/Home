# ✅ SOLUSI: Error "Please tell me who you are"

## 🔴 Problem
```
*** Please tell me who you are.
fatal: unable to auto-detect email address
```

## ✅ Solusi Cepat

Jalankan 2 perintah ini di PowerShell (ganti dengan info Anda):

```bash
git config --global user.name "Nama Anda"
```

```bash
git config --global user.email "email@anda.com"
```

**Contoh:**
```bash
git config --global user.name "Made Ngurah Purnaman"
git config --global user.email "madenp@gmail.com"
```

## ✅ Verifikasi

Cek apakah sudah berhasil:

```bash
git config --global user.name
git config --global user.email
```

## ✅ Lanjutkan Push ke GitHub

Setelah konfigurasi selesai, jalankan kembali:

```bash
git add .
git commit -m "Initial commit: Home Apps portfolio dashboard"
git remote add origin https://github.com/madenp/Home.git
git branch -M main
git push -u origin main
```

---

## 📚 Panduan Lengkap

Lihat file **`LANGKAH-PUSH-GITHUB.md`** untuk panduan step-by-step lengkap.

---

**💡 Catatan:** Konfigurasi ini hanya perlu dilakukan **SEKALI** di komputer Anda!
