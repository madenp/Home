# 🚀 Portfolio Aplikasi Web - GitHub Pages

Portfolio aplikasi web yang menampilkan daftar aplikasi yang telah di-deploy di GitHub Pages dengan desain modern dan interaktif.

## ✨ Fitur

- **Desain Modern**: Menggunakan glassmorphism, gradients, dan animasi smooth
- **Dark Theme**: Tema gelap yang nyaman untuk mata
- **Responsive**: Tampil sempurna di semua ukuran layar
- **Interactive Cards**: Kartu aplikasi dengan hover effects dan animasi
- **Modal Preview**: Preview aplikasi langsung dalam modal
- **Statistics Dashboard**: Menampilkan statistik portfolio
- **Smooth Animations**: Animasi halus dan micro-interactions

## 📦 Struktur File

```
Home Apps/
├── index.html          # Halaman utama
├── style.css           # Styling dengan CSS modern
├── app.js              # Logic dan interaktivitas
└── README.md           # Dokumentasi
```

## 🛠️ Teknologi

- **HTML5**: Struktur semantik
- **CSS3**: Modern styling dengan custom properties, gradients, animations
- **JavaScript**: Vanilla JS untuk interaktivitas
- **Google Fonts**: Inter & Outfit untuk typography

## 🎨 Fitur Desain

- **Glassmorphism**: Efek kaca blur pada card
- **Gradient Backgrounds**: Background gradient yang dinamis
- **Floating Shapes**: Animasi shapes yang mengambang
- **Smooth Transitions**: Transisi halus pada semua interaksi
- **Micro-animations**: Animasi kecil untuk meningkatkan UX
- **Custom Scrollbar**: Scrollbar yang disesuaikan dengan tema

## 📱 Aplikasi yang Ditampilkan

1. **Kuesioner Tugas 2025** - Aplikasi kuesioner untuk pengumpulan tugas
2. **Kuesioner Berita Acara 2026** - Sistem manajemen berita acara (dengan Admin Panel)
3. **Kuesioner Absensi Dosen 2026** - Aplikasi absensi dosen (dengan Admin Panel)
4. **Jadwal Ujian** - Platform penjadwalan ujian (dengan Admin Panel)
5. **Berita Acara 2025** - Aplikasi berita acara (BETA - Backend Manual)
6. **Dashboard Sitasi Dosen** - Platform manajemen dan monitoring sitasi akademik dosen (Localhost)
7. **Dashboard Berita Acara 2026** - Dashboard analytics (COMING SOON - Upgrade dengan Google Sheets)
8. **Dashboard Ketua Tingkat 2026** - Platform manajemen dan monitoring ketua tingkat (dengan Admin Panel)

## 🚀 Cara Deploy ke GitHub Pages

### 1. Persiapan Repository

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit: Portfolio aplikasi web"
```

### 2. Buat Repository di GitHub

1. Buka [GitHub](https://github.com)
2. Klik tombol **New Repository**
3. Beri nama repository (contoh: `Home-Apps` atau `Portfolio`)
4. Jangan centang "Initialize this repository with a README"
5. Klik **Create Repository**

### 3. Push ke GitHub

```bash
# Tambahkan remote repository
git remote add origin https://github.com/madenp/Home-Apps.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### 4. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** (tab di atas)
3. Scroll ke bawah ke bagian **Pages** (di sidebar kiri)
4. Di bagian **Source**, pilih:
   - Branch: `main`
   - Folder: `/ (root)`
5. Klik **Save**
6. Tunggu beberapa menit, aplikasi akan tersedia di:
   ```
   https://madenp.github.io/Home-Apps/
   ```

## 🔧 Kustomisasi

### Menambah Aplikasi Baru

Edit file `app.js` dan tambahkan objek baru ke array `apps`:

```javascript
{
    id: 5,
    title: "Nama Aplikasi",
    description: "Deskripsi aplikasi",
    category: "Kategori",
    icon: "🎯",
    url: "https://madenp.github.io/nama-repo/",
    repo: "https://github.com/madenp/nama-repo",
    features: [
        "Fitur 1",
        "Fitur 2",
        "Fitur 3"
    ],
    tech: ["HTML", "CSS", "JavaScript"]
}
```

### Mengubah Warna Tema

Edit file `style.css` di bagian `:root`:

```css
:root {
    --primary-color: #6366f1;      /* Warna utama */
    --secondary-color: #ec4899;    /* Warna sekunder */
    --accent-color: #06b6d4;       /* Warna aksen */
}
```

### Mengubah Font

Edit link Google Fonts di `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Dan update di `style.css`:

```css
:root {
    --font-primary: 'NamaFont', sans-serif;
}
```

## 📝 Update Aplikasi

Setiap kali ada perubahan:

```bash
# Tambahkan perubahan
git add .

# Commit dengan pesan yang jelas
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push
```

GitHub Pages akan otomatis update dalam beberapa menit.

## 🌐 Link Live

Setelah deploy, aplikasi akan tersedia di:
```
https://madenp.github.io/Home-Apps/
```

## 📄 License

MIT License - Bebas digunakan dan dimodifikasi

## 👤 Author

**Made Nanda Purnama**
- GitHub: [@madenp](https://github.com/madenp)

## 🙏 Acknowledgments

- Design inspiration dari modern web portfolios
- Icons dari Feather Icons
- Fonts dari Google Fonts

---

**Dibuat dengan ❤️ menggunakan HTML, CSS & JavaScript**
