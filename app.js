/* ===================================================================
   VALPARAÍSO CAFÉ CO. — APPLICATION CONTROLLER (v3.0)
   Architectural Editorial UI • Dynamic Catalog • B2B Simulator • Cart
   =================================================================== */

const WHATSAPP_NUMBER = '573104141838';

const PRODUCTS = [
  // --- CAFÉ DE ORIGEN ---
  {
    id: 'cafe-clasico-240g',
    title: 'La Maravilla — Edición Clásica (240g)',
    category: 'cafe',
    categoryLabel: 'Café de Finca • Lavado',
    badge: '85.74 SCA',
    price: 32000,
    unit: 'Bolsa valvulada 240g',
    desc: 'Nuestro lote insignia cultivado entre 1.300 y 1.800 msnm. Dulzor limpio a panela campesina, chocolate oscuro, vainilla y acidez cítrica de naranja madura.',
    img: 'assets/bolsa_grano.webp',
    hasGrind: true,
    options: [
      'Grano Entero (Recomendado)',
      'Molienda Media (Chemex / V60 / Filtro)',
      'Molienda Gruesa (Prensa Francesa / Olla)',
      'Molienda Fina (Espresso / Moka)'
    ]
  },
  {
    id: 'cafe-natural-240g',
    title: 'Edición Naranja — Proceso Natural (240g)',
    category: 'cafe',
    categoryLabel: 'Café de Finca • Natural',
    badge: 'Secado al Sol',
    price: 36000,
    unit: 'Bolsa valvulada 240g',
    desc: 'Secado lento dentro de su propia cereza bajo el sol de Valparaíso. Notas pronunciadas a frutos amarillos, miel de caña, naranja confitada y final vinoso.',
    img: 'assets/patio_secado.webp',
    hasGrind: true,
    options: [
      'Grano Entero (Recomendado)',
      'Molienda Media (Chemex / V60)',
      'Molienda Gruesa (Prensa Francesa)'
    ]
  },
  {
    id: 'cafe-frutos-rojos-240g',
    title: 'Edición Selección — Frutos Rojos (240g)',
    category: 'cafe',
    categoryLabel: 'Microlote Especial',
    badge: 'Cosecha Selectiva',
    price: 38000,
    unit: 'Bolsa valvulada 240g',
    desc: 'Cerezas recolectadas en el punto máximo de grados Brix en Vereda Playa Rica. Fragancia intensa a flor de café, fresa silvestre, cereza madura y cacao fino.',
    img: 'assets/cerezas_cultivo.webp',
    hasGrind: true,
    options: [
      'Grano Entero (Recomendado)',
      'Molienda Media (Métodos de Filtro)',
      'Molienda Fina (Espresso)'
    ]
  },
  {
    id: 'cafe-institucional-2500g',
    title: 'Reserva Barista & Oficina — 2.500g (5 lb)',
    category: 'cafe',
    categoryLabel: 'Formato Institucional',
    badge: 'Tueste Semanal',
    price: 170000,
    unit: 'Bolsa profesional 2.5 kg ($34.000/lb)',
    desc: 'Presentación de alto rendimiento con menos de 7 días de tueste para máquinas automáticas Saeco, cafeterías de especialidad y hogares de consumo frecuente.',
    img: 'assets/empaque_detalle_front.webp',
    hasGrind: true,
    options: [
      'Grano Entero (Máquinas Saeco / Molino)',
      'Molienda Media Filtro',
      'Molienda Fina Espresso'
    ]
  },

  // --- KITS DE RITUAL "COMPARTIR" ---
  {
    id: 'kit-chemex-ejecutivo',
    title: 'Kit “Compartir” Opción A — Chemex Ejecutivo',
    category: 'kits',
    categoryLabel: 'Caja de Lujo Negro Mate',
    badge: 'Edición Insignia',
    price: 215000,
    unit: 'Set completo de 5 piezas',
    desc: 'Cafetera Chemex 600ml con collar de madera y cuero, 2 vasos térmicos de doble pared (150ml), filtros de papel, Café Valparaíso 240g y estuche rígido.',
    img: 'assets/kit_chemex.webp',
    hasGrind: true,
    options: [
      'Molienda Media (Calibrada Chemex)',
      'Grano Entero'
    ]
  },
  {
    id: 'kit-chemex-purista',
    title: 'Kit “Compartir” Opción B — Chemex & Origen',
    category: 'kits',
    categoryLabel: 'Caja de Lujo Negro Mate',
    badge: 'Ritual de Filtro',
    price: 165000,
    unit: 'Set de extracción',
    desc: 'Cafetera Chemex de borosilicato 600ml con collar de madera noble, paquete de filtros de alta retención, Café Valparaíso 240g y caja de presentación.',
    img: 'assets/kit_chemex.webp',
    hasGrind: true,
    options: [
      'Molienda Media (Calibrada Chemex)',
      'Grano Entero'
    ]
  },
  {
    id: 'kit-v60-barista',
    title: 'Kit “Compartir” Opción E — Dripper V60',
    category: 'kits',
    categoryLabel: 'Caja de Lujo Negro Mate',
    badge: 'Claridad Aromática',
    price: 155000,
    unit: 'Set de vertido',
    desc: 'Cono de extracción V60 en acabado negro mate con espirales internas, filtros cónicos de papel, Café Valparaíso 240g y caja de regalo.',
    img: 'assets/kit_v60.webp',
    hasGrind: true,
    options: [
      'Molienda Media (Calibrada V60)',
      'Grano Entero'
    ]
  },
  {
    id: 'kit-prensa-francesa',
    title: 'Kit “Compartir” Opción D — Prensa Francesa',
    category: 'kits',
    categoryLabel: 'Caja de Lujo Negro Mate',
    badge: 'Inmersión & Cuerpo',
    price: 145000,
    unit: 'Set de inmersión',
    desc: 'Prensa francesa de 600ml en acero inoxidable y vidrio borosilicato, Café de Especialidad Valparaíso 240g y caja rígida de colección.',
    img: 'assets/kit_prensa.webp',
    hasGrind: true,
    options: [
      'Molienda Gruesa (Calibrada Prensa)',
      'Grano Entero'
    ]
  },

  // --- INSTRUMENTOS DE BARISMO ---
  {
    id: 'hervidor-cuello-cisne',
    title: 'Kettle Cuello de Cisne — 1.0 Litro',
    category: 'accesorios',
    categoryLabel: 'Instrumento de Precisión',
    badge: 'Acero Inoxidable',
    price: 73200,
    unit: 'Capacidad 1.0L',
    desc: 'Tetera de vertido controlado con caño de ganso ergonómico para lograr una turbulencia uniforme en Chemex y V60.',
    img: 'assets/matec3.webp',
    hasGrind: false
  },
  {
    id: 'molino-manual-acero',
    title: 'Molino Manual de Muelas Cónicas',
    category: 'accesorios',
    categoryLabel: 'Molienda Fresca',
    badge: 'Calibre Ajustable',
    price: 68000,
    unit: 'Cuerpo en acero',
    desc: 'Muelas ajustables punto a punto desde molienda fina hasta gruesa para preservar los aceites esenciales justo antes de preparar.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: false
  },
  {
    id: 'gramera-digital-timer',
    title: 'Báscula Barista Digital con Cronómetro',
    category: 'accesorios',
    categoryLabel: 'Control de Ratio',
    badge: 'Sensibilidad 0.1g',
    price: 54000,
    unit: 'Báscula + Temporizador',
    desc: 'Permite replicar con exactitud milimétrica la proporción de gramos de café por mililitros de agua y el tiempo de contacto.',
    img: 'assets/brand_artwork.webp',
    hasGrind: false
  }
];

