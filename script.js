const initialEquipments = [
  {
    id: "equipment-ut89xd",
    name: "UNI-T UT89XD True-RMS Dijital Multimetre",
    category: "Ölçü Aleti",
    description: "LED testi, NCV ve True-RMS özelliklerine sahip, yüksek gerilim ve akım ölçümlerinde kullanılan profesyonel el tipi multimetredir.",
    specs: "• DC Gerilim: 600mV / 6V / 60V / 600V / 1000V\n• AC Gerilim (True-RMS): 6V / 60V / 600V / 1000V\n• DC/AC Akım: 60µA / 6mA / 60mA / 600mA / 20A (Maks. 20A yüksek akım ölçümü)\n• Direnç: 600Ω ~ 60MΩ\n• Kapasite: 10nF ~ 100mF\n• Frekans: 9.999Hz ~ 9.999MHz\n• LED Test Çıkışı: 11.1V / 5mA (Zener diyot ve LED eşik gerilimlerini doğrudan test eder)\n• NCV (Temassız Gerilim Algılama): Çift kademeli sesli ve ışıklı uyarı",
    safety: "• Akım kademesinde iken probları kesinlikle gerilim kaynağına paralel bağlamayın; dahili sigorta atar.\n• 1000V üzeri gerilim ölçümü yapmayın.\n• CAT III 600V / CAT II 1000V güvenlik sınıfı sınırlarına uyun.",
    image: "images/ut89xd.jpg",
    datasheetUrl: "pdf/UT89XE.pdf"
  },
  {
    id: "equipment-ut204p",
    name: "UNI-T UT204+ True-RMS AC/DC Dijital Penseampermetre",
    category: "Ölçü Aleti",
    description: "Devre hattını kesmeden 600A'e kadar AC ve DC akımı manyetik indüksiyonla temassız ölçen True-RMS penseampermetredir.",
    specs: "• AC/DC Akım Ölçümü: 60A / 600A (Çene açıklığı: 28 mm)\n• AC/DC Gerilim Ölçümü: 600V\n• Frekans Ölçümü: 10Hz ~ 10MHz\n• Kapasitans: 60nF ~ 60mF\n• Sıcaklık Ölçümü: -40°C ~ 1000°C (K-tipi termokupl ile)\n• NCV & Canlı Hat Tespiti (Live Wire)",
    safety: "• Akım ölçerken pens çenesinin içine yalnızca tek bir iletken (Faz veya Nötr) alınmalıdır; ikisi birlikte alınırsa manyetik alanlar birbirini sıfırlar.\n• DC akım ölçümünden önce ekrandaki sıfırlama (ZERO / REL) tuşuna basılarak artık manyetik alan sıfırlanmalıdır.",
    image: "images/ut204plus.jpg",
    datasheetUrl: "pdf/UT200+ UT200R Series Flyer.pdf"
  },
  {
    id: "equipment-fluke115",
    name: "Fluke 115 True-RMS Dijital Multimetre",
    category: "Ölçü Aleti",
    description: "Saha servisleri, endüstriyel bakım ve hassas elektronik testler için geliştirilmiş, yüksek güvenilirlikli True-RMS multimetredir.",
    specs: "• Maksimum Gerilim: 600V AC/DC True-RMS\n• Maksimum Akım: 10A AC/DC sürekli (30 saniye süreyle 20A aşırı yük)\n• Direnç: 0.1Ω ~ 40MΩ\n• Kapasite: 1nF ~ 9999µF\n• Frekans: 5Hz ~ 50kHz\n• Güvenlik Derecelendirmesi: CAT III 600V",
    safety: "• Orijinal sigortası (11A 1000V HRC) haricinde standart cam sigorta takılmamalıdır.\n• Prob yalıtımında çatlak veya deformasyon varsa kullanılmamalıdır.",
    image: "images/fluke115.jpg",
    datasheetUrl: "pdf/Fluke 115.pdf"
  },
  {
    id: "equipment-ut33dp",
    name: "UNI-T UT33D+ Kompakt Dijital Multimetre",
    category: "Ölçü Aleti",
    description: "Temel atölye ölçümleri, devre sürekliliği, direnç ve temassız gerilim tespiti için tasarlanmış kompakt el multimetresidir.",
    specs: "• DC Gerilim: 200mV ~ 600V\n• AC Gerilim: 200V / 600V\n• DC Akım: 2000µA ~ 10A\n• Direnç: 200Ω ~ 200MΩ\n• NCV Fonksiyonu ve 2 metre düşme dayanıklılığı",
    safety: "• AC akım ölçüm özelliği yoktur; AC akım için zorlanmamalıdır.\n• 10A soketinde sigorta koruması bulunmadığından yüksek akım ölçümleri 10 saniyeyi geçmemelidir.",
    image: "images/ut33dplus.jpg",
    datasheetUrl: "pdf/UT33+ UT131 Series Flyer.pdf"
  },
  {
    id: "equipment-utp3305ii",
    name: "UNI-T UTP3305-II Üç Kanallı Lineer DC Güç Kaynağı",
    category: "Güç Sistemleri",
    description: "Elektronik kart prototipleme ve test süreçlerinde iki bağımsız ayarlanabilir kanal ve bir sabit kanal sunan lineer güç kaynağıdır.",
    specs: "• Kanal 1 & 2: 0 ~ 32V / 0 ~ 5A ayarlanabilir\n• Kanal 3: 5V sabit gerilim / 3A sabit çıkış\n• Seri Mod (CH1 + CH2): 0 ~ 64V / 5A\n• Paralel Mod (CH1 // CH2): 0 ~ 32V / 10A\n• Düşük Dalgalanma ve Gürültü (Ripple & Noise): < 1mVrms\n• Koruma: Aşırı gerilim (OVP) ve aşırı akım (OCP)",
    safety: "• Devreye enerji vermeden önce gerilim ve akım sınır değerleri potansiyometrelerden ayarlanmalı, ardından 'Output' butonu açılmalıdır.\n• Seri/Paralel mod geçiş butonlarına devreye yük bağlıyken basılmamalıdır.",
    image: "images/utp3305ii.jpg",
    datasheetUrl: "pdf/UNI-T UTP3305-II.pdf"
  },
  {
    id: "equipment-quick861dw",
    name: "Quick 861DW Dijital Sıcak Hava Üfleme İstasyonu",
    category: "Havya & Lehim",
    description: "SMD/BGA entegrelerin söküm ve lehimleme işlemleri için yüksek hava debili, 1000W profesyonel sıcak hava istasyonudur.",
    specs: "• Güç: 1000W\n• Sıcaklık Aralığı: 100°C ~ 500°C\n• Hava Debisi: 1 ~ 120 L/dakika\n• Hafıza: CH1, CH2, CH3 olmak üzere 3 farklı sıcaklık ve debi ön ayarı\n• Manyetik Stand: Kol standa konulduğunda otomatik soğutma ve uyku moduna geçer",
    safety: "• İşlem bittikten sonra kol mutlaka yuvasına konulmalı ve rezistans 100°C altına inip cihaz otomatik kapanana kadar ana şalter kapatılmamalıdır.\n• Hava üfleme ağzı doğrudan PCB padlerine çok yakın tutulup yollar yakılmamalıdır.",
    image: "images/quick861dw.jpg",
    datasheetUrl: ""
  },
  {
    id: "equipment-aixunt420d",
    name: "AiXun T420D Çift Kanallı Akıllı Lehimleme İstasyonu",
    category: "Havya & Lehim",
    description: "Çift kol desteği (T245, T210, T115 uç serileri) ve ultra hızlı 2 saniyede ısınma süresi sunan akıllı lehim istasyonudur.",
    specs: "• Toplam Güç: 200W\n• Sıcaklık Aralığı: 90°C ~ 450°C\n• Isınma Süresi: 2 saniyede 350°C'ye ulaşma\n• Uç Uyumluluğu: T245 (Genel lehim), T210 (Hassas SMD), T115 (Mikro lehimleme)\n• Gerçek zamanlı güç eğrisi ve sıcaklık izleme ekranı",
    safety: "• Havya uçları sıcakken değiştirilirken mutlaka stand üzerindeki uç değiştirme yuvaları kullanılmalıdır.\n• Uçların oksitlenmesini önlemek için lehimleme bittikten sonra uç temizlenip taze lehimle kaplanarak standa bırakılmalıdır.",
    image: "images/aixunt420d.jpg",
    datasheetUrl: ""
  },
  {
    id: "equipment-gom804",
    name: "GW Instek GOM-804 Hassas DC Mili-Ohm Metre",
    category: "Ölçü Aleti",
    description: "Şönt dirençleri, röle kontakları, kablo demetleri ve PCB iletken yollarının direncini 4 telli Kelvin metodu ile mikro-ohm seviyesinde ölçen test cihazıdır.",
    specs: "• Ölçüm Aralığı: 50 mΩ ~ 5 MΩ (0.1 µΩ çözünürlük)\n• Temel Doğruluk: %0.05 yüksek hassasiyet\n• Ölçüm Metodu: 4 Telli Kelvin (Four-wire Kelvin measurement)\n• Test Akımı: 1A maks. DC\n• Sinyal Fonksiyonları: Sıcaklık kompanzasyonu ve Limit/Tolerans (Pass/Fail) karşılaştırma",
    safety: "• Kesinlikle enerjili devrelerde ölçüm yapılmamalıdır.\n• 4 telli Kelvin klipsleri test edilen parçaya doğru polarite (Current+ / Voltage+) ile bağlanmalıdır.",
    image: "images/gom804.jpg",
    datasheetUrl: "pdf/GOM-804.pdf"
  },
  {
    id: "equipment-dso4104b",
    name: "Hantek DSO4104B 4 Kanallı Dijital Osiloskop",
    category: "Ölçü Aleti",
    description: "Elektronik devrelerdeki elektriksel sinyalleri, PWM dalga formlarını, haberleşme hatlarını ve parazitleri zaman ekseninde analiz eden 4 kanallı osiloskoptur.",
    specs: "• Bant Genişliği: 100 MHz\n• Kanal Sayısı: 4 Analog Kanal + Ext Trig\n• Örnekleme Hızı: 1 GSa/s\n• Hafıza Derinliği: 64 kpts\n• Dikey Hassasiyet: 2 mV/div ~ 10 V/div\n• Matematiksel Analiz: +, -, *, /, FFT",
    safety: "• Osiloskop şasi klipsi doğrudan toprağa bağlıdır. Şebeke ölçümlerinde diferansiyel prob veya izolasyon trafosu kullanılmadan faza bağlanırsa patlama yaşanır.\n• Yüksek gerilimlerde prob 10X kademesine alınmalıdır.",
    image: "images/dso4104b.jpg",
    datasheetUrl: "pdf/DSO4000BC_Manual_EN.pdf"
  },
  {
    id: "equipment-xdg2060",
    name: "OWON XDG2060 Çift Kanallı Arbitrary Sinyal Jeneratörü",
    category: "Ölçü Aleti",
    description: "Devrelerin frekans cevabını ve giriş tepkilerini test etmek için 60 MHz'e kadar standart ve özel tanımlı (arbitrary) dalga formları üreten çift kanallı sinyal jeneratörüdür.",
    specs: "• Maksimum Çıkış Frekansı: 60 MHz\n• Kanal Sayısı: 2 Bağımsız Çıkış Kanalı\n• Örnekleme Hızı: 500 MSa/s, 14-bit dikey çözünürlük\n• Dalga Formları: Sinüs, Kare, Rampa, Pals, Gürültü, Arbitrary\n• Modülasyon: AM, FM, PM, FSK, PWM, Sweep, Burst\n• Dahili Frekans Sayıcı: 100 mHz ~ 200 MHz",
    safety: "• BNC çıkış terminallerine dışarıdan ters gerilim uygulanmamalıdır.\n• Devre giriş empedansına göre menüden 50Ω veya High-Z doğru seçilmelidir.",
    image: "images/xdg2060.jpg",
    datasheetUrl: "pdf/XDG2060.pdf"
  },
  {
    id: "equipment-utl8212p",
    name: "UNI-T UTL8212+ Çift Kanallı DC Elektronik Yük",
    category: "Güç Sistemleri",
    description: "Güç kaynakları, aküler ve DC-DC dönüştürücülerin yük altındaki verimini ve deşarj kapasitesini test eden 200W programlanabilir elektronik yük cihazıdır.",
    specs: "• Giriş Gerilimi: 0 ~ 150 V DC\n• Giriş Akımı: 0 ~ 20 A (Kanal başı 20A maks.)\n• Toplam Güç: 200 W\n• Modlar: CC (Sabit Akım), CV (Sabit Gerilim), CR (Sabit Direnç), CP (Sabit Güç)\n• Özel Fonksiyonlar: Batarya Deşarj Testi, Dinamik Mod, OCP/OPP Koruması",
    safety: "• Artı ve eksi terminallerin yönüne (polarite) dikkat edilmelidir.\n• 200W güç sınırı aşılmamalı ve arka soğutma fanı kapatılmamalıdır.\n• Batarya testinde derin deşarjı önlemek için kesme gerilimi (Cut-off Voltage) girilmelidir.",
    image: "images/utl8212plus.jpg",
    datasheetUrl: "pdf/UNI-T UTL8212+.pdf"
  }
];

