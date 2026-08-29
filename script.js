const STORAGE_KEY = "milliTeknolojiEkipmanlari";
const VIEW_STORAGE_KEY = "milliTeknolojiGorunum";
const ADMIN_PASSWORD = "1234";
const ADMIN_SESSION_KEY = "milliTeknolojiAdmin";
const SUPABASE_URL = "https://vugpoxilgnlwqjivxohw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_z9x4HVRpLRZbjaBuDh5FnA_PFjEMj0-";
const USE_SUPABASE = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL !== "PASTE_YOUR_SUPABASE_URL");

const supabase = USE_SUPABASE && window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const categoryLabels = {
  measurement: "Ölçü Aleti",
  power: "Güç Sistemi",
  general: "Genel Ekipman",
  soldering: "Lehimleme"
};

const defaultEquipment = [
  {
    id: "dmm-001",
    name: "Dijital Multimetre",
    category: "measurement",
    image: "",
    description: "Elektriksel büyüklükleri güvenli ve hassas biçimde ölçmek için kullanılan temel test cihazı.",
    specs: "DC gerilim: 0–600 V\nAC gerilim: 0–600 V True-RMS\nDC/AC akım: 0–10 A\nDirenç: 0–40 MΩ\nCAT III 600 V / CAT II 1000 V",
    safety: "Ölçüm kademesini bağlantıdan önce kontrol edin. Akım ölçümünde probun doğru girişte olduğundan emin olun. Direnç ve süreklilik ölçümünü enerjisi kesilmiş devrelerde yapın."
  },
  {
    id: "clamp-002",
    name: "Penseampermetre",
    category: "measurement",
    image: "",
    description: "Devreyi kesmeden, iletkenin oluşturduğu manyetik alan üzerinden AC ve DC akımı ölçer.",
    specs: "AC akım: 0–400 A True-RMS\nDC akım: 0–400 A\nÇene açıklığı: 30 mm\nAC/DC gerilim ve direnç ölçümü\nCAT III 600 V",
    safety: "Çeneyi tek bir iletkenin etrafına tam kapatın. Faz ve nötrü birlikte kavramayın; manyetik alanlar birbirini sönümler. İzole olmayan iletkenlere yaklaşmadan önce uygun kişisel koruyucu donanım kullanın."
  },
  {
    id: "scope-003",
    name: "Dijital Depolamalı Osiloskop",
    category: "measurement",
    image: "",
    description: "Elektrik sinyallerini zaman ekseninde görüntüler; frekans, genlik ve dalga şekli analizini mümkün kılar.",
    specs: "Bant genişliği: 100 MHz\nÖrnekleme: 1 GSa/s\n2 kanallı dijital giriş\n1X / 10X prob seçenekleri\nOtomatik frekans ve Vpp ölçümü",
    safety: "Prob zayıflatmasını cihaz menüsüyle eşleştirin. 10X prob, yüksek gerilimli sinyallerde ilk tercihtir. Toprak klipsini şebeke hattına bağlamayın; cihazın toprak referansını mutlaka kontrol edin."
  },
  {
    id: "supply-004",
    name: "Ayarlı DC Güç Kaynağı",
    category: "power",
    image: "",
    description: "Devreleri kontrollü bir DC gerilimle besler; hassas akım sınırlama ile prototipleri korur.",
    specs: "Çıkış: 0–30 V DC\nAkım: 0–5 A\nCV: Sabit Gerilim modu\nCC: Sabit Akım modu\nAyarlanabilir akım sınırlama\nÇift LED ekran",
    safety: "Devreyi bağlamadan önce gerilimi sıfırlayın. Akım limitini devrenin güvenli çalışma akımına göre ayarlayın. Kutupları kontrol etmeden çıkışı etkinleştirmeyin ve kısa devre durumunda çıkışı kapatın."
  }
];

let equipment = [];
let activeFilter = "all";
let searchTerm = "";
let toastTimer;
let selectedImageData = "";
let selectedDatasheetData = "";
let selectedDatasheetName = "";
let isAdmin = sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
let viewMode = localStorage.getItem(VIEW_STORAGE_KEY) === "list" ? "list" : "cards";

function normalizeSupabaseItem(item = {}) {
  return {
    ...item,
    id: item.id || item.equipment_id || `equipment-${Date.now()}`,
    name: item.name || "",
    category: item.category || "general",
    image: item.image || "",
    description: item.description || "",
    specs: item.specs || "",
    safety: item.safety || "",
    datasheetData: item.datasheetData || item.datasheet_data || "",
    datasheetName: item.datasheetName || item.datasheet_name || "",
    datasheetUrl: item.datasheetUrl || item.datasheet_url || ""
  };
}