let cart = [];
let currentCategory = 'todos';

// Format COP currency
function formatCOP(value) {
  return '$' + value.toLocaleString('es-CO');
}

// Render Catalog Grid
function renderProducts(category = 'todos') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = category === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => {
    const grindSelectHTML = product.hasGrind
      ? `
        <div class="product-options">
          <label class="option-label" for="grind-${product.id}">Tipo de Molienda</label>
          <select id="grind-${product.id}" class="grind-select">
            ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
          </select>
        </div>
      `
      : '';

    return `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${product.img}" alt="${product.title}" class="product-img" loading="lazy">
          <span class="product-badge">${product.badge}</span>
        </div>
        <div class="product-body">
          <span class="product-category">${product.categoryLabel}</span>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.desc}</p>
          ${grindSelectHTML}
          <div class="product-footer">
            <div>
              <span class="product-price">${formatCOP(product.price)}</span>
              <span class="product-price-unit">${product.unit}</span>
            </div>
            <button class="btn btn-outline btn-sm" onclick="addToCart('${product.id}')">
              Agregar +
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Add to Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const grindEl = document.getElementById(`grind-${productId}`);
  const selectedOption = grindEl ? grindEl.value : 'Estándar';
  const cartItemKey = `${productId}__${selectedOption}`;

  const existing = cart.find(item => item.key === cartItemKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key: cartItemKey,
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      option: selectedOption,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`Agregado: ${product.title}`);
}

function updateQty(key, delta) {
  const idx = cart.findIndex(item => item.key === key);
  if (idx === -1) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const container = document.getElementById('cart-items-container');
  const totalEl = document.getElementById('cart-total-price');

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (badge) {
    badge.textContent = totalItems;
  }

  if (totalEl) {
    totalEl.textContent = `${formatCOP(totalPrice)} COP`;
  }

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="padding: 3rem 0; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
        Tu bolsa está vacía. Selecciona café recién tostado o un kit de regalo para comenzar.
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.title}" class="cart-item-img">
      <div>
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-meta">${item.option}</div>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="updateQty('${item.key}', -1)" aria-label="Disminuir cantidad">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty('${item.key}', 1)" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-primary);">
        ${formatCOP(item.price * item.qty)}
      </div>
    </div>
  `).join('');
}

