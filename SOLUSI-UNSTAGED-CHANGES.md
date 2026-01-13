# 🔴 SOLUSI: Error "You have unstaged changes"

## 🔴 Error yang Anda Alami:

```
error: cannot pull with rebase: You have unstaged changes.
error: Please commit or stash them
```

**Penyebab:** Ada file yang sudah diubah/dibuat tapi belum di-commit.

---

## ✅ SOLUSI CEPAT

Jalankan perintah berikut secara berurutan:

### Langkah 1: Tambahkan semua perubahan
```bash
git add .
```

### Langkah 2: Commit perubahan
```bash
git commit -m "Add GitHub setup guides and documentation"
```

### Langkah 3: Pull dengan rebase
```bash
git pull origin main --rebase
```

### Langkah 4: Push ke GitHub
```bash
git push -u origin main
```

---

## 🎯 ATAU: Gunakan Force Push (Lebih Mudah)

Jika Anda tidak ingin repot dengan pull/rebase, gunakan force push:

### Langkah 1: Commit semua perubahan
```bash
git add .
git commit -m "Initial commit: Home Apps portfolio with setup guides"
```

### Langkah 2: Force push
```bash
git push -u origin main --force
```

**Selesai!** ✅

---

## 📋 Ringkasan Perintah (Copy-Paste Semua)

**Opsi 1 - Pull + Rebase:**
```bash
git add .
git commit -m "Add GitHub setup guides and documentation"
git pull origin main --rebase
git push -u origin main
```

**Opsi 2 - Force Push (Lebih Mudah):**
```bash
git add .
git commit -m "Initial commit: Home Apps portfolio with setup guides"
git push -u origin main --force
```

---

## 🎯 Rekomendasi

Karena ini project baru, saya sarankan **Opsi 2 (Force Push)** - lebih cepat dan mudah!

---

## 🔍 Cek File yang Belum di-Commit

Jika ingin lihat file apa saja yang belum di-commit:

```bash
git status
```

---

**💡 Tips:** Error ini normal terjadi saat ada file baru yang belum di-commit. Solusinya: commit dulu, baru push!
