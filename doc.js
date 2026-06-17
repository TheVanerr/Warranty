// Dil ve Belge Tipine Göre Sabit Metin Veritabanı
const contentDatabase = {
    ce: {
        tr: {
            title: "CE UYGUNLUK BEYANI",
            text: "Aşağıda bilgileri verilen makine/sistem, Avrupa Birliği tarafından belirlenen temel sağlık ve güvenlik gereksinimlerine, ilgili standartlara ve regülasyonlara tamamen uygun olarak tasarlanmış ve üretilmiştir.",
            labels: { seri: "Ürün Seri No:", tarih: "Beyan Tarihi:", model: "Ürün Tipi:" }
        },
        en: {
            title: "DECLARATION OF CONFORMITY",
            text: "The machinery/system specified below has been designed and manufactured in full compliance with the essential health and safety requirements, relevant standards, and regulations set by the European Union.",
            labels: { seri: "Product Serial No:", tarih: "Declaration Date:", model: "Product Type:" }
        },
        de: {
            title: "CE-KONFORMITÄTSERKLÄRUNG",
            text: "Die nachfolgend spezifizierte Maschine/Anlage wurde in voller Übereinstimmung mit den von der Europäischen Union festgelegten grundlegenden Sicherheits- und Gesundheitsanforderungen, relevanten Normen und Vorschriften entwickelt und hergestellt.",
            labels: { seri: "Seriennummer:", tarih: "Datum der Erklärung:", model: "Produkttyp:" }
        }
    }
};

// Mevcut Durum Verileri
let currentDoc = 'garanti';
let currentLang = 'tr';
let garantiMarkdown = '';

// Sayfa İlk Açıldığında Çalışacak Fonksiyon
async function initSystem() {
    await loadGarantiMarkdown();
    renderCurrentDocument();
}

// garanti.md dosyasını fetch ile yükle
async function loadGarantiMarkdown() {
    try {
        const response = await fetch('garanti.md');
        garantiMarkdown = await response.text();
    } catch (error) {
        console.error('garanti.md yüklenemedi:', error);
        garantiMarkdown = '# Garanti Belgesi\n\nDosya yüklenemedi.';
    }
}

// Mevcut belge türüne göre preview-area'yı render et
function renderCurrentDocument() {
    const previewArea = document.getElementById('preview-area');

        if (currentDoc === 'garanti') {
        // Kapak sayfası + Garanti sayfalarını birleştir
        const coverHtml = renderCoverPage();
        const pagesHtml = renderWarrantyDocument(garantiMarkdown);
        previewArea.innerHTML = coverHtml + pagesHtml;
    } else if (currentDoc === 'ce') {
        const data = contentDatabase.ce[currentLang];
        const seriDeger = document.getElementById('input-seri').value || '-';
        const tarihDeger = document.getElementById('input-tarih').value || '-';
        const modelDeger = document.getElementById('input-model').value || '-';
    
        previewArea.innerHTML = `
            <div class="a4-page">
                <div class="document-title">${data.title}</div>
                <div class="document-body">${data.text}</div>
                <div class="variable-zone">
                    <div class="data-row">
                        <span class="data-label">${data.labels.seri}</span>
                        <span class="data-value">${seriDeger}</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">${data.labels.tarih}</span>
                        <span class="data-value">${tarihDeger}</span>
                    </div>
                    <div class="data-row">
                        <span class="data-label">${data.labels.model}</span>
                        <span class="data-value">${modelDeger}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
// Belge Geçiş Fonksiyonu (Garanti / CE)
function switchDoc(docType) {
    currentDoc = docType;
    
    document.getElementById('btn-garanti').classList.remove('active');
    document.getElementById('btn-ce').classList.remove('active');
    
    if (docType === 'garanti') {
        document.getElementById('btn-garanti').classList.add('active');
    } else {
        document.getElementById('btn-ce').classList.add('active');
    }

    renderCurrentDocument();
}

// Dil Değişim Fonksiyonu (sadece CE belgesinde etki eder)
function handleLanguageChange() {
    currentLang = document.getElementById('langSelect').value;
    if (currentDoc === 'ce') {
        renderCurrentDocument();
    }
}

// Input değişikliklerinde önizlemeyi güncelle
function updatePreview() {
    if (currentDoc === 'garanti') {
        // Garanti belgesini placeholder'lar güncellenmiş şekilde yeniden render et
        renderCurrentDocument();
    } else if (currentDoc === 'ce') {
        renderCurrentDocument();
    }
}

function handleLogin() {
    alert('Kullanıcı giriş ekranı açılıyor...');
}

function exportPDF() {
    alert('Grafik motoru kurallarına göre A4 alanı yakalanıyor ve PDF formatında indiriliyor...');
}

function exportWord() {
    alert('Mevcut metin yapısı .docx formatına dönüştürülüyor...');
}

window.onload = initSystem;