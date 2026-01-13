# 📚 Panduan Cepat GitHub

## 🎯 Cara Tercepat: Gunakan Script Otomatis

### Setup Pertama Kali
1. **Double-click** file `setup-github.bat`
2. Ikuti instruksi di layar
3. Buat repository di GitHub saat diminta
4. Masukkan URL repository
5. Selesai! ✅

### Update Setiap Kali Ada Perubahan
1. **Double-click** file `update-github.bat`
2. Ketik deskripsi perubahan
3. Tekan Enter
4. Selesai! ✅

---

## 📖 Cara Manual (Jika Ingin Lebih Kontrol)

### Setup Pertama Kali

**1. Inisialisasi Git**
```bash
git init
```

**2. Tambahkan File**
```bash
git add .
```

**3. Commit**
```bash
git commit -m "Initial commit: Home Apps portfolio"
```

**4. Buat Repository di GitHub**
- Buka https://github.com/new
- Nama: `home-apps` (atau terserah Anda)
- Public ✅
- **JANGAN** centang "Initialize with README"
- Klik "Create repository"

**5. Hubungkan dan Push**
```bash
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

**6. Setup GitHub Pages**
- Buka repository → Settings → Pages
- Source: Branch `main`, Folder `/ (root)`
- Save
- Tunggu 2-5 menit
- Akses di: `https://USERNAME.github.io/REPO-NAME/`

### Update Setiap Kali Ada Perubahan

```bash
git add .
git commit -m "Deskripsi perubahan yang dibuat"
git push
```

---

## 🔑 Tips Login GitHub

Jika diminta password saat push, gunakan **Personal Access Token**:

1. Buka: https://github.com/settings/tokens
2. Klik "Generate new token" → "Tokens (classic)"
3. Nama: `Home Apps Token`
4. Expiration: `No expiration` (atau sesuai kebutuhan)
5. Centang scope: `repo` ✅
6. Klik "Generate token"
7. **COPY TOKEN** (hanya muncul sekali!)
8. Gunakan token sebagai password saat git push

---

## 🆘 Troubleshooting

### "fatal: not a git repository"
Jalankan: `git init`

### "error: remote origin already exists"
Jalankan: `git remote set-url origin URL-BARU`

### "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

### Lupa URL Repository
```bash
git remote -v
```

### Lihat Status
```bash
git status
```

### Lihat History
```bash
git log --oneline
```

---

## 📁 File yang Dibuat

- ✅ `.gitignore` - File yang diabaikan Git
- ✅ `LICENSE` - Lisensi MIT
- ✅ `setup-github.bat` - Script setup otomatis
- ✅ `update-github.bat` - Script update otomatis
- ✅ `.agent/workflows/github-setup.md` - Panduan lengkap

---

## 🎉 Selamat!

Setelah setup, project Anda akan:
- ✅ Tersimpan aman di GitHub
- ✅ Bisa diakses dari mana saja
- ✅ Punya backup otomatis
- ✅ Bisa di-deploy ke GitHub Pages (gratis!)

**Aplikasi live di:** `https://USERNAME.github.io/REPO-NAME/`

---

**Butuh bantuan?** Lihat file `.agent/workflows/github-setup.md` untuk panduan lengkap!