function toSupabaseRow(item) {
  return {
    id: item.id,
    name: item.name,
    category: item.category,
    image: item.image || null,
    description: item.description,
    specs: item.specs,
    safety: item.safety,
    datasheet_data: item.datasheetData || null,
    datasheet_name: item.datasheetName || null,
    datasheet_url: item.datasheetUrl || null
  };
}

const elements = {
  grid: document.querySelector("#equipmentGrid"),
  empty: document.querySelector("#emptyState"),
  formModal: document.querySelector("#formModal"),
  detailModal: document.querySelector("#detailModal"),
  form: document.querySelector("#equipmentForm"),
  formTitle: document.querySelector("#formModalTitle"),
  detailContent: document.querySelector("#detailContent"),
  search: document.querySelector("#searchInput"),
  total: document.querySelector("#totalCount"),
  categories: document.querySelector("#categoryCount"),
  visible: document.querySelector("#visibleCount"),
  toast: document.querySelector("#toast"),
  adminButton: document.querySelector("#adminButton"),
  openAddButton: document.querySelector("#openAddButton"),
  loginModal: document.querySelector("#loginModal"),
  loginForm: document.querySelector("#loginForm"),
  passwordInput: document.querySelector("#passwordInput"),
  loginError: document.querySelector("#loginError")
};

const viewButtons = document.querySelectorAll(".view-button");

const imageFileInput = document.querySelector("#imageFileInput");
const imagePreview = document.querySelector("#imagePreview");
const imagePreviewImage = document.querySelector("#imagePreviewImage");
const imagePreviewName = document.querySelector("#imagePreviewName");
const clearImageButton = document.querySelector("#clearImageButton");
const datasheetFileInput = document.querySelector("#datasheetFileInput");
const datasheetFileInfo = document.querySelector("#datasheetFileInfo");
const datasheetFileName = document.querySelector("#datasheetFileName");
const clearDatasheetButton = document.querySelector("#clearDatasheetButton");

async function fetchEquipmentFromSupabase() {
  if (!supabase) return loadEquipmentFromLocalStorage();

  const { data, error } = await supabase.from("equipment").select("*").order("created_at", { ascending: false });
  if (error) {
    console.error("Supabase verileri çekilemedi.", error);
    showToast("Supabase bağlantısı kurulamadı; yerel veri kullanılacak.");
    return loadEquipmentFromLocalStorage();
  }

  const items = (data || []).map((item) => normalizeSupabaseItem(item));
  return items.length > 0 ? items : [...defaultEquipment];
}

function loadEquipmentFromLocalStorage() {
  const storageCandidates = [
    () => localStorage.getItem(STORAGE_KEY),
    () => sessionStorage.getItem(STORAGE_KEY)
  ];

  for (const getValue of storageCandidates) {
    try {
      const saved = JSON.parse(getValue());
      if (Array.isArray(saved) && saved.length > 0) return saved;
    } catch (error) {
      console.warn("Ekipman verileri okunamadı.", error);
    }
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultEquipment));
  } catch (error) {
    console.warn("Varsayılan ekipmanlar kaydedilemedi.", error);
  }
  return [...defaultEquipment];
}

function loadEquipment() {
  if (supabase) return [];
  return loadEquipmentFromLocalStorage();
}

async function saveEquipment() {
  if (supabase) {
    const rows = equipment.map((item) => toSupabaseRow(item));
    const { error } = await supabase.from("equipment").upsert(rows, { onConflict: "id" });
    if (error) {
      console.error("Supabase kayıt hatası.", error);
      showToast("Supabase’e kayıt yazılamadı.");
    }
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(equipment));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(equipment));
  } catch (error) {
    console.warn("Ekipman verileri kaydedilemedi.", error);
    showToast("Tarayıcı depolama alanı dolu; kayıt kaydedilemedi.");
  }
}

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

function getIcon(category) {
  const icons = {
    measurement: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="8" y="4" width="16" height="24" rx="2"/><path d="M11 9h10M12 14h2m3 0h2m3 0h1M12 19h8M12 23h3"/><circle cx="16" cy="9" r="1"/></svg>',
    power: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="7" width="20" height="18" rx="2"/><path d="M10 12h5v3h7M10 20h4m4 0h4M16 4v3M12 28h8"/></svg>',
    general: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m12 6 4 4 4-4 6 6-4 4 4 4-6 6-4-4-4 4-6-6 4-4-4-4 6-6Z"/><circle cx="16" cy="16" r="3"/></svg>',
    soldering: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M9 23h14v3H9zm2-11 4-4 4 4v11H11zm7-1 6 6M8 15l6-6"/><path d="M20 7h4v4h-4zm-4 12h2v4h-2z"/></svg>'
  };
  return icons[category] || icons.general;
}

