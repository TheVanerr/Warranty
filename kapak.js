// ============================================================
// kapak.js - Kapak Sayfası Motoru
// ============================================================

/**
 * Kapak Sayfası Yapılandırma Kuralları
 * Canva ölçülerine göre tasarlanmıştır (cm cinsinden)
 * A4 sayfa boyutu: 21cm x 29.7cm
 */
const coverConfig = {
    // "WARRANTY CARD" başlığı ayarları
    title: {
        text: 'WARRANTY CARD',
        font: 'Calibri',
        size: '39pt',
        weight: 'bold',
        color: '#dc2626', // Kırmızı
        position: { x: '4.41cm', y: '7.07cm' }
    },
    
    // Dolfin logo ayarları
    logo: {
        src: 'image.png', // Logo dosya yolu
        position: { x: '4.41cm', y: '17.37cm' },
        width: '12.9cm',
        height: '4.56cm'
    },
    
    // Sol kenar kırmızı dikdörtgen
    redBar: {
        position: { x: '2.1cm', y: '2.1cm' },
        width: '0.93cm',
        height: '25.5cm',
        color: '#dc2626' // Kırmızı
    },
    
    // Bilgi alanı (Serial Number, Machine Model, Delivery Date)
    infoBox: {
        font: 'Fira Sans',
        size: '15pt',
        weight: 'bold',
        color: '#dc2626', // Kırmızı
        position: { x: '4.19cm', y: '11.66cm' },
        width: '14.71cm',
        height: '2.73cm'
    }
};

/**
 * Kapak sayfasının HTML'ini üretir.
 * Canva tasarım ölçülerine göre pozisyonlanmış elemanlar
 * @returns {string} Kapak sayfası HTML
 */
function renderCoverPage() {
    const seriVal = document.getElementById('input-seri')?.value || '__________________';
    const tarihVal = document.getElementById('input-tarih')?.value || '__________________';
    const modelVal = document.getElementById('input-model')?.value || '__________________';

    return `
        <div class="a4-page cover-page-new" style="height:297mm;min-height:297mm;position:relative;overflow:hidden;padding:0;background:#fff;display:block;">

            <!-- Sol Kenar Kırmızı Dikdörtgen (absolute) -->
            <div class="cover-red-bar"></div>

            <!-- Ana İçerik (kırmızı barın sağında) -->
            <div class="cover-body">

                <!-- WARRANTY CARD Başlığı -->
                <div class="cover-main-title">${coverConfig.title.text}</div>

                <!-- Bilgi Kutusu (Serial Number, Machine Model, Delivery Date) -->
                <div class="cover-info-box">
                    <div class="cover-info-line">
                        <span class="info-label">Serial Number :</span>
                        <span class="info-value">${seriVal}</span>
                    </div>
                    <div class="cover-info-line">
                        <span class="info-label">Machine Model :</span>
                        <span class="info-value">${modelVal}</span>
                    </div>
                    <div class="cover-info-line">
                        <span class="info-label">Delivery Date :</span>
                        <span class="info-value">${tarihVal}</span>
                    </div>
                </div>

                <!-- Dolfin Logo -->
                <div class="cover-logo-box">
                    <img src="${coverConfig.logo.src}" alt="Dolfin Logo" class="cover-logo-img"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="cover-logo-placeholder">DOLFIN LOGO</div>
                </div>

            </div>
        </div>
    `;
}