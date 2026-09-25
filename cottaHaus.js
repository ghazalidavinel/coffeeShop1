/* ===================== DATA ===================== */
const MENU = [
  {
    name: "Espresso Klasik",
    cat: "Espresso Bar",
    price: 28000,
    desc: "Double shot blend Gayo-Toraja dengan crema tebal dan aftertaste cokelat gelap.",
    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Cotta Haus Signature Latte",
    cat: "Espresso Bar",
    price: 42000,
    tag: "Signature",
    desc: "Espresso house blend, susu segar steamed presisi 60°C, dan gula aren asli Temanggung.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Butterscotch Sea-Salt Latte",
    cat: "Espresso Bar",
    price: 46000,
    tag: "Best Seller",
    desc: "Manis butterscotch bertemu sejumput garam laut Bali, creamy dan seimbang.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Caramel Macchiato",
    cat: "Espresso Bar",
    price: 40000,
    desc: "Lapisan foam lembut, saus karamel rumahan, dan double shot espresso.",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "V60 Gayo Wine Process",
    cat: "Manual Brew",
    price: 48000,
    tag: "Signature",
    desc: "Biji Gayo wine process, notes anggur merah dan buah beri matang.",
    img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Japanese Iced Toraja",
    cat: "Manual Brew",
    price: 38000,
    desc: "Slow drip 8 jam, Toraja single origin, rasa bersih dan menyegarkan.",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Vietnam Drip Kintamani",
    cat: "Manual Brew",
    price: 36000,
    desc: "Kintamani robusta-arabica blend, kental dan earthy.",
    img: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Matcha Latte Uji",
    cat: "Non-Coffee & Tea",
    price: 44000,
    desc: "Matcha ceremonial grade Uji, susu oat, sedikit manis.",
    img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chamomile Honey Tea",
    cat: "Non-Coffee & Tea",
    price: 32000,
    desc: "Chamomile kering, madu hutan, disajikan hangat.",
    img: "https://images.unsplash.com/photo-1597481499666-9c8ffa0a2864?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Vanilla Milk Cloud",
    cat: "Non-Coffee & Tea",
    price: 34000,
    desc: "Susu segar, vanilla bean, foam lembut tanpa kafein.",
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Butter Croissant",
    cat: "Artisanal Bakery",
    price: 32000,
    desc: "Lapisan renyah gaya klasik Prancis, dipanggang setiap pagi.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Artisanal Dark Chocolate",
    cat: "Artisanal Bakery",
    price: 36000,
    desc: "Croissant isi dark chocolate 70%, pahit-manis seimbang.",
    img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Almond Danish",
    cat: "Artisanal Bakery",
    price: 34000,
    desc: "Pastry lembut isi frangipane almond, taburan almond panggang.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Truffle Mushroom Pasta",
    cat: "Main Course",
    price: 58000,
    desc: "Pasta creamy, jamur mixed, truffle oil aroma kuat.",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chicken Pesto Panini",
    cat: "Main Course",
    price: 52000,
    desc: "Roti panini panggang, ayam suwir pesto, keju mozzarella leleh.",
    img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Salmon Aglio Olio",
    cat: "Main Course",
    price: 62000,
    desc: "Aglio olio pedas, potongan salmon panggang, parsley segar.",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
  },
];
const CATEGORIES = [
  "Semua",
  "Espresso Bar",
  "Manual Brew",
  "Non-Coffee & Tea",
  "Artisanal Bakery",
  "Main Course",
];

