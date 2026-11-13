/* ===================================================================
   VALPARAÍSO CAFÉ CO. - MASTER CONTROLLER & APPLICATION STATE
   Sourced from Official Google Drive Records & Commercial Proposals
   =================================================================== */

// Master Products Catalog
const PRODUCTS = [
  // --- CAFÉ DE ESPECIALIDAD (3 EDICIONES DE ETIQUETA) ---
  {
    id: 'cafe-valparaiso-clasico-240g',
    title: 'Café de Especialidad La Maravilla — Edición Clásica (240g)',
    category: 'cafe',
    badge: '85.74 SCA • 1.600 msnm',
    price: 32000,
    desc: 'Notas a panela acaramelada, chocolate oscuro, vainilla y flores de montaña. Tueste medio fresco, acidez cítrica brillante y cuerpo cremoso.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: true,
    options: ['Grano Entero (Recomendado)', 'Molienda Media (Chemex / V60 / Goteo)', 'Molienda Gruesa (Prensa Francesa / Olla)', 'Molienda Fina (Espresso / Moka)']
  },
  {
    id: 'cafe-valparaiso-natural-240g',
    title: 'Café Proceso Natural — Edición Naranja (240g)',
    category: 'cafe',
    badge: 'Proceso Natural • Frutal',
    price: 36000,
    desc: 'Secado lento en cereza bajo el sol de Valparaíso. Exuberante dulzor natural a frutas amarillas, naranja madura, miel de caña y toque vinoso.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: true,
    options: ['Grano Entero (Recomendado)', 'Molienda Media (Filtro / V60)', 'Molienda Gruesa (Prensa Francesa)']
  },
  {
    id: 'cafe-valparaiso-frutos-rojos-240g',
    title: 'Café Edición Selección — Frutos Rojos (240g)',
    category: 'cafe',
    badge: 'Edición Limitada • Finca La Maravilla',
    price: 38000,
    desc: 'Lote microlote cosechado en el punto máximo de maduración. Notas marcadas a fresa silvestre, cereza, cacao fino y acidez brillante balanceada.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: true,
    options: ['Grano Entero (Recomendado)', 'Molienda Media (Chemex / Filtro)', 'Molienda Fina (Espresso)']
  },
  {
    id: 'cafe-valparaiso-5lb-2500g',
    title: 'Bolsa Institucional 2.500g (5 Libras) — Tueste Semanal',
    category: 'cafe',
    badge: 'Tarifa Oficial 2025 • Barista',
    price: 170000,
    desc: 'Presentación de 2.5 kg en grano para amantes del café de especialidad, cafeterías de autor y oficinas con consumo frecuente.',
    img: 'assets/prevalentware_beans.webp',
    hasGrind: true,
    options: ['Grano Entero (Para Molino / Máquinas Saeco)', 'Molienda Media Filtro', 'Molienda Espresso']
  },

  // --- KITS CORPORATIVOS & DE EXPERIENCIA "COMPARTIR" ---
  {
    id: 'kit-opcion-a-chemex-completo',
    title: 'Opción A: Kit Completo Ejecutivo Chemex "Compartir"',
    category: 'kits',
    badge: 'La Experiencia Definitiva',
    price: 215000,
    desc: 'Cafetera Chemex facetada de borosilicato 600ml con collar de madera y lazo de cuero, 2 pocillos térmicos de doble pared 150ml, filtros de papel, Café Valparaíso 240g y caja de lujo microcorrugado negro mate.',
    img: 'assets/kit_chemex.webp',
    hasGrind: true,
    options: ['Molienda Media (Ideal Chemex)', 'Grano Entero']
  },
  {
    id: 'kit-opcion-b-chemex-sin-pocillos',
    title: 'Opción B: Kit Chemex + Filtros',
    category: 'kits',
    badge: 'Puristas del Filtro',
    price: 165000,
    desc: 'Cafetera Chemex 600ml con collar en madera noble, paquete de filtros de alta retención, Café de Especialidad Valparaíso 240g y caja rígida de regalo "Compartir".',
    img: 'assets/kit_chemex.webp',
    hasGrind: true,
    options: ['Molienda Media (Chemex)', 'Grano Entero']
  },
  {
    id: 'kit-opcion-d-prensa-francesa',
    title: 'Opción D: Kit Prensa Francesa 600ml',
    category: 'kits',
    badge: 'Cuerpo & Sedosidad',
    price: 145000,
    desc: 'Prensa francesa con émbolo en acero inoxidable y vaso de vidrio borosilicato, Café de Especialidad Valparaíso 240g molienda gruesa y caja de regalo negra mate.',
    img: 'assets/kit_prensa.webp',
    hasGrind: true,
    options: ['Molienda Gruesa (Prensa Francesa)', 'Grano Entero']
  },
  {
    id: 'kit-opcion-e-dripper-v60',
    title: 'Opción E: Kit Dripper V60 Barista + Filtros',
    category: 'kits',
    badge: 'Taza Limpia & Aromática',
    price: 155000,
    desc: 'Cono de extracción cerámico V60 color carbón mate, filtros cónicos especiales de papel no blanqueado, Café Valparaíso 240g y caja de regalo de lujo.',
    img: 'assets/kit_v60.webp',
    hasGrind: true,
    options: ['Molienda Media (V60)', 'Grano Entero']
  },

  // --- ACCESORIOS DE BARISMO ---
  {
    id: 'hervidor-cuello-cisne',
    title: 'Hervidor Cuello de Cisne Cloud 1.0L',
    category: 'accesorios',
    badge: 'Precisión Barista',
    price: 73200,
    desc: 'Tetera kettle en acero inoxidable grado alimentario con caño de ganso ergonómico para verter en espiral con control milimétrico de flujo.',
    img: 'assets/brand_artwork.webp',
    hasGrind: false
  },
  {
    id: 'gramera-digital-barista',
    title: 'Gramera Digital de Precisión con Cronómetro Integrado',
    category: 'accesorios',
    badge: 'Precisión 0.1g',
    price: 65700,
    desc: 'Báscula profesional para barismo con timer incorporado para medir ratio café/agua (1:15 a 1:18) y tiempos de infusión precisos.',
    img: 'assets/brand_artwork.webp',
    hasGrind: false
  },
  {
    id: 'pocillos-doble-pared',
    title: 'Set de 2 Pocillos de Vidrio Doble Pared (150ml)',
    category: 'accesorios',
    badge: 'Aislamiento Térmico',
    price: 42000,
    desc: 'Vidrio térmico borosilicato que mantiene la temperatura perfecta del café sin calentar las manos al sostenerlo.',
    img: 'assets/kit_chemex.webp',
    hasGrind: false
  }
];

