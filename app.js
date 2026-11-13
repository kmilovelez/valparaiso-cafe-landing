/* ===================================================================
   VALPARAÍSO CAFÉ CO. - JAVASCRIPT CONTROLLER & STATE
   =================================================================== */

// Products Catalog Data (Sourced from Official Valparaíso Drive Records)
const PRODUCTS = [
  {
    id: 'cafe-la-maravilla-240g',
    title: 'Café de Especialidad La Maravilla 240g',
    category: 'cafe',
    badge: '85.74 SCA Certificado',
    price: 32000,
    desc: 'Cosechado a mano en las alturas de Valparaíso, Antioquia. Notas a panela dulce, naranja fresca, chocolate suave y flores de montaña.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: true,
    options: ['Grano Entero', 'Molienda Chemex / Filtro', 'Molienda Prensa Francesa', 'Molienda Espresso']
  },
  {
    id: 'cafe-la-maravilla-2500g',
    title: 'Bolsa Café de Especialidad 2.500g',
    category: 'cafe',
    badge: 'Edición Barista / Negocio',
    price: 170000,
    desc: 'Presentación institucional de 2.5 kg para amantes del café de especialidad, oficinas gourmet y cafeterías.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: true,
    options: ['Grano Entero', 'Molienda Filtro', 'Molienda Espresso']
  },
  {
    id: 'kit-chemex-completo',
    title: 'Kit Completo Chemex de Especialidad',
    category: 'kits',
    badge: 'Edición Compartir',
    price: 215000,
    desc: 'Cafetera Chemex de borosilicato con collar de madera noble y lazo de cuero, 2 pocillos térmicos de doble pared, Café La Maravilla 240g, filtros y caja de lujo.',
    img: 'assets/kit_chemex.webp',
    hasGrind: true,
    options: ['Molienda Media (Ideal Chemex)', 'Grano Entero']
  },
  {
    id: 'kit-prensa-francesa',
    title: 'Kit Prensa Francesa Artesanal',
    category: 'kits',
    badge: 'Cuerpo Cremoso',
    price: 145000,
    desc: 'Prensa francesa con émbolo en acero inoxidable y vaso de vidrio borosilicato, Café de Especialidad La Maravilla 240g molienda gruesa y caja de regalo.',
    img: 'assets/kit_prensa.webp',
    hasGrind: true,
    options: ['Molienda Gruesa (Prensa)', 'Grano Entero']
  },
  {
    id: 'kit-dripper-v60',
    title: 'Kit Dripper V60 + Filtros Cónicos',
    category: 'kits',
    badge: 'Taza Limpia & Cítrica',
    price: 155000,
    desc: 'Cono de goteo cerámico V60 color carbón mate, pack de filtros de alta retención, Café de Especialidad La Maravilla 240g y guía de extracción barista.',
    img: 'assets/kit_v60.webp',
    hasGrind: true,
    options: ['Molienda Media-Fina (V60)', 'Grano Entero']
  },
  {
    id: 'hervidor-cloud-1lt',
    title: 'Hervidor Cuello de Cisne Cloud 1.0L',
    category: 'accesorios',
    badge: 'Control de Flujo',
    price: 73200,
    desc: 'Tetera kettle en acero inoxidable con pico de precisión cuello de cisne ergonómico para vertido exacto en Chemex y V60.',
    img: 'assets/brand_artwork.webp',
    hasGrind: false
  },
  {
    id: 'gramera-digital-barista',
    title: 'Gramera Digital de Precisión con Cronómetro',
    category: 'accesorios',
    badge: 'Precisión 0.1g',
    price: 65700,
    desc: 'Báscula digital profesional para café con timer integrado para controlar ratio y tiempo de contacto en preparaciones de filtro y espresso.',
    img: 'assets/brand_artwork.webp',
    hasGrind: false
  }
];

// Shopping Cart State
let cart = [];

// Format COP currency
function formatCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

