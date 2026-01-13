---
description: Setup dan push project ke GitHub
---

# Workflow: Setup GitHub dan Push Project

Ikuti langkah-langkah berikut untuk meng-upload project "Home Apps" ke GitHub:

## 1. Inisialisasi Git Repository

Pertama, inisialisasi repository Git di folder project:

```bash
git init
```

## 2. Konfigurasi Git (Jika Belum)

Jika ini pertama kali menggunakan Git, set username dan email Anda:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

## 3. Tambahkan Semua File ke Staging

Tambahkan semua file project ke staging area:

```bash
git add .
```

## 4. Commit Perubahan

Buat commit pertama dengan pesan yang jelas:

```bash
git commit -m "Initial commit: Home Apps portfolio dashboard"
```

## 5. Buat Repository di GitHub

1. Buka [GitHub](https://github.com)
2. Login ke akun Anda
3. Klik tombol **"+"** di pojok kanan atas, pilih **"New repository"**
4. Isi detail repository:
   - **Repository name**: `home-apps` (atau nama lain yang Anda inginkan)
   - **Description**: "Portfolio dashboard untuk aplikasi web yang saya buat"
   - **Visibility**: Pilih **Public** (agar bisa di-deploy ke GitHub Pages)
   - **JANGAN** centang "Initialize this repository with a README" (karena kita sudah punya)
5. Klik **"Create repository"**

## 6. Hubungkan Local Repository dengan GitHub

Setelah repository dibuat, GitHub akan menampilkan instruksi. Gunakan perintah berikut (ganti `USERNAME` dan `REPO-NAME` dengan milik Anda):

```bash
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

**Contoh:**
```bash
git remote add origin https://github.com/johndoe/home-apps.git
git branch -M main
git push -u origin main
```

## 7. Setup GitHub Pages (Opsional - untuk hosting gratis)

Untuk membuat aplikasi dapat diakses secara online:

1. Di repository GitHub, klik tab **"Settings"**
2. Scroll ke bawah ke bagian **"Pages"** di sidebar kiri
3. Di bagian **"Source"**, pilih:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Klik **"Save"**
5. Tunggu beberapa menit, aplikasi Anda akan tersedia di:
   ```
   https://USERNAME.github.io/REPO-NAME/
   ```

## 8. Update Project di Masa Depan

Setiap kali Anda membuat perubahan pada project:

```bash
# Tambahkan file yang berubah
git add .

# Commit dengan pesan yang jelas
git commit -m "Deskripsi perubahan yang dibuat"

# Push ke GitHub
git push
```

## Tips Tambahan

### Melihat Status Git
```bash
git status
```

### Melihat History Commit
```bash
git log --oneline
```

### Membatalkan Perubahan yang Belum di-commit
```bash
git restore nama-file.js
```

### Melihat Remote Repository
```bash
git remote -v
```

## Troubleshooting

### Jika diminta login GitHub
Gunakan **Personal Access Token** sebagai password:
1. Buka GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token dengan scope `repo`
3. Copy token dan gunakan sebagai password saat push

### Jika ada conflict
```bash
git pull origin main --rebase
# Selesaikan conflict di file yang ditandai
git add .
git rebase --continue
git push
```

---

**Selamat!** Project Anda sekarang sudah tersimpan di GitHub dan bisa diakses dari mana saja! 🎉