const BRANCHES = [
  {
    id: "senopati",
    name: "Cotta Haus Senopati",
    city: "Jakarta Selatan",
    tagline: "Signature Glasshouse Lounge & Manual Brew Bar",
    address: "Jl. Suryo No. 28, Senopati, Jakarta Selatan",
    hours: "07:00 - 22:00 WIB",
    phone: "+62 8123-4567-801",
    seats: "85 kursi (Indoor AC + Area Semi-Outdoor)",
    facilities: [
      "WiFi 500 Mbps",
      "Stopkontak di Setiap Meja",
      "Meeting Pod 8 Pax",
      "Valet Parking",
      "Pet Friendly (Outdoor)",
      "Smoking Area",
    ],
    sigName: "Senopati Blue Cloud Espresso",
    sigDesc:
      "Espresso, susu oat infused bunga telang biru, dan vanilla salt cream. Hanya tersedia di cabang Senopati.",
    baristaName: "Dimas Nugraha — Q-Grader Certified",
    baristaBio:
      "8 tahun di industri specialty coffee, finalis Indonesia Brewers Cup 2024. Dimas memimpin kurasi biji dan kalibrasi harian di bar Senopati.",
    cover:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1516600164266-f3b8166ae679?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: "dharmawangsa",
    name: "Cotta Haus Dharmawangsa",
    city: "Jakarta Selatan",
    tagline: "Serene Garden Terrace & Roastery Corner",
    address: "Jl. Dharmawangsa VIII No. 12, Jakarta Selatan",
    hours: "07:30 - 21:00 WIB",
    phone: "+62 8123-4567-802",
    seats: "60 kursi (Garden Terrace + Indoor)",
    facilities: [
      "WiFi 300 Mbps",
      "Garden Terrace",
      "Roastery Viewing Corner",
      "Live Music (Weekend)",
      "Kids Corner",
      "Free Parking",
    ],
    sigName: "Dharmawangsa Garden Cascara Fizz",
    sigDesc:
      "Cascara kering diseduh cold brew, soda, dan daun mint dari taman kami sendiri. Hanya tersedia di cabang Dharmawangsa.",
    baristaName: "Rani Kusuma — Latte Art Specialist",
    baristaBio:
      "6 tahun meracik signature drink, mengelola sudut roastery mini di cabang Dharmawangsa.",
    cover:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: "riau-bandung",
    name: "Cotta Haus Riau Bandung",
    city: "Bandung",
    tagline: "Heritage Colonial Villa & Indoor Botanical Courtyard",
    address: "Jl. L.L.R.E. Martadinata (Riau) No. 85, Bandung",
    hours: "08:00 - 22:00 WIB",
    phone: "+62 8123-4567-803",
    seats: "70 kursi (Villa Utama + Courtyard)",
    facilities: [
      "WiFi 400 Mbps",
      "Botanical Courtyard",
      "Heritage Photo Spot",
      "Private Function Room",
      "Dog Friendly",
      "Ample Parking",
    ],
    sigName: "Riau Heritage Kopi Susu Gula Aren",
    sigDesc:
      "Racikan kopi susu klasik dengan gula aren Priangan, disajikan dalam cangkir vintage. Hanya tersedia di cabang Riau Bandung.",
    baristaName: "Bayu Pratama — Roastmaster",
    baristaBio:
      "10 tahun pengalaman roasting, mengawasi profil sangrai seluruh cabang dari Bandung.",
    cover:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: "canggu-bali",
    name: "Cotta Haus Canggu Bali",
    city: "Bali",
    tagline: "Tropical Courtyard & Open-Air Roastery",
    address: "Jl. Pantai Batu Bolong No. 45, Canggu, Bali",
    hours: "07:00 - 23:00 WIB",
    phone: "+62 8123-4567-804",
    seats: "90 kursi (Open-Air Courtyard)",
    facilities: [
      "WiFi 500 Mbps",
      "Open-Air Courtyard",
      "Surfboard Rack",
      "Beach Towel Rental",
      "Pet Friendly",
      "Vegan Menu Options",
    ],
    sigName: "Canggu Coconut Cold Brew",
    sigDesc:
      "Cold brew 18 jam, santan segar Bali, sedikit gula kelapa. Hanya tersedia di cabang Canggu.",
    baristaName: "Made Wirawan — Sustainability Lead",
    baristaBio:
      "7 tahun di industri kopi, memimpin praktik zero-waste dan sourcing biji berkelanjutan di Bali.",
    cover:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
    ],
  },
  {
    id: "malioboro-yogyakarta",
    name: "Cotta Haus Malioboro Yogyakarta",
    city: "Yogyakarta",
    tagline: "Vintage Espresso Bar & Batik Wall Gallery",
    address: "Jl. Malioboro No. 22, Yogyakarta",
    hours: "07:00 - 21:30 WIB",
    phone: "+62 8123-4567-805",
    seats: "50 kursi (Indoor Vintage Lounge)",
    facilities: [
      "WiFi 300 Mbps",
      "Batik Art Gallery Wall",
      "Gamelan Akustik (Weekend)",
      "Free Parking",
      "Musholla",
      "Charging Station",
    ],
    sigName: "Malioboro Jahe Rempah Latte",
    sigDesc:
      "Espresso, susu, jahe merah, dan rempah nusantara — hangat dan menenangkan. Hanya tersedia di cabang Malioboro.",
    baristaName: "Sari Handayani — Community Trainer",
    baristaBio:
      "5 tahun mengajar barista pemula, aktif di komunitas kopi Yogyakarta.",
    cover:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
    ],
  },
];