const categoryLabels = {
  "Ölçü Aleti": "Ölçü Aleti",
  "Güç Sistemleri": "Güç Sistemleri",
  "Havya & Lehim": "Havya & Lehim"
};

let equipment = [...initialEquipments];
let activeFilter = "all";
let searchTerm = "";
let toastTimer;
let viewMode = "cards";
let db = null;

// Firebase Proje Yapılandırması
const firebaseConfig = {
  apiKey: "AIzaSyCWntd18duLWz5ZG3d6fOeZxdnI_HkeSVg",
  authDomain: "atolye-katalog.firebaseapp.com",
  projectId: "atolye-katalog",
  storageBucket: "atolye-katalog.firebasestorage.app",
  messagingSenderId: "756298424086",
  appId: "1:756298424086:web:cab7c548d429963f97fa37",
  measurementId: "G-6P9RWN428E"
};

const elements = {
  grid: document.querySelector("#equipmentGrid"),
  empty: document.querySelector("#emptyState"),
  detailModal: document.querySelector("#detailModal"),
  detailContent: document.querySelector("#detailContent"),
  search: document.querySelector("#searchInput"),
  total: document.querySelector("#totalCount"),
  categories: document.querySelector("#categoryCount"),
  visible: document.querySelector("#visibleCount"),
  toast: document.querySelector("#toast")
};