function imageMarkup(item) {
  if (!item.image) return getIcon(item.category);
  return `<img src="${escapeHtml(item.image)}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('span'), {textContent: 'IMG'}))">`;
}

function render() {
  const visibleItems = getFilteredEquipment();
  elements.grid.classList.toggle("list-view", viewMode === "list");
  elements.grid.innerHTML = visibleItems.map((item, index) => {
    const firstSpec = String(item.specs || "").split("\n")[0];
    return `<article class="equipment-card" data-id="${escapeHtml(item.id)}" style="animation-delay: ${index * 60}ms">
      <span class="card-accent"></span><div class="card-inner"><div class="card-top"><span class="category-pill">${escapeHtml(categoryLabels[item.category] || categoryLabels.general)}</span><span class="card-index">${String(index + 1).padStart(2, "0")}</span></div>
      <div class="equipment-image">${imageMarkup(item)}</div><h3 class="card-title">${escapeHtml(item.name)}</h3><p class="card-description">${escapeHtml(item.description)}</p>
      <div class="card-bottom"><span class="spec-preview">${escapeHtml(firstSpec)}</span>${isAdmin ? `<div class="card-actions"><button class="text-button edit-button" data-id="${escapeHtml(item.id)}" type="button">Düzenle</button><button class="text-button delete delete-button" data-id="${escapeHtml(item.id)}" type="button">Sil</button></div>` : ""}</div></div></article>`;
  }).join("");
  elements.empty.classList.toggle("hidden", visibleItems.length > 0);
  elements.total.textContent = String(equipment.length).padStart(2, "0");
  elements.categories.textContent = String(new Set(equipment.map((item) => item.category)).size).padStart(2, "0");
  elements.visible.textContent = `(${String(visibleItems.length).padStart(2, "0")})`;
  document.querySelectorAll(".filter-button").forEach((button) => {
    const category = button.dataset.filter;
    const count = category === "all" ? equipment.length : equipment.filter((item) => item.category === category).length;
    button.querySelector("span").textContent = String(count).padStart(2, "0");
    button.classList.toggle("active", category === activeFilter);
  });
  viewButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === viewMode));
  updateAuthUI();
}

function updateAuthUI() {
  elements.openAddButton.classList.toggle("hidden", !isAdmin);
  elements.adminButton.classList.toggle("admin-active", isAdmin);
  elements.adminButton.innerHTML = isAdmin ? '<span class="lock-icon">×</span> Çıkış Yap' : '<span class="lock-icon">⌑</span> Yönetici Girişi';
  elements.adminButton.setAttribute("aria-label", isAdmin ? "Yönetici oturumundan çık" : "Yönetici girişi");
}

function requireAdmin() {
  if (isAdmin) return true;
  showToast("Bu işlem için yönetici girişi gereklidir.");
  return false;
}

function openLogin() {
  elements.loginForm.reset();
  elements.loginError.classList.add("hidden");
  showModal(elements.loginModal);
  elements.passwordInput.focus();
}

function logout() {
  isAdmin = false;
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  closeModal(elements.formModal);
  render();
  showToast("Yönetici oturumu kapatıldı.");
}

function openForm(item = null) {
  if (!requireAdmin()) return;
  elements.form.reset();
  selectedImageData = item?.image?.startsWith("data:image/") ? item.image : "";
  selectedDatasheetData = item?.datasheetData || "";
  selectedDatasheetName = item?.datasheetName || "";
  document.querySelector("#equipmentId").value = item?.id || "";
  elements.formTitle.textContent = item ? "Ekipmanı Düzenle" : "Yeni Ekipman Ekle";
  if (item) {
    document.querySelector("#nameInput").value = item.name;
    document.querySelector("#categoryInput").value = item.category;
    document.querySelector("#imageInput").value = selectedImageData ? "" : (item.image || "");
    document.querySelector("#descriptionInput").value = item.description;
    document.querySelector("#specsInput").value = item.specs;
    document.querySelector("#safetyInput").value = item.safety;
  }
  updateImagePreview(item?.image || "");
  updateDatasheetInfo(selectedDatasheetName);
  datasheetFileInput.value = "";
  showModal(elements.formModal);
  document.querySelector("#nameInput").focus();
}

