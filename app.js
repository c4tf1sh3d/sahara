// --- DATA DEFINITIONS ---
const SAHARA_COORDS = [56.326887, 44.005986];

const ROOMS = [
{
id: 'kaiser',
title: 'Альпийская баня «Кайзер»',
subtitle: 'Альпийский уют и травяной пар',
description: 'Атмосфера высокогорного альпийского шале с мягким паром, насыщенным эфирными маслами горных трав и натуральной древесиной.',
price: 2500,
capacity: 'до 8 человек',
temp: '60–75°C',
image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000',
tags: ['Травяной пар', 'Фито-бар', 'Комната отдыха', 'Камин', 'Гидромассаж'],
features: [
'Мягкий пар на альпийских луговых травах',
'Просторная зона отдыха из массива дуба',
'Профессиональная аудиосистема',
'Каминный зал для чаепитий'
]
},
{
id: 'emperor',
title: 'Японская Офуро «Император»',
subtitle: 'Древний ритуал гармонии и очищения',
description: 'Аутентичная японская баня с купелями из кедра различной температуры, ритуалом «Гейша» и горячими опилками.',
price: 3200,
capacity: 'до 6 человек',
temp: '40–45°C',
image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000',
tags: ['Кедровые бочки', 'Ритуал Гейша', 'Японский сад', 'Стоун-терапия'],
features: [
'Дубовые и кедровые офуро с горячей минеральной водой',
'Зона медитации в стиле Дзен',
'Японский чайный мастер по запросу',
'Эксклюзивные релакс-массажи'
]
},
{
id: 'pharaoh',
title: 'Апартаменты «Фараон»',
subtitle: 'Королевский бассейн и финская сауна',
description: 'Величественные апартаменты с кристально чистым овальным бассейном с 3-ступенчатой системой фильтрации и классической финской сауной.',
price: 3500,
capacity: 'до 10 человек',
temp: '90–110°C',
image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000',
tags: ['Финская сауна', 'Овальный бассейн', '3-этапная фильтрация', 'VIP SPA-зона'],
features: [
'Глубокий очищенный бассейн с подсветкой',
'Сухой жарящий финский пар',
'SPA-кабинет для пилингов и массажей',
'Банкетная зона с мягкой кожаной мебелью'
]
},
{
id: 'padishah',
title: 'Апартаменты «Падишах»',
subtitle: 'Восточная сказка и россыпь зеркал',
description: 'Роскошный восточный интерьер с зеркальными стенами, ажурными балдахинами, бассейном с противотоком и панорамной зоной релакса.',
price: 3800,
capacity: 'до 12 человек',
temp: '80–100°C',
image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000',
tags: ['Восточный стиль', 'Бассейн с водой', 'Балдахины', 'Русский бильярд'],
features: [
'Пышные восточные ложа с балдахинами',
'Зеркальный лабиринт и светодизайн',
'Полноразмерный бильярдный стол',
'Караоке-система с премиум звуком'
]
},
{
id: 'sultan',
title: 'Апартаменты «Султан»',
subtitle: 'Традиционный турецкий Хаммам',
description: 'Густой влажный пар, прогретый мраморный чебек-таши, джакузи с гидромассажем и зоны для пенного массажа и пилинга.',
price: 4000,
capacity: 'до 12 человек',
temp: '45–50°C',
image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
tags: ['Турецкий Хаммам', 'Джакузи', 'Пенный массаж', 'Мраморный залежь'],
features: [
'Аутентичный теплый мраморный курна-зал',
'Джакузи с аэро- и гидромассажем',
'Комната отдыха с витражами',
'Широкий выбор ритуалов мыльного пилинга'
]
}
];

const EXTRA_SERVICES = [
{ id: 'massage_classic', title: 'Классический массаж (60 мин)', price: 3000 },
{ id: 'peeling_soap', title: 'Пенно-мыльный пилинг в Хаммаме', price: 2500 },
{ id: 'tea_ceremony', title: 'Элитная чайная церемония', price: 1500 },
{ id: 'billiards', title: 'Аренда бильярдной зоны', price: 1000 },
{ id: 'hookah', title: 'Премиум парение / Авторский кальян', price: 2000 }
];