const viewButtons = document.querySelectorAll(".view-button");
const filterButtons = document.querySelectorAll(".filter-button");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

function getFilteredEquipment() {
  const normalizedSearch = searchTerm.toLocaleLowerCase("tr-TR");
  return equipment.filter((item) => {
    const matchesCategory = activeFilter === "all" || item.category === activeFilter;
    const searchable = `${item.name} ${item.description} ${item.specs}`.toLocaleLowerCase("tr-TR");
    return matchesCategory && (!normalizedSearch || searchable.includes(normalizedSearch));
  });
}

function getImagePath(item) {
  const src = item && item.image ? String(item.image).trim() : "";
  return src || "";
}

function placeholderMarkup(label = "Resim Yükleniyor") {
  return `
    <span class="device-placeholder" aria-label="${escapeHtml(label)}">
      <svg viewBox="0 0 24 24" aria-hidden="true" style="width:36px;height:36px;fill:none;stroke:currentColor;stroke-width:2;"><path d="M7 18h10a2 2 0 0 0 2-2V9.5l-3.3-3.2A2 2 0 0 0 14.2 5H9.8A2 2 0 0 0 8.1 5.9L5 9.1V16a2 2 0 0 0 2 2Zm5-12.2v3.2m0 0 2.8 2.8m-2.8-2.8-2.6 2.8M7 17.5h10"/></svg>
      <small style="display:block;margin-top:6px;font-size:12px;opacity:0.8;">${escapeHtml(label)}</small>
    </span>
  `;
}