function clearFormImageState() {
  selectedImageData = "";
  imageFileInput.value = "";
  document.querySelector("#imageInput").value = "";
  updateImagePreview("");
}

function clearFormDatasheetState() {
  selectedDatasheetData = "";
  selectedDatasheetName = "";
  datasheetFileInput.value = "";
  updateDatasheetInfo("");
}

function showModal(modal) { modal.classList.remove("hidden"); document.body.style.overflow = "hidden"; }
function closeModal(modal) { modal.classList.add("hidden"); if ([elements.formModal, elements.detailModal].every((item) => item.classList.contains("hidden"))) document.body.style.overflow = ""; }

function openDetails(item) {
  const specs = String(item.specs || "").split("\n").filter(Boolean);
  const datasheetUrl = item.datasheetData || item.datasheetUrl || "";
  const detailVisual = item.image
    ? `<div class="detail-visual-wrap"><img class="detail-visual" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}"></div>`
    : `<div class="detail-visual-wrap"><span class="detail-visual-icon">${getIcon(item.category)}</span></div>`;

  elements.detailContent.innerHTML = `
    <div class="detail-shell">
      <header class="detail-header">
        <div class="detail-header-top">
          <span class="category-pill">${escapeHtml(categoryLabels[item.category] || categoryLabels.general)}</span>
          ${datasheetUrl ? `<button class="datasheet-button" type="button" data-datasheet="${escapeHtml(datasheetUrl)}">📄 Datasheet Görüntüle (PDF)</button>` : ""}
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
          <ul>${specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join("")}</ul>
        </div>
        <div class="detail-block safety-block">
          <h3>Güvenli Kullanım</h3>
          <p>${escapeHtml(item.safety)}</p>
        </div>
      </div>
    </div>
  `;

  showModal(elements.detailModal);
}

function getPdfOpenUrl(pdfUrl = "") {
  if (!pdfUrl) return "";
  if (pdfUrl.startsWith("data:application/pdf")) {
    try {
      const metadata = pdfUrl.split(",");
      const rawData = metadata[1] || "";
      const binary = atob(rawData);
      const buffer = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) {
        buffer[index] = binary.charCodeAt(index);
      }
      const blob = new Blob([buffer], { type: "application/pdf" });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.warn("PDF URL dönüştürülemedi.", error);
      return pdfUrl;
    }
  }
  return pdfUrl;
}

function openPdfDocument(pdfUrl = "") {
  const targetUrl = getPdfOpenUrl(pdfUrl);
  if (!targetUrl) return;

  const link = document.createElement("a");
  link.href = targetUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();

  if (targetUrl.startsWith("blob:")) {
    window.setTimeout(() => URL.revokeObjectURL(targetUrl), 10000);
  }
}

function showToast(message) {
  clearTimeout(toastTimer); elements.toast.textContent = message; elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2800);
}

function updateImagePreview(image, fileName = "") {
  const previewSource = selectedImageData || image;
  imagePreview.classList.toggle("hidden", !previewSource);
  clearImageButton.classList.toggle("hidden", !previewSource);
  if (previewSource) {
    imagePreviewImage.src = previewSource;
    imagePreviewName.textContent = fileName || (selectedImageData ? "Yüklenen fotoğraf" : "URL görseli");
  }
}

function updateDatasheetInfo(fileName = "") {
  const hasDatasheet = Boolean(selectedDatasheetData || fileName);
  datasheetFileInfo.classList.toggle("hidden", !hasDatasheet);
  clearDatasheetButton.classList.toggle("hidden", !hasDatasheet);
  datasheetFileName.textContent = fileName || selectedDatasheetName || "-";
}

function startHeroSlider() {
  const track = document.querySelector("#heroSlideTrack");
  const dots = document.querySelectorAll(".hero-slide-dots i");
  if (!track || dots.length < 2) return;
  let slideIndex = 0;
  window.setInterval(() => {
    slideIndex = (slideIndex + 1) % dots.length;
    track.style.transform = `translateX(-${slideIndex * 100}%)`;
    dots.forEach((dot, index) => dot.classList.toggle("active", index === slideIndex));
  }, 7000);
}