// Render Products Grid
function renderProducts(filter = 'todos') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = filter === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => {
    return `
      <div class="product-card" data-category="${p.category}">
        <div class="product-thumb-wrapper">
          <img src="${p.img}" alt="${p.title}" class="product-img" loading="lazy" />
          <span class="product-badge">${p.badge}</span>
        </div>
        <div class="product-body">
          <span class="product-category">${p.category}</span>
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.desc}</p>
          
          ${p.hasGrind ? `
            <div class="product-options-row">
              <select class="grind-select" id="grind-${p.id}">
                ${p.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
          ` : ''}

          <div class="product-footer">
            <div class="product-price">
              <span>COP</span>${formatCOP(p.price).replace('COP', '').trim()}
            </div>
            <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Agregar
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Add Item to Cart
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let grind = '';
  if (product.hasGrind) {
    const grindSelect = document.getElementById(`grind-${productId}`);
    if (grindSelect) {
      grind = grindSelect.value;
    }
  }

  const existingIndex = cart.findIndex(item => item.id === productId && item.grind === grind);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      grind: grind,
      qty: 1
    });
  }

  updateCartUI();
  openCartDrawer();
}

// Adjust Quantity
function updateQty(index, change) {
  if (cart[index]) {
    cart[index].qty += change;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  }
}

// Update Cart UI
function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const itemsContainer = document.getElementById('cart-items');
  const totalPriceElem = document.getElementById('cart-total-price');

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  if (totalPriceElem) {
    totalPriceElem.textContent = formatCOP(totalPrice);
  }

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p>Tu carrito está vacío.</p>
          <p style="font-size: 0.8rem; margin-top: 4px;">Selecciona café o kits para iniciar tu pedido.</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.title}</h4>
            ${item.grind ? `<div class="cart-item-variant">${item.grind}</div>` : ''}
            <div class="cart-item-price">${formatCOP(item.price * item.qty)}</div>
          </div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateQty(${idx}, -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${idx}, 1)">+</button>
          </div>
        </div>
      `).join('');
    }
  }
}

// Drawer Toggles
function openCartDrawer() {
  document.getElementById('cart-drawer')?.classList.add('active');
  document.getElementById('cart-overlay')?.classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.getElementById('cart-overlay')?.classList.remove('active');
}

// Checkout via WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío. Agrega algún producto antes de finalizar.');
    return;
  }

  const phone = '573002637978';
  let message = `*¡Hola Valparaíso Café Co.!* ☕🌿\n\nDeseo realizar el siguiente pedido a través de su página web:\n\n`;

  let total = 0;
  cart.forEach((item, i) => {
    const sub = item.price * item.qty;
    total += sub;
    message += `${i + 1}. *${item.title}*\n`;
    if (item.grind) message += `   • Molienda: ${item.grind}\n`;
    message += `   • Cantidad: ${item.qty} | Subtotal: ${formatCOP(sub)}\n\n`;
  });

  message += `*TOTAL A PAGAR: ${formatCOP(total)}*\n\n`;
  message += `¿Podrían indicarme la cuenta para transferencia (Bancolombia/Nequi) y tiempo de despacho a mi dirección? ¡Muchas gracias!`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// B2B Office Coffee Calculator
