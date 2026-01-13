@echo off
setlocal enabledelayedexpansion
REM Quick Setup Script untuk GitHub
REM Script ini akan membantu Anda setup Git dan push ke GitHub

echo ========================================
echo   HOME APPS - GitHub Setup Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git tidak terinstall!
    echo Silakan download dan install Git dari: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [OK] Git terdeteksi
echo.

REM Check Git configuration
echo [0/7] Cek konfigurasi Git...
git config --global user.name >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Git belum dikonfigurasi!
    echo.
    echo Silakan masukkan informasi Anda:
    set /p GIT_NAME="Nama Anda: "
    set /p GIT_EMAIL="Email Anda: "
    git config --global user.name "!GIT_NAME!"
    git config --global user.email "!GIT_EMAIL!"
    echo [OK] Konfigurasi Git berhasil
) else (
    for /f "delims=" %%i in ('git config --global user.name') do set GIT_NAME=%%i
    for /f "delims=" %%i in ('git config --global user.email') do set GIT_EMAIL=%%i
    echo [OK] Git sudah dikonfigurasi
    echo     Nama: !GIT_NAME!
    echo     Email: !GIT_EMAIL!
)
echo.

REM Initialize git repository
echo [1/7] Inisialisasi Git repository...
git init
if %errorlevel% neq 0 (
    echo [ERROR] Gagal inisialisasi Git
    pause
    exit /b 1
)
echo [OK] Repository diinisialisasi
echo.

REM Add all files
echo [2/7] Menambahkan semua file ke staging...
git add .
if %errorlevel% neq 0 (
    echo [ERROR] Gagal menambahkan file
    pause
    exit /b 1
)
echo [OK] File ditambahkan
echo.

REM Create initial commit
echo [3/7] Membuat commit pertama...
git commit -m "Initial commit: Home Apps portfolio dashboard"
if %errorlevel% neq 0 (
    echo [ERROR] Gagal membuat commit
    pause
    exit /b 1
)
echo [OK] Commit berhasil dibuat
echo.

REM# Set repository URL
echo [4/7] Setup Remote Repository
echo.
echo Repository: https://github.com/madenp/Home
echo.
set REPO_URL=https://github.com/madenp/Home.git

echo.
echo [5/7] Menghubungkan dengan GitHub...
git remote add origin %REPO_URL%
if %errorlevel% neq 0 (
    echo [WARNING] Remote origin mungkin sudah ada, mencoba update...
    git remote set-url origin %REPO_URL%
)
echo [OK] Remote repository terhubung
echo.

REM Push to GitHub
echo [6/7] Push ke GitHub...
git branch -M main
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Gagal push ke GitHub
    echo.
    echo Kemungkinan penyebab:
    echo - URL repository salah
    echo - Belum login ke GitHub
    echo - Tidak punya akses ke repository
    echo.
    echo Untuk login, gunakan Personal Access Token sebagai password:
    echo 1. Buka: https://github.com/settings/tokens
    echo 2. Generate new token (classic)
    echo 3. Pilih scope: repo
    echo 4. Copy token dan gunakan sebagai password
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SETUP BERHASIL! 🎉
echo ========================================
echo.
echo Repository Anda: %REPO_URL%
echo.
echo Langkah selanjutnya:
echo 1. Buka repository di GitHub
echo 2. Setup GitHub Pages di Settings ^> Pages
echo 3. Pilih branch: main, folder: / (root)
echo 4. Aplikasi akan tersedia di: https://madenp.github.io/Home/
echo.
echo Untuk update di masa depan, gunakan:
echo   git add .
echo   git commit -m "Deskripsi perubahan"
echo   git push
echo.
pause