const GALLERY = [
{ id: 1, title: 'Апартаменты Фараон', category: 'Pools', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000' },
{ id: 2, title: 'Альпийский пар', category: 'Saunas', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000' },
{ id: 3, title: 'Восточный хаммам', category: 'SPA', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000' },
{ id: 4, title: 'Лаунж-зона Падишах', category: 'Lounges', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000' },
{ id: 5, title: 'Японские купели', category: 'Saunas', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000' },
{ id: 6, title: 'Джакузи с гидромассажем', category: 'Pools', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1000' }
];

// STATE
let activeRoomId = 'kaiser';
let selectedServices = [];
let currentFilter = 'All';

// DOM INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
// Initialize Lucide Icons
if (window.lucide) {
window.lucide.createIcons();
}

// Setup Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('bg-[#120F0D]/90', 'backdrop-blur-md', 'border-b', 'border-[#D4AF37]/20', 'shadow-2xl');
header.classList.remove('bg-transparent', 'py-5');
header.classList.add('py-3');
} else {
header.classList.remove('bg-[#120F0D]/90', 'backdrop-blur-md', 'border-b', 'border-[#D4AF37]/20', 'shadow-2xl', 'py-3');
header.classList.add('bg-transparent', 'py-5');
}
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Initialize Modules
renderRoomTabs();
renderActiveRoom();
renderGalleryFilters();
renderGalleryGrid();
initBookingModalForm();
initYandexMap();
});

// ROOMS RENDER
function renderRoomTabs() {
const tabsContainer = document.getElementById('room-tabs');
tabsContainer.innerHTML = ROOMS.map(room => {
const isActive = room.id === activeRoomId;
return <button  onclick="setActiveRoom('${room.id}')" class="px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 border ${ isActive  ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-105'  : 'bg-[#1E1915]/80 text-amber-200/70 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-amber-100' }" > <i data-lucide="flame" class="w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#D4AF37]'}"></i> ${room.title.split('«')[1]?.replace('»', '') || room.title} </button>;
}).join('');
if (window.lucide) window.lucide.createIcons();
}

function setActiveRoom(id) {
activeRoomId = id;
renderRoomTabs();
renderActiveRoom();
}

function renderActiveRoom() {
const room = ROOMS.find(r => r.id === activeRoomId) || ROOMS[0];
const container = document.getElementById('room-display');

container.innerHTML = `




  <div class="absolute top-4 left-4 flex flex-wrap gap-2">
    <span class="bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
      <i data-lucide="users" class="w-3 h-3"></i> ${room.capacity}
    </span>
    <span class="bg-black/70 backdrop-blur-md text-amber-200 border border-[#D4AF37]/40 text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
      <i data-lucide="flame" class="w-3 h-3 text-orange-400"></i> ${room.temp}
    </span>
  </div>

  <button onclick="openLightbox('${room.image}')" class="absolute bottom-4 right-4 hidden lg:flex bg-black/80 hover:bg-black text-amber-200 p-2.5 rounded-full border border-[#D4AF37]/30 transition-all backdrop-blur-md">
    <i data-lucide="maximize-2" class="w-4 h-4"></i>
  </button>
</div>

<div class="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
  <div>
    <div class="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">${room.subtitle}</div>
    <h3 class="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-4">${room.title}</h3>
    <p class="text-amber-100/70 text-sm leading-relaxed mb-6 font-light">${room.description}</p>

    <div class="space-y-2.5 mb-8">
      ${room.features.map(f => `
        <div class="flex items-start gap-2.5 text-xs text-amber-100/90">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </div>
      `).join('')}
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
      ${room.tags.map(t => `<span class="text-[11px] bg-[#2B231D] text-amber-200/80 px-2.5 py-1 rounded-md border border-[#D4AF37]/20">#${t}</span>`).join('')}
    </div>
  </div>

  <div class="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between gap-4">
    <div>
      <div class="text-[10px] uppercase text-amber-200/60 tracking-wider">Стоимость от</div>
      <div class="text-2xl sm:text-3xl font-serif text-[#D4AF37] font-bold">
        ${room.price.toLocaleString()} <span class="text-sm font-sans font-normal text-amber-100/70">руб/час</span>
      </div>
    </div>

    <button onclick="openBookingModal('${room.id}')" class="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-bold uppercase tracking-wider text-xs hover:scale-105 transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2">
      <span>Забронировать</span>
      <i data-lucide="chevron-right" class="w-4 h-4"></i>
    </button>
  </div>
</div>


`;
if (window.lucide) window.lucide.createIcons();
}

// GALLERY RENDER
function renderGalleryFilters() {
const categories = ['All', 'Saunas', 'Pools', 'SPA', 'Lounges'];
const container = document.getElementById('gallery-filters');
container.innerHTML = categories.map(cat => <button  onclick="filterGallery('${cat}')" class="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all border ${ currentFilter === cat ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#1A1613] text-amber-200/70 border-[#D4AF37]/20 hover:text-amber-100' }" > ${cat === 'All' ? 'Все фото' : cat === 'Saunas' ? 'Сауны' : cat === 'Pools' ? 'Бассейны' : cat === 'SPA' ? 'SPA-зоны' : 'Лаунж'} </button>).join('');
}

function filterGallery(cat) {
currentFilter = cat;
renderGalleryFilters();
renderGalleryGrid();
}

function renderGalleryGrid() {
const items = currentFilter === 'All' ? GALLERY : GALLERY.filter(g => g.category === currentFilter);
const container = document.getElementById('gallery-grid');

container.innerHTML = items.map(item => <div onclick="openLightbox('${item.image}')" class="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/20"> <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6"> <div> <div class="text-[#D4AF37] text-xs uppercase tracking-widest">${item.category}</div> <div class="text-amber-100 font-serif text-lg font-bold">${item.title}</div> </div> </div> </div>).join('');
}

// BOOKING CALCULATOR & MODAL
function initBookingModalForm() {
const roomSelect = document.getElementById('booking-room-select');
roomSelect.innerHTML = ROOMS.map(r => <option value="${r.id}">${r.title} (${r.price} руб/час)</option>).join('');

const servicesGrid = document.getElementById('booking-services-grid');
servicesGrid.innerHTML = EXTRA_SERVICES.map(s => <div  id="service-card-${s.id}" onclick="toggleService('${s.id}')"  class="p-3 rounded-xl border border-[#D4AF37]/20 bg-[#120F0D] text-amber-200/60 text-xs cursor-pointer flex items-center justify-between transition-all" > <span>${s.title}</span> <span class="text-[#D4AF37] font-semibold">+${s.price}₽</span> </div>).join('');

// Set Default Date Today
document.getElementById('booking-date').value = new Date().toISOString().split('T')[0];

// Recalculate on inputs
document.getElementById('booking-room-select').addEventListener('change', calculateTotal);
document.getElementById('booking-hours').addEventListener('input', calculateTotal);

document.getElementById('booking-form').addEventListener('submit', (e) => {
e.preventDefault();
document.getElementById('booking-form').classList.add('hidden');
document.getElementById('booking-success').classList.remove('hidden');

setTimeout(() => {
  closeBookingModal();
  document.getElementById('booking-form').classList.remove('hidden');
  document.getElementById('booking-success').classList.add('hidden');
}, 3000);


});

calculateTotal();
}

function toggleService(id) {
if (selectedServices.includes(id)) {
selectedServices = selectedServices.filter(s => s !== id);
} else {
selectedServices.push(id);
}

EXTRA_SERVICES.forEach(s => {
const card = document.getElementById(service-card-${s.id});
if (selectedServices.includes(s.id)) {
card.className = "p-3 rounded-xl border border-[#D4AF37] bg-[#2B231D] text-amber-100 text-xs cursor-pointer flex items-center justify-between transition-all";
} else {
card.className = "p-3 rounded-xl border border-[#D4AF37]/20 bg-[#120F0D] text-amber-200/60 text-xs cursor-pointer flex items-center justify-between transition-all";
}
});

calculateTotal();
}

function calculateTotal() {
const roomId = document.getElementById('booking-room-select').value;
const hours = parseInt(document.getElementById('booking-hours').value) || 2;
const room = ROOMS.find(r => r.id === roomId) || ROOMS[0];

let total = room.price * hours;
selectedServices.forEach(sId => {
const serv = EXTRA_SERVICES.find(s => s.id === sId);
if (serv) total += serv.price;
});

document.getElementById('booking-total-price').innerText = ${total.toLocaleString()} ₽;
}

function openBookingModal(roomId = null) {
if (roomId) {
document.getElementById('booking-room-select').value = roomId;
calculateTotal();
}
document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
document.getElementById('booking-modal').classList.add('hidden');
}

// LIGHTBOX
function openLightbox(imgSrc) {
document.getElementById('lightbox-img').src = imgSrc;
document.getElementById('lightbox-modal').classList.remove('hidden');
}

function closeLightbox() {
document.getElementById('lightbox-modal').classList.add('hidden');
}

// YANDEX MAP API INTEGRATION
function initYandexMap() {
if (window.ymaps) {
window.ymaps.ready(() => {
const mapContainer = document.getElementById('yandex-map-container');
if (!mapContainer) return;

  const map = new window.ymaps.Map(mapContainer, {
    center: SAHARA_COORDS,
    zoom: 16,
    controls: ['zoomControl', 'fullscreenControl']
  }, {
    suppressMapOpenBlock: true
  });

  const placemark = new window.ymaps.Placemark(
    SAHARA_COORDS,
    {
      balloonContentHeader: '<div style="color:#000; font-weight:bold; font-family:serif;">САХАРА Luxury SPA</div>',
      balloonContentBody: '<div style="color:#333; font-size:12px;">г. Нижний Новгород, Нижегородский район<br/><b>Круглосуточно (24/7)</b></div>',
      balloonContentFooter: '<div style="color:#AA7C11; font-weight:bold; font-size:11px;">+7 (831) 250-14-94</div>',
      hintContent: 'Спа-клуб САХАРА'
    },
    {
      preset: 'islands#goldDotIconWithCaption',
      iconColor: '#D4AF37'
    }
  );

  map.geoObjects.add(placemark);
  placemark.balloon.open();
});


}
}

function openYandexRoute() {
const routeUrl = https://yandex.ru/maps/?rtext=~${SAHARA_COORDS[0]},${SAHARA_COORDS[1]}&rtt=auto;
window.open(routeUrl, '_blank');
}