const WA_NUMBER = "628123456780"; // nomor WhatsApp toko (contoh)

/* ===================== STATE ===================== */
let activeCat = "Semua";

/* ===================== NAV ===================== */
function showSection(id) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav.mainnav button").forEach((b) => {
    b.classList.toggle("active", b.dataset.nav === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.dataset.nav;
    if (el.dataset.cat) {
      activeCat = el.dataset.cat;
      renderMenu();
    }
    if (id === "branch-detail") return;
    showSection(id);
  });
});

/* ===================== MENU RENDER ===================== */
function fmt(n) {
  return "Rp" + n.toLocaleString("id-ID");
}

function renderCategories() {
  const row = document.getElementById("catRow");
  row.innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="cat-pill ${c === activeCat ? "active" : ""}" data-cat="${c}">${c}</button>`,
  ).join("");
  row.querySelectorAll(".cat-pill").forEach((b) => {
    b.addEventListener("click", () => {
      activeCat = b.dataset.cat;
      renderMenu();
    });
  });
}

function renderMenu() {
  renderCategories();
  const grid = document.getElementById("menuGrid");
  const items =
    activeCat === "Semua" ? MENU : MENU.filter((m) => m.cat === activeCat);
  grid.innerHTML = items
    .map(
      (m) => `
    <div class="menu-card">
      <div class="menu-photo">
        <img src="${m.img}" alt="${m.name}">
        ${m.tag ? `<span class="menu-tag ${m.tag === "Best Seller" ? "best" : ""}">${m.tag}</span>` : ""}
        <span class="menu-cat-label">${m.cat}</span>
      </div>
      <div class="menu-body">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="menu-foot">
          <span class="price">${fmt(m.price)}</span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

/* ===================== BRANCH LIST ===================== */
function renderBranchGrid() {
  const grid = document.getElementById("branchGrid");
  grid.innerHTML = BRANCHES.map(
    (b) => `
    <div class="branch-card">
      <div class="branch-photo">
        <img src="${b.cover}" alt="${b.name}">
        <span class="branch-city-tag">${b.city}</span>
      </div>
      <div class="branch-body">
        <h3>${b.name}</h3>
        <div class="branch-tagline">${b.tagline}</div>
        <div class="branch-meta">
          <div>
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z" stroke="currentColor" stroke-width="1.7"/></svg>
            ${b.address}
          </div>
          <div>
            <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
            ${b.hours}
          </div>
        </div>
        <div class="branch-actions">
          <button class="btn-detail" data-branch="${b.id}">
            Lihat Detail
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <a class="icon-circle" href="https://wa.me/${WA_NUMBER}" target="_blank" rel="noopener" title="Chat WhatsApp">
            <svg viewBox="0 0 24 24" fill="none"><path d="M4 4h4l2 5-2.5 1.5a12 12 0 006 6L15 14l5 2v4a2 2 0 01-2 2C9.6 22 2 14.4 2 6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.6"/></svg>
          </a>
          <a class="icon-circle" href="https://www.google.com/maps/search/${encodeURIComponent(b.name)}" target="_blank" rel="noopener" title="Buka di Maps">
            <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>
          </a>
        </div>
      </div>
    </div>
  `,
  ).join("");
  grid.querySelectorAll("[data-branch]").forEach((b) => {
    b.addEventListener("click", () => renderBranchDetail(b.dataset.branch));
  });
}

/* ===================== BRANCH DETAIL TEMPLATE ===================== */
function renderBranchDetail(id) {
  const b = BRANCHES.find((x) => x.id === id);
  if (!b) return;
  document.getElementById("bdName").textContent = b.name;
  document.getElementById("bdTagline").textContent = b.tagline;
  document.getElementById("bdAddress").textContent = b.address;
  document.getElementById("bdHours").textContent =
    "Jam operasional: " + b.hours;
  document.getElementById("bdPhone").textContent = b.phone;
  document.getElementById("bdSeats").textContent = b.seats;
  document.getElementById("bdSigName").textContent = b.sigName;
  document.getElementById("bdSigDesc").textContent = b.sigDesc;
  document.getElementById("bdBaristaName").textContent = b.baristaName;
  document.getElementById("bdBaristaBio").textContent = b.baristaBio;
  document.getElementById("bdFacilities").innerHTML = b.facilities
    .map(
      (f) => `
    <span class="fac-pill"><svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>${f}</span>
  `,
    )
    .join("");
  document.getElementById("bdGallery").innerHTML = b.gallery
    .map(
      (g) =>
        `<div class="g-photo"><img src="${g}" alt="${b.name} gallery"></div>`,
    )
    .join("");
  document.getElementById("bdWhatsapp").href =
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Cotta Haus " + b.name + ", saya ingin bertanya-tanya.")}`;
  document.getElementById("bdMaps").href =
    `https://www.google.com/maps/search/${encodeURIComponent(b.name + " " + b.address)}`;
  showSection("branch-detail");
}

/* ===================== INIT ===================== */
renderMenu();
renderBranchGrid();

/* ===================== HOME MENU CAROUSEL ===================== */
let mcIndex = 0;
let mcPhotos = [];
function renderMenuCarousel() {
  const track = document.getElementById("mcTrack");
  if (!track) return;
  mcPhotos = [...new Set(MENU.map((m) => m.img))];
  track.innerHTML = mcPhotos
    .map(
      (img, i) => `
    <div class="mc-slide${i === 0 ? " active" : ""}">
      <img src="${img}" alt="Cotta Haus" />
    </div>`,
    )
    .join("");
}
function mcShow(newIndex, dir) {
  const slides = document.querySelectorAll(".mc-slide");
  if (!slides.length) return;
  const oldIndex = mcIndex;
  const target = (newIndex + mcPhotos.length) % mcPhotos.length;
  if (target === oldIndex) return;
  const oldEl = slides[oldIndex];
  const newEl = slides[target];

  newEl.style.transition = "none";
  newEl.style.transform = dir === "prev" ? "translateX(-100%)" : "translateX(100%)";
  newEl.classList.add("active");
  void newEl.offsetWidth;
  newEl.style.transition = "";

  requestAnimationFrame(() => {
    newEl.style.transform = "translateX(0)";
    oldEl.style.transform = dir === "prev" ? "translateX(100%)" : "translateX(-100%)";
    oldEl.classList.remove("active");
  });
  mcIndex = target;
}
renderMenuCarousel();
document
  .getElementById("mcPrev")
  ?.addEventListener("click", () => mcShow(mcIndex - 1, "prev"));
document
  .getElementById("mcNext")
  ?.addEventListener("click", () => mcShow(mcIndex + 1, "next"));