function calculateOfficeCoffee() {
  const peopleInput = document.getElementById('calc-people');
  const cupsPerPersonInput = document.getElementById('calc-cups');
  
  if (!peopleInput || !cupsPerPersonInput) return;

  const people = parseInt(peopleInput.value, 10);
  const cupsPerPerson = parseFloat(cupsPerPersonInput.value);

  document.getElementById('calc-people-val').textContent = `${people} personas`;
  document.getElementById('calc-cups-val').textContent = `${cupsPerPerson} tazas/día`;

  const dailyCups = Math.round(people * cupsPerPerson);
  const monthlyWorkDays = 22;
  const monthlyCups = dailyCups * monthlyWorkDays;
  // Approximately 8-9 grams per espresso/specialty coffee cup
  const kgNeeded = Math.ceil((monthlyCups * 8.5) / 1000);

  // Machine Recommendation Logic based on daily output
  let machineName = 'Saeco Lirika Plus';
  let machineCapacity = 'Ideal para hasta 50 cafés diarios';
  let machineDesc = 'Compacta, intuitiva, molino de cerámica, pantalla digital con código de colores.';
  
  if (dailyCups > 50 && dailyCups <= 110) {
    machineName = 'Saeco Aulika Focus';
    machineCapacity = 'Ideal para 50 a 110 cafés diarios';
    machineDesc = 'Doble caldera, one-touch cappuccino, depósito de 4L de agua y 1kg de grano.';
  } else if (dailyCups > 110) {
    machineName = 'Saeco Phetra Bean-to-Cup';
    machineCapacity = 'Ideal para más de 110 cafés diarios';
    machineDesc = 'Alta gama corporativa conectable a red hídrica, 8 bebidas programables (café, mocaccino, chocolate, té).';
  }

  // Cost estimates: Tarifa Plana includes machine, specialty coffee beans, maintenance
  // Average ~$1.000 COP per cup in comodato model vs ~$2.500+ commercial pod
  const estimatedMonthlyCOP = monthlyCups * 1100;
  const podCostEstimated = monthlyCups * 2600;
  const monthlySavings = podCostEstimated - estimatedMonthlyCOP;

  document.getElementById('calc-daily-cups').textContent = `${dailyCups} tazas/día`;
  document.getElementById('calc-monthly-cups').textContent = `${monthlyCups.toLocaleString('es-CO')} tazas`;
  document.getElementById('calc-kg-needed').textContent = `${kgNeeded} kg/mes de Café Especial`;
  document.getElementById('calc-recommended-name').textContent = machineName;
  document.getElementById('calc-recommended-cap').textContent = machineCapacity;
  document.getElementById('calc-recommended-desc').textContent = machineDesc;
  document.getElementById('calc-monthly-invest').textContent = formatCOP(estimatedMonthlyCOP);
  document.getElementById('calc-monthly-savings').textContent = formatCOP(monthlySavings);
}

// Request B2B Quote via WhatsApp
function quoteOfficeViaWhatsApp() {
  const people = document.getElementById('calc-people')?.value || '30';
  const cups = document.getElementById('calc-cups')?.value || '2';
  const daily = Math.round(people * cups);
  const machine = document.getElementById('calc-recommended-name')?.textContent || 'Saeco Aulika Focus';

  const phone = '573002637978';
  const message = `*¡Hola Juan Camilo / Valparaíso Café Co.!* ☕🏢\n\nEstoy interesado en una solución de *Café de Especialidad en Comodato* para nuestra empresa:\n\n• Equipo de trabajo: ${people} personas\n• Estimado de consumo: ~${daily} cafés al día\n• Máquina recomendada: *${machine}*\n\n¿Podrían brindarnos una asesoría comercial y coordinar una degustación en nuestras oficinas? ¡Muchas gracias!`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value;
  const phone = document.getElementById('contact-phone')?.value;
  const email = document.getElementById('contact-email')?.value;
  const type = document.getElementById('contact-type')?.value;
  const messageText = document.getElementById('contact-message')?.value;

  const targetPhone = '573002637978';
  const text = `*Nuevo Mensaje desde Web Valparaíso Café*\n\n• Nombre: ${name}\n• Teléfono: ${phone}\n• Email: ${email}\n• Tipo de consulta: ${type}\n• Mensaje: ${messageText}`;

  window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`, '_blank');
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  // Render products
  renderProducts();

  // Shop filter tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-category');
      renderProducts(cat);
    });
  });

  // Header scroll detection
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Office Calculator listener
  const peopleSlider = document.getElementById('calc-people');
  const cupsSlider = document.getElementById('calc-cups');
  if (peopleSlider && cupsSlider) {
    peopleSlider.addEventListener('input', calculateOfficeCoffee);
    cupsSlider.addEventListener('input', calculateOfficeCoffee);
    calculateOfficeCoffee(); // initial run
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(14, 10, 7, 0.98)';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid var(--color-border)';
      }
    });
  }
});