function openCartDrawer() {
  document.getElementById('cart-backdrop')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cart-backdrop')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.remove('open');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

// WhatsApp Checkout & Quotes
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Agrega al menos un producto a tu bolsa');
    return;
  }

  const lines = cart.map(item =>
    `• ${item.qty}x ${item.title} (${item.option}) — ${formatCOP(item.price * item.qty)}`
  );
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const text = [
    'Hola Valparaíso Café Co., deseo realizar el siguiente pedido desde el sitio web:',
    '',
    ...lines,
    '',
    `Total estimado: ${formatCOP(total)} COP`,
    'Quedo atento(a) a los datos de pago y despacho.'
  ].join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function quoteCorporateGifts() {
  const text = 'Hola Valparaíso Café Co., me interesa cotizar un lote corporativo personalizado de Kits "Compartir" con el logo de nuestra empresa.';
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function quoteOfficeViaWhatsApp(modality) {
  const text = `Hola Juan Camilo, nos interesa recibir información y propuesta para nuestra empresa en la modalidad: ${modality}.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

// B2B Office Consumption Simulator
function updateB2BCalculator() {
  const empInput = document.getElementById('calc-employees');
  const cupsInput = document.getElementById('calc-cups');
  const daysInput = document.getElementById('calc-days');
  if (!empInput || !cupsInput || !daysInput) return;

  const employees = parseInt(empInput.value, 10);
  const cupsPerDay = parseFloat(cupsInput.value);
  const daysPerMonth = parseInt(daysInput.value, 10);

  document.getElementById('employees-val').textContent = `${employees} personas`;
  document.getElementById('cups-val').textContent = `${cupsPerDay.toFixed(1)} tazas`;
  document.getElementById('days-val').textContent = `${daysPerMonth} días`;

  const totalCups = Math.round(employees * cupsPerDay * daysPerMonth);
  // 8g per cup average (approx 125 cups per kg)
  const totalKilos = (totalCups * 8) / 1000;
  // Official 2025 rate: $68.000 COP per kg ($34.000 per lb in 5lb bags)
  const estimatedCost = Math.round(totalKilos * 68000);

  document.getElementById('res-total-cups').textContent = totalCups.toLocaleString('es-CO');
  document.getElementById('res-kilos').textContent = `${totalKilos.toFixed(1)} kg`;
  document.getElementById('res-cost').textContent = `${formatCOP(estimatedCost)} COP / mes`;

  const machineNameEl = document.getElementById('res-machine-name');
  const machineDescEl = document.getElementById('res-machine-desc');

  if (totalCups < 750) {
    machineNameEl.textContent = 'Saeco Lirika Plus';
    machineDescEl.textContent = 'Compacta e ideal para equipos de hasta 20 personas. Molienda cerámica integrada y vaporizador para bebidas con leche.';
  } else if (totalCups <= 1800) {
    machineNameEl.textContent = 'Saeco Aulika Evo Focus';
    machineDescEl.textContent = 'Doble circuito hidráulico, capuccinador automático One-Touch y tolva de alta capacidad. Ideal para oficinas en modalidad Comodato.';
  } else {
    machineNameEl.textContent = 'Saeco Phedra Evo Cappuccino';
    machineDescEl.textContent = 'Estación semi-industrial de alto tráfico para corporativos y coworkings. Dispensa espresso de grano fresco, cappuccino y chocolate.';
  }
}

function sendCalculatorQuoteToWhatsApp() {
  const emp = document.getElementById('calc-employees')?.value || 25;
  const totalCups = document.getElementById('res-total-cups')?.textContent || '1.100';
  const kilos = document.getElementById('res-kilos')?.textContent || '8.8 kg';
  const machine = document.getElementById('res-machine-name')?.textContent || 'Saeco Aulika Evo Focus';
  const cost = document.getElementById('res-cost')?.textContent || '$612.000 COP / mes';

  const text = [
    'Hola Valparaíso Café Co., realicé la simulación B2B en el sitio web para nuestra oficina:',
    '',
    `• Equipo: ${emp} personas`,
    `• Consumo estimado: ${totalCups} tazas/mes (${kilos})`,
    `• Equipo sugerido: ${machine}`,
    `• Presupuesto estimado suministro: ${cost}`,
    '',
    'Quisiera agendar una prueba de café o recibir propuesta formal.'
  ].join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('todos');
  updateCartUI();
  updateB2BCalculator();

  // Category Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'todos';
      renderProducts(currentCategory);
    });
  });

  // Calculator Sliders
  ['calc-employees', 'calc-cups', 'calc-days'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateB2BCalculator);
    }
  });

  // Mobile Menu
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('mobile-open'));
    });
  }
});