function imageMarkup(item) {
  const imagePath = getImagePath(item);
  if (!imagePath) {
    return placeholderMarkup("Cihaz Görseli");
  }

  return `
    <img class="equipment-photo" src="${escapeHtml(imagePath)}" alt="${escapeHtml(item.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;">
      ${placeholderMarkup("Görsel Bulunamadı")}
    </div>
  `;
}

function render() {
  const visibleItems = getFilteredEquipment();
  if (elements.grid) {
    elements.grid.classList.toggle("list-view", viewMode === "list");
    elements.grid.innerHTML = visibleItems.map((item, index) => {
      const firstSpec = String(item.specs || "").split("\n")[0].replace("•", "").trim();
      return `<article class="equipment-card" data-id="${escapeHtml(item.id)}" style="animation-delay: ${index * 50}ms">
        <span class="card-accent"></span>
        <div class="card-inner">
          <div class="card-top">
            <span class="category-pill">${escapeHtml(categoryLabels[item.category] || item.category)}</span>
            <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
          </div>
          <div class="equipment-image">${imageMarkup(item)}</div>
          <h3 class="card-title">${escapeHtml(item.name)}</h3>
          <p class="card-description">${escapeHtml(item.description)}</p>
          <div class="card-bottom">
            <span class="spec-preview">${escapeHtml(firstSpec)}</span>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  if (elements.empty) elements.empty.classList.toggle("hidden", visibleItems.length > 0);
  if (elements.total) elements.total.textContent = String(equipment.length).padStart(2, "0");
  if (elements.categories) elements.categories.textContent = String(new Set(equipment.map((item) => item.category)).size).padStart(2, "0");
  if (elements.visible) elements.visible.textContent = `(${String(visibleItems.length).padStart(2, "0")})`;

  filterButtons.forEach((button) => {
    const category = button.dataset.filter;
    const count = category === "all" ? equipment.length : equipment.filter((item) => item.category === category).length;
    const span = button.querySelector("span");
    if (span) span.textContent = String(count).padStart(2, "0");
    button.classList.toggle("active", category === activeFilter);
  });

  viewButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewMode));
}

function showModal(modal) {
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("hidden");
  if (!elements.detailModal || elements.detailModal.classList.contains("hidden")) {
    document.body.style.overflow = "";
  }
}

function openDetails(item) {
  const specs = String(item.specs || "").split("\n").map((spec) => spec.trim()).filter(Boolean);
  const datasheetUrl = item.datasheetUrl || item.datasheetData || "";
  const imagePath = getImagePath(item);
  const detailVisual = imagePath
    ? `<div class="detail-visual-wrap"><img class="detail-visual" src="${escapeHtml(imagePath)}" alt="${escapeHtml(item.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;">${placeholderMarkup("Görsel Bulunamadı")}</div></div>`
    : `<div class="detail-visual-wrap">${placeholderMarkup("Cihaz Görseli")}</div>`;

  elements.detailContent.innerHTML = `
    <div class="detail-shell">
      <header class="detail-header">
        <div class="detail-header-top">
          <span class="category-pill">${escapeHtml(categoryLabels[item.category] || item.category)}</span>
          ${datasheetUrl ? `<button class="datasheet-button" type="button" data-datasheet="${escapeHtml(datasheetUrl)}">📄 Datasheet Görüntüle</button>` : ""}
        </div>
        <h2 id="detailTitle">${escapeHtml(item.name)}</h2>
      </header>

      <div class="detail-body">
        ${detailVisual}
        <div class="detail-copy">
          <p>${escapeHtml(item.description)}</p>
        </div>
      </div>

      <div class="detail-columns detail-columns-stack">
        <div class="detail-block">
          <h3>Teknik Özellikler</h3>
          <ul>${specs.map((spec) => `<li>${escapeHtml(spec.replace(/^•\s*/, ""))}</li>`).join("")}</ul>
        </div>
        <div class="detail-block safety-block">
          <h3>Güvenli Kullanım ve Dikkat Edilecekler</h3>
          <p style="white-space: pre-line;">${escapeHtml(item.safety)}</p>
        </div>
      </div>
    </div>
  `;

  showModal(elements.detailModal);
}

function openPdfDocument(pdfUrl = "") {
  if (!pdfUrl) return;
  window.open(pdfUrl, "_blank", "noopener,noreferrer");
}

function showToast(message) {
  if (!elements.toast) return;
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

function startHeroSlider() {
  const track = document.querySelector("#heroSlideTrack");
  const dots = document.querySelectorAll(".hero-slide-dots i");
  if (!track || dots.length < 2) return;
  let slideIndex = 0;
  setInterval(() => {
    slideIndex = (slideIndex + 1) % dots.length;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, index) => dot.classList.toggle("active", index === slideIndex));
  }, 7000);
}

function initializeFirestore() {
  if (typeof firebase === "undefined") {
    console.warn("Firebase SDK henüz yüklenmedi, yerel veriyle çalışılıyor.");
    return null;
  }

  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (e) {
      console.error("Firebase başlatma hatası:", e);
      return null;
    }
  }

  return firebase.firestore();
}

async function syncFirestoreAndLocal() {
  if (!db) return;

  try {
    // Canlı Gerçek Zamanlı Dinleyici (onSnapshot)
    db.collection("equipments").onSnapshot((snapshot) => {
      if (!snapshot.empty) {
        equipment = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        render();
      }
    });

    const snapshot = await db.collection("equipments").get();
    if (snapshot.empty) {
      // Veritabanı boşsa 11 cihazı yükle
      const batch = db.batch();
      initialEquipments.forEach((item) => {
        const docRef = db.collection("equipments").doc(item.id);
        batch.set(docRef, { ...item, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
      });
      await batch.commit();
      showToast("Cihazlar Firestore'a başarıyla yüklendi.");
    } else {
      // Mevcut kayıtların resim yollarını güncelle
      const writes = initialEquipments.map((localItem) => {
        return db.collection("equipments").doc(localItem.id).set(localItem, { merge: true });
      });
      await Promise.all(writes);
    }
  } catch (error) {
    console.error("Firestore senkronizasyon hatası:", error);
  }
}

function initializePageEvents() {
  viewButtons.forEach((button) => button.addEventListener("click", () => {
    viewMode = button.dataset.view;
    render();
  }));

  filterButtons.forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    render();
  }));

  if (elements.search) {
    elements.search.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim();
      render();
    });
  }

  const clearBtn = document.querySelector("#clearFiltersButton");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      activeFilter = "all";
      searchTerm = "";
      if (elements.search) elements.search.value = "";
      render();
    });
  }

  if (elements.grid) {
    elements.grid.addEventListener("click", (event) => {
      const card = event.target.closest(".equipment-card");
      if (!card) return;
      const item = equipment.find((entry) => entry.id === card.dataset.id);
      if (item) openDetails(item);
    });
  }

  if (elements.detailContent) {
    elements.detailContent.addEventListener("click", (event) => {
      const button = event.target.closest(".datasheet-button");
      if (!button) return;
      openPdfDocument(button.dataset.datasheet);
    });
  }

  document.querySelectorAll(".close-modal").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".modal-backdrop")));
  });

  const todayLabel = document.querySelector("#todayLabel");
  if (todayLabel) {
    todayLabel.textContent = new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date()).toLocaleUpperCase("tr-TR");
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(elements.detailModal);
    }
    if (event.key === "/" && elements.search && document.activeElement !== elements.search && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      elements.search.focus();
    }
  });
}

async function initializeEquipment() {
  render();
  initializePageEvents();
  startHeroSlider();
  
  db = initializeFirestore();
  if (db) {
    await syncFirestoreAndLocal();
  }
}

initializeEquipment();