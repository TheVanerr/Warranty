// ============================================================
// kapak.js - Kapak Sayfası Motoru
// ============================================================

/**
 * Kapak sayfasının HTML'ini üretir.
 * Fotoğraf + beyaz şeffaf katman + bilgiler
 * @returns {string} Kapak sayfası HTML
 */
function renderCoverPage() {
    const seriVal = document.getElementById('input-seri')?.value || '';
    const tarihVal = document.getElementById('input-tarih')?.value || '';
    const modelVal = document.getElementById('input-model')?.value || '';

    return `
        <div class="a4-page cover-page">
            
            <!-- 1. KATMAN: Arka plan fotoğrafı -->
            <div class="cover-bg"></div>

            <!-- 2. KATMAN: Beyaz şeffaf katman -->
            <div class="cover-overlay"></div>

            <!-- 3. KATMAN: Bilgiler -->
            <div class="cover-content">
                <div class="cover-logo">
                    <!-- Logo resmi buraya -->
                </div>

                <h1 class="cover-title">WARRANTY<br>CERTIFICATE</h1>

                <div class="cover-divider"></div>

                <div class="cover-info">
                    <div class="cover-info-row">
                        <span class="cover-label">Model:</span>
                        <span class="cover-value">${modelVal || '______________'}</span>
                    </div>
                    <div class="cover-info-row">
                        <span class="cover-label">Serial No:</span>
                        <span class="cover-value">${seriVal || '______________'}</span>
                    </div>
                    <div class="cover-info-row">
                        <span class="cover-label">Date:</span>
                        <span class="cover-value">${tarihVal || '______________'}</span>
                    </div>
                </div>

                <div class="cover-divider"></div>

                <p class="cover-footer-text">CNK ELEKTRONIK MAKINE SANAYI AS</p>
            </div>

        </div>
    `;
}