elements.openAddButton.addEventListener("click", () => openForm());
viewButtons.forEach((button) => button.addEventListener("click", () => {
  viewMode = button.dataset.view;
  localStorage.setItem(VIEW_STORAGE_KEY, viewMode);
  render();
}));
elements.adminButton.addEventListener("click", () => { if (isAdmin) logout(); else openLogin(); });
elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (elements.passwordInput.value === ADMIN_PASSWORD) {
    isAdmin = true;
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    closeModal(elements.loginModal);
    render();
    showToast("Yönetici modu etkinleştirildi.");
  } else {
    elements.loginError.classList.remove("hidden");
    elements.passwordInput.select();
  }
});
imageFileInput.addEventListener("change", () => {
  const file = imageFileInput.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    imageFileInput.value = "";
    showToast("Fotoğraf 2 MB'dan küçük olmalıdır.");
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    selectedImageData = reader.result;
    document.querySelector("#imageInput").value = "";
    updateImagePreview("", file.name);
  });
  reader.readAsDataURL(file);
});
clearImageButton.addEventListener("click", clearFormImageState);

datasheetFileInput.addEventListener("change", () => {
  const file = datasheetFileInput.files[0];
  if (!file) return;
  if (!/\.pdf$/i.test(file.name)) {
    datasheetFileInput.value = "";
    showToast("Lütfen bir PDF dosyası seçin.");
    return;
  }
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    selectedDatasheetData = reader.result;
    selectedDatasheetName = file.name;
    updateDatasheetInfo(file.name);
  });
  reader.readAsDataURL(file);
});
clearDatasheetButton.addEventListener("click", clearFormDatasheetState);

elements.search.addEventListener("input", (event) => { searchTerm = event.target.value.trim(); render(); });
document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => { activeFilter = button.dataset.filter; render(); }));
document.querySelector("#clearFiltersButton").addEventListener("click", () => { activeFilter = "all"; searchTerm = ""; elements.search.value = ""; render(); });

elements.grid.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".equipment-card");
  if (button?.classList.contains("edit-button")) { if (requireAdmin()) openForm(equipment.find((item) => item.id === button.dataset.id)); }
  else if (button?.classList.contains("delete-button")) {
    if (!requireAdmin()) return;
    const item = equipment.find((entry) => entry.id === button.dataset.id);
    if (item && window.confirm(`“${item.name}” kaydını silmek istediğinize emin misiniz?`)) {
      equipment = equipment.filter((entry) => entry.id !== item.id);
      if (supabase) {
        const { error } = await supabase.from("equipment").delete().eq("id", item.id);
        if (error) {
          console.error("Supabase silme hatası.", error);
          showToast("Ekipman silinemedi.");
          return;
        }
      }
      await saveEquipment();
      render();
      showToast("Ekipman kaydı silindi.");
    }
  } else if (card) openDetails(equipment.find((item) => item.id === card.dataset.id));
});

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requireAdmin()) return;
  const id = document.querySelector("#equipmentId").value || `equipment-${Date.now()}`;
  const item = {
    id,
    name: document.querySelector("#nameInput").value.trim(),
    category: document.querySelector("#categoryInput").value,
    image: selectedImageData || document.querySelector("#imageInput").value.trim(),
    datasheetData: selectedDatasheetData || "",
    datasheetName: selectedDatasheetName || "",
    datasheetUrl: selectedDatasheetData || "",
    description: document.querySelector("#descriptionInput").value.trim(),
    specs: document.querySelector("#specsInput").value.trim(),
    safety: document.querySelector("#safetyInput").value.trim()
  };
  const existingIndex = equipment.findIndex((entry) => entry.id === id);
  if (existingIndex >= 0) equipment[existingIndex] = item; else equipment.push(item);
  await saveEquipment();
  render();
  closeModal(elements.formModal);
  showToast(existingIndex >= 0 ? "Ekipman kaydı güncellendi." : "Yeni ekipman kaydedildi.");
});

elements.detailContent.addEventListener("click", (event) => {
  const button = event.target.closest(".datasheet-button");
  if (!button) return;
  const pdfUrl = button.dataset.datasheet;
  if (!pdfUrl) return;
  openPdfDocument(pdfUrl);
});

document.querySelectorAll(".close-modal").forEach((button) => button.addEventListener("click", () => closeModal(button.closest(".modal-backdrop"))));
[elements.formModal, elements.detailModal].forEach((modal) => modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(modal); }));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal(elements.formModal); closeModal(elements.detailModal); } if (event.key === "/" && document.activeElement !== elements.search && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) { event.preventDefault(); elements.search.focus(); } });

document.querySelector("#todayLabel").textContent = new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date()).toLocaleUpperCase("tr-TR");

async function initializeEquipment() {
  if (supabase) {
    equipment = await fetchEquipmentFromSupabase();
  } else {
    equipment = loadEquipment();
  }
  render();
  startHeroSlider();
}

initializeEquipment();