// Shopping Cart State
let cart = [];

// Format COP Currency
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
              <select class="grind-select" id="grind-${p.id}" aria-label="Seleccionar molienda">
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
  let message = `*¡Hola Valparaíso Café Co.!* ☕🌿\n\nDeseo realizar el siguiente pedido a través de su página web oficial:\n\n`;

  let total = 0;
  cart.forEach((item, i) => {
    const sub = item.price * item.qty;
    total += sub;
    message += `${i + 1}. *${item.title}*\n`;
    if (item.grind) message += `   • Molienda: ${item.grind}\n`;
    message += `   • Cantidad: ${item.qty} | Subtotal: ${formatCOP(sub)}\n\n`;
  });

  message += `*TOTAL A PAGAR: ${formatCOP(total)}*\n\n`;
  message += `Por favor indíquenme los datos para transferencia (Bancolombia / Nequi) y tiempo de despacho a mi dirección. ¡Muchas gracias!`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// B2B Office Coffee Calculator (Enhanced with Official Saeco Specs)
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
  const kgNeeded = Math.ceil((monthlyCups * 8.5) / 1000);

  let machineName = 'Saeco Lirika Plus';
  let machineCapacity = 'Ideal para hasta 60 cafés diarios';
  let machineDesc = 'Molino de muelas cerámicas, pantalla intuitiva tipo semáforo, 500g grano y 2.5L de agua.';
  
  if (dailyCups > 60 && dailyCups <= 120) {
    machineName = 'Saeco Aulika Focus';
    machineCapacity = 'Ideal para 60 a 120 cafés diarios';
    machineDesc = 'Doble caldera y doble bomba, One-Touch Cappuccino automático, 4L de agua y 1kg de grano.';
  } else if (dailyCups > 120) {
    machineName = 'Saeco Phedra Bean-to-Cup';
    machineCapacity = 'Alta demanda (+120 cafés/día y eventos)';
    machineDesc = 'Conexión a red hídrica, 8 selecciones programables (Espresso, Americano, Cappuccino, Latte, Mocaccino, Chocolate y Té).';
  }

  // Cost estimates: Tarifa Plana ~$1.000 COP/cup vs ~$2.800 COP/commercial capsule
  const estimatedMonthlyCOP = monthlyCups * 1000;
  const capsuleCostEstimated = monthlyCups * 2800;
  const monthlySavings = capsuleCostEstimated - estimatedMonthlyCOP;

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
function quoteOfficeViaWhatsApp(customPlan = null) {
  const people = document.getElementById('calc-people')?.value || '35';
  const cups = document.getElementById('calc-cups')?.value || '2';
  const daily = Math.round(people * cups);
  const machine = customPlan || document.getElementById('calc-recommended-name')?.textContent || 'Saeco Aulika Focus';

  const phone = '573002637978';
  const message = `*¡Hola Juan Camilo / Valparaíso Café Co.!* ☕🏢\n\nEstoy interesado en una propuesta de *Café de Especialidad para Empresas*:\n\n• Modalidad: ${customPlan ? customPlan : 'Comodato Tarifa Plana Todo Incluido'}\n• Equipo de trabajo: ${people} personas\n• Estimado de consumo: ~${daily} cafés al día\n• Máquina de interés: *${machine}*\n\n¿Podríamos agendar una degustación en nuestra sede o conocer la cotización formal? ¡Muchas gracias!`;

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Quote Event Catering Station
function quoteEventStation() {
  const phone = '573002637978';
  const message = `*¡Hola Valparaíso Café Co.!* ☕🎪\n\nDeseo cotizar el servicio de *Estación de Café para Eventos / Feria Corporativa*:\n\n• Incluye: Máquina superautomática Saeco de molienda al instante, Café de origen Valparaíso, vasos biodegradables 4oz/7oz, mezcladores ecológicos y endulzante natural.\n\n¿Podrían indicarme disponibilidad y detalles para nuestra fecha?`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Quote Custom Corporate Gift Boxes (Kits Compartir)
function quoteCorporateGifts() {
  const phone = '573002637978';
  const message = `*¡Hola Juan Camilo / Valparaíso Café Co.!* 🎁☕\n\nQuisiera cotizar un lote del *Kit Corporativo de Café "Compartir"* personalizado para nuestra empresa (Opciones Chemex / Prensa Francesa / V60 con logo en caja y etiqueta).\n\n¿Podrían enviarme el catálogo corporativo con escala de precios por volumen?`;
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
  const text = `*Nuevo Contacto desde Sitio Web Valparaíso Café*\n\n• Nombre: ${name}\n• Teléfono: ${phone}\n• Email: ${email}\n• Tipo de Solicitud: ${type}\n• Mensaje: ${messageText}`;

  window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`, '_blank');
}

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  // Filter tabs
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
    calculateOfficeCoffee();
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
