# 🚀 Quick Start - Push ke GitHub

Repository: **https://github.com/madenp/Home**

---

## ⚡ Cara Tercepat (1-Click)

**Double-click** file: `setup-github.bat`

Script akan otomatis:
- ✅ Inisialisasi Git
- ✅ Tambahkan semua file
- ✅ Buat commit
- ✅ Hubungkan dengan GitHub
- ✅ Push ke repository

---

## 📝 Cara Manual (Copy-Paste)

Buka **PowerShell** di folder ini, lalu copy-paste perintah berikut:

**Langkah 0 (Sekali saja - Ganti dengan info Anda!):**
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

**Langkah 1-6 (Push ke GitHub):**
```bash
git init
git add .
git commit -m "Initial commit: Home Apps portfolio dashboard"
git remote add origin https://github.com/madenp/Home.git
git branch -M main
git push -u origin main
```

**Jika diminta password:** Gunakan **Personal Access Token** dari:
👉 https://github.com/settings/tokens

---

## 🌐 Deploy ke GitHub Pages

Setelah push berhasil:

1. Buka: https://github.com/madenp/Home
2. **Settings** → **Pages**
3. Source: Branch `main`, Folder `/ (root)`
4. **Save**
5. Tunggu 2-5 menit
6. Akses di: **https://madenp.github.io/Home/**

---

## 🔄 Update Setiap Kali Ada Perubahan

**Cara Mudah:**
- Double-click: `update-github.bat`

**Cara Manual:**
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

---

## 📚 Panduan Lengkap

- **Step-by-Step Detail:** `LANGKAH-PUSH-GITHUB.md`
- **Panduan Umum:** `PANDUAN-GITHUB.md`
- **Workflow:** `.agent/workflows/github-setup.md`

---

**Selamat coding!** 🎉
