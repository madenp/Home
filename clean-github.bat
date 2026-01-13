@echo off
REM Script untuk membersihkan file di GitHub Repository
REM Script ini akan menghapus file yang sudah tidak diperlukan dari GitHub

echo ========================================
echo   CLEAN GITHUB REPOSITORY
echo ========================================
echo.

REM Check if git repository exists
if not exist ".git" (
    echo [ERROR] Ini bukan Git repository!
    pause
    exit /b 1
)

echo File yang akan dihapus dari GitHub:
echo ----------------------------------------
git status --short
echo ----------------------------------------
echo.

echo Apakah Anda yakin ingin melanjutkan?
echo Tekan Ctrl+C untuk membatalkan, atau
pause

echo.
echo [1/3] Menambahkan perubahan (termasuk file yang dihapus)...
git add .
if %errorlevel% neq 0 (
    echo [ERROR] Gagal menambahkan perubahan
    pause
    exit /b 1
)
echo [OK] Perubahan ditambahkan
echo.

echo [2/3] Membuat commit...
git commit -m "Clean up: Remove unnecessary documentation files"
if %errorlevel% neq 0 (
    echo [WARNING] Tidak ada perubahan untuk di-commit
    echo.
    pause
    exit /b 0
)
echo [OK] Commit berhasil
echo.

echo [3/3] Push ke GitHub...
git push
if %errorlevel% neq 0 (
    echo [ERROR] Gagal push ke GitHub
    echo.
    echo Kemungkinan penyebab:
    echo - Perlu pull terlebih dahulu
    echo - Konflik dengan remote repository
    echo.
    echo Coba jalankan:
    echo   git pull --rebase
    echo Lalu jalankan script ini lagi.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   CLEANUP BERHASIL! 🎉
echo ========================================
echo.
echo File yang tidak diperlukan sudah dihapus dari GitHub!
echo Repository Anda sekarang lebih bersih dan terorganisir.
echo.
pause
