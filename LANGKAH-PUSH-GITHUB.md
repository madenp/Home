# 🚀 Langkah-Langkah Push ke GitHub

Repository: **https://github.com/madenp/Home**

---

## 📋 Langkah 1: Inisialisasi Git

Buka **PowerShell** atau **Command Prompt** di folder project ini, lalu jalankan:

```bash
git init
```

**Hasil yang diharapkan:**
```
Initialized empty Git repository in C:/Dokumen/CRUD/Google/Home Apps/.git/
```

---

## 📋 Langkah 2: Tambahkan Semua File

```bash
git add .
```

**Penjelasan:** Perintah ini menambahkan semua file ke staging area (persiapan untuk commit).

---

## 📋 Langkah 3: Buat Commit Pertama

```bash
git commit -m "Initial commit: Home Apps portfolio dashboard"
```

**Hasil yang diharapkan:**
```
[main (root-commit) xxxxxxx] Initial commit: Home Apps portfolio dashboard
 11 files changed, xxx insertions(+)
 create mode 100644 .gitignore
 create mode 100644 LICENSE
 create mode 100644 README.md
 ...
```

---

## 📋 Langkah 4: Hubungkan dengan Repository GitHub

```bash
git remote add origin https://github.com/madenp/Home.git
```

**Penjelasan:** Perintah ini menghubungkan repository lokal Anda dengan repository di GitHub.

---

## 📋 Langkah 5: Rename Branch ke Main

```bash
git branch -M main
```

**Penjelasan:** Memastikan branch utama bernama "main" (standar GitHub modern).

---

## 📋 Langkah 6: Push ke GitHub

```bash
git push -u origin main
```

**Penjelasan:** Upload semua file ke GitHub.

### ⚠️ Jika Diminta Login:

**Username:** `madenp` (username GitHub Anda)

**Password:** Gunakan **Personal Access Token** (BUKAN password GitHub biasa)

#### Cara Membuat Personal Access Token:

1. Buka: https://github.com/settings/tokens
2. Klik **"Generate new token"** → **"Tokens (classic)"**
3. Isi form:
   - **Note:** `Home Apps Token`
   - **Expiration:** `No expiration` (atau sesuai kebutuhan)
   - **Select scopes:** Centang ✅ **`repo`** (full control of private repositories)
4. Scroll ke bawah, klik **"Generate token"**
5. **COPY TOKEN** (hanya muncul sekali! Simpan di tempat aman)
6. Paste token sebagai password saat diminta

---

## ✅ Langkah 7: Verifikasi

Setelah push berhasil, buka browser dan cek:

**Repository:** https://github.com/madenp/Home

Anda akan melihat semua file sudah ter-upload! 🎉

---

## 🌐 BONUS: Deploy ke GitHub Pages (Hosting Gratis!)

Agar aplikasi bisa diakses online:

### Langkah 1: Buka Settings
1. Buka repository: https://github.com/madenp/Home
2. Klik tab **"Settings"** (di atas)

### Langkah 2: Aktifkan GitHub Pages
1. Di sidebar kiri, klik **"Pages"**
2. Di bagian **"Source"**:
   - **Branch:** Pilih `main`
   - **Folder:** Pilih `/ (root)`
3. Klik **"Save"**

### Langkah 3: Tunggu Deploy
- Tunggu 2-5 menit
- Refresh halaman
- Akan muncul link: **https://madenp.github.io/Home/**

### Langkah 4: Akses Aplikasi
Buka browser dan akses:
```
https://madenp.github.io/Home/
```

**Aplikasi Anda sekarang LIVE di internet!** 🌍✨

---

## 🔄 Update di Masa Depan

Setiap kali Anda membuat perubahan pada project:

```bash
# 1. Tambahkan file yang berubah
git add .

# 2. Commit dengan pesan yang jelas
git commit -m "Update: deskripsi perubahan yang dibuat"

# 3. Push ke GitHub
git push
```

**Atau gunakan script otomatis:**
- Double-click file `update-github.bat`
- Ketik deskripsi perubahan
- Tekan Enter
- Selesai! ✅

---

## 🆘 Troubleshooting

### Problem: "error: remote origin already exists"
**Solusi:**
```bash
git remote set-url origin https://github.com/madenp/Home.git
```

### Problem: "Updates were rejected"
**Solusi:**
```bash
git pull origin main --rebase
git push
```

### Problem: "fatal: not a git repository"
**Solusi:**
```bash
git init
```

### Cek Status Git
```bash
git status
```

### Lihat Remote Repository
```bash
git remote -v
```

### Lihat History Commit
```bash
git log --oneline
```

---

## 📝 Checklist

Centang setiap langkah yang sudah selesai:

- [ ] Langkah 1: `git init`
- [ ] Langkah 2: `git add .`
- [ ] Langkah 3: `git commit -m "..."`
- [ ] Langkah 4: `git remote add origin ...`
- [ ] Langkah 5: `git branch -M main`
- [ ] Langkah 6: `git push -u origin main`
- [ ] Langkah 7: Verifikasi di GitHub
- [ ] BONUS: Setup GitHub Pages
- [ ] BONUS: Akses aplikasi live

---

## 🎯 Ringkasan Perintah (Copy-Paste Semua)

```bash
git init
git add .
git commit -m "Initial commit: Home Apps portfolio dashboard"
git remote add origin https://github.com/madenp/Home.git
git branch -M main
git push -u origin main
```

---

**Selamat! Project Anda sekarang sudah di GitHub!** 🎉

**Repository:** https://github.com/madenp/Home

**Live App (setelah setup Pages):** https://madenp.github.io/Home/
