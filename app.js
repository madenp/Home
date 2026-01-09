// Data aplikasi yang telah di-deploy
const apps = [
    {
        id: 1,
        title: "Kuesioner Tugas",
        description: "Aplikasi kuesioner untuk pengumpulan dan pengelolaan tugas mahasiswa dengan interface yang user-friendly.",
        category: "Education",
        icon: "📝",
        url: "https://madenp.github.io/Kuesioner_tugas/",
        repo: "https://github.com/madenp/Kuesioner_tugas",
        features: [
            "Form kuesioner interaktif",
            "Validasi data real-time",
            "Responsive design",
            "Easy to use interface"
        ],
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 2,
        title: "Kuesioner Berita Acara 2026",
        description: "Sistem manajemen berita acara untuk dokumentasi kegiatan akademik tahun 2026 dengan fitur lengkap.",
        category: "Management",
        icon: "📋",
        url: "https://madenp.github.io/BeritaAcara20252/",
        repo: "https://github.com/madenp/BeritaAcara20252",
        admin: "https://docs.google.com/spreadsheets/d/1j_kPn7sJNFI6NwZ2Ro2Hgz8x06bfvC3NBP0xAntxgjg/edit?usp=sharing",
        features: [
            "Manajemen berita acara",
            "Pencarian dan filter data",
            "Export ke berbagai format",
            "Dashboard analytics"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Google Apps Script"]
    },
    {
        id: 3,
        title: "Kuesioner Absensi Dosen 2026",
        description: "Aplikasi absensi dosen untuk mencatat kehadiran dan jam perkuliahan dengan integrasi Google Sheets.",
        category: "Attendance",
        icon: "✅",
        url: "https://madenp.github.io/BeritaAcara20252/absensi.html",
        repo: "https://github.com/madenp/BeritaAcara20252",
        admin: "https://docs.google.com/spreadsheets/d/1j_kPn7sJNFI6NwZ2Ro2Hgz8x06bfvC3NBP0xAntxgjg/edit?usp=sharing",
        features: [
            "Form absensi interaktif",
            "Tracking jam perkuliahan",
            "Status kehadiran real-time",
            "Integrasi Google Sheets"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Google Apps Script"]
    },
    {
        id: 4,
        title: "Jadwal Ujian",
        description: "Platform penjadwalan ujian yang memudahkan pengelolaan jadwal ujian mahasiswa dan dosen.",
        category: "Scheduling",
        icon: "📅",
        url: "https://madenp.github.io/BeritaAcara20252/",
        repo: "https://github.com/madenp/BeritaAcara20252",
        admin: "https://docs.google.com/spreadsheets/d/1Mtb2hLAwqxrlMQfEQUumyxJw5mVIxi0J_WYvydYufdk/edit?usp=sharing",
        features: [
            "Kalender ujian interaktif",
            "Notifikasi jadwal",
            "Manajemen dosen penguji",
            "Status tracking"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Google Sheets API"]
    },
    {
        id: 5,
        title: "Berita Acara 2025",
        description: "Aplikasi berita acara dengan tampilan modern untuk pengelolaan konten berita acara. Backend manual, masih dalam tahap beta.",
        category: "News",
        icon: "📰",
        url: "https://madenp.github.io/BeritaV2/",
        repo: "https://github.com/madenp/BeritaV2",
        status: "beta",
        features: [
            "Content management system",
            "Rich text editor",
            "Image upload & gallery",
            "Backend manual (tanpa database)"
        ],
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        id: 6,
        title: "Dashboard Berita Acara 2026",
        description: "Upgrade dari Berita Acara 2025. Dashboard modern dengan integrasi Google Sheets untuk manajemen data yang lebih efisien.",
        category: "Dashboard",
        icon: "📊",
        url: "#",
        repo: "https://github.com/madenp",
        status: "coming-soon",
        features: [
            "Upgrade dari versi 2025",
            "Integrasi Google Sheets",
            "Dashboard analytics real-time",
            "Automated data management"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Google Apps Script"]
    }
];

// Render apps to grid
function renderApps() {
    const appsGrid = document.getElementById('appsGrid');

    apps.forEach((app, index) => {
        const appCard = document.createElement('div');
        appCard.className = 'app-card';
        appCard.style.animationDelay = `${0.1 * index}s`;

        appCard.innerHTML = `
            <div class="app-card-header">
                <div class="app-icon">${app.icon}</div>
                <div class="app-info">
                    <h3 class="app-title">${app.title}</h3>
                    <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
                        <span class="app-category">${app.category}</span>
                        ${app.status === 'beta' ? '<span class="app-status app-status-beta">BETA</span>' : ''}
                        ${app.status === 'coming-soon' ? '<span class="app-status app-status-coming-soon">COMING SOON</span>' : ''}
                    </div>
                </div>
            </div>
            <p class="app-description">${app.description}</p>
            <div class="app-meta">
                <div class="app-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    ${app.tech.join(', ')}
                </div>
                ${app.admin ? `
                    <a href="${app.admin}" target="_blank" rel="noopener noreferrer" class="app-meta-item app-meta-link" style="color: var(--primary-light); cursor: pointer; text-decoration: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        Admin Panel
                    </a>
                ` : ''}
            </div>
            <div class="app-actions">
                ${app.status === 'coming-soon' ? `
                    <button class="btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Coming Soon
                    </button>
                ` : `
                    <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Buka Aplikasi
                    </a>
                `}
                <button class="btn btn-secondary" onclick="showAppDetails(${app.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Detail
                </button>
            </div>
        `;

        appsGrid.appendChild(appCard);
    });
}

// Show app details in modal
function showAppDetails(appId) {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    const modal = document.getElementById('appModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${app.icon} ${app.title}</h2>
            ${app.status ? `
                <div style="margin-bottom: 1rem;">
                    ${app.status === 'beta' ? '<span class="app-status app-status-beta">BETA</span>' : ''}
                    ${app.status === 'coming-soon' ? '<span class="app-status app-status-coming-soon">COMING SOON</span>' : ''}
                </div>
            ` : ''}
            <p class="modal-subtitle">${app.description}</p>
        </div>
        
        ${app.status === 'coming-soon' ? `
            <div class="modal-screenshot" style="display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: #4caf50;">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 style="color: #4caf50; font-size: 1.5rem; margin: 0;">Coming Soon</h3>
                <p style="color: var(--text-secondary); text-align: center; max-width: 400px;">Aplikasi ini sedang dalam tahap pengembangan dan akan segera diluncurkan.</p>
            </div>
        ` : `
            <div class="modal-screenshot">
                <iframe src="${app.url}" title="${app.title} Preview"></iframe>
            </div>
        `}
        
        <div class="modal-details">
            <div class="modal-section">
                <h3>✨ Fitur Utama</h3>
                <ul style="color: var(--text-secondary); padding-left: 1.5rem; line-height: 1.8;">
                    ${app.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>🛠️ Teknologi</h3>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
                    ${app.tech.map(tech => `
                        <span style="padding: 6px 14px; background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 20px; font-size: 0.85rem; color: var(--primary-light);">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-actions">
            ${app.status === 'coming-soon' ? `
                <button class="btn btn-primary" disabled style="opacity: 0.5; cursor: not-allowed;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Coming Soon
                </button>
            ` : `
                <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Buka Aplikasi
                </a>
            `}
            ${app.admin ? `
                <a href="${app.admin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                    Admin / Backend
                </a>
            ` : ''}
            <a href="${app.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Lihat Repository
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('appModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Render apps
    renderApps();

    // Update total apps count
    document.getElementById('totalApps').textContent = apps.length;

    // Modal close handlers
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Add scroll animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe app cards
    document.querySelectorAll('.app-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to background shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
