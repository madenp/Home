@echo off
REM Quick Update Script untuk push perubahan ke GitHub
REM Gunakan script ini setiap kali Anda ingin update project di GitHub

echo ========================================
echo   HOME APPS - GitHub Update Script
echo ========================================
echo.

REM Check if git repository exists
if not exist ".git" (
    echo [ERROR] Ini bukan Git repository!
    echo Jalankan setup-github.bat terlebih dahulu.
    pause
    exit /b 1
)

REM Show current status
echo Status saat ini:
echo ----------------------------------------
git status --short
echo ----------------------------------------
echo.

REM Ask for commit message
set /p COMMIT_MSG="Masukkan deskripsi perubahan: "

if "%COMMIT_MSG%"=="" (
    echo [ERROR] Deskripsi perubahan tidak boleh kosong!
    pause
    exit /b 1
)

echo.
echo [1/3] Menambahkan file yang berubah...
git add .
if %errorlevel% neq 0 (
    echo [ERROR] Gagal menambahkan file
    pause
    exit /b 1
)
echo [OK] File ditambahkan
echo.

echo [2/3] Membuat commit...
git commit -m "%COMMIT_MSG%"
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
    echo Coba jalankan: git pull origin main --rebase
    echo Lalu jalankan script ini lagi.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   UPDATE BERHASIL! 🎉
echo ========================================
echo.
echo Perubahan Anda sudah tersimpan di GitHub!
echo.
pause
