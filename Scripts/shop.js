// Données des produits
const productsData = [
  {
    id: 1,
    name: "Guide Faune de Lozère",
    category: "livres",
    price: 24.90,
    image: "https://www.editions-mediterraneus.fr/wp-content/uploads/2021/11/Guide_nature_mer_page-oiseuax.jpg?w=400",
    description: "Guide complet illustré de 350 pages sur la faune lozérienne"
  },
  {
    id: 2,
    name: "Jumelles d'observation 10x42",
    category: "equipement",
    price: 89.90,
    image: "https://www.cdiscount.com/pdt2/7/1/4/1/400x400/chr9331562900714/rw/jumelles-10x42-jumelles-d-oiseaux-jumelles-d-obs.jpg?w=400",
    description: "Jumelles professionnelles pour l'observation de la faune"
  },
  {
    id: 3,
    name: "Carte topographique Lozère",
    category: "livres",
    price: 12.90,
    image: "https://histoire-itinerante.fr/wp-content/uploads/2022/02/carte_relief_lozere.jpg.webp?w=400",
    description: "Carte détaillée au 1:100000 avec sentiers de randonnée"
  },
  {
    id: 4,
    name: "T-Shirt Vautour Fauve",
    category: "vetements",
    price: 19.90,
    image: "https://srv.latostadora.com/image/vautour-fauve---portrait--id:38a37953-8856-4cb4-aaec-e56097459de9;s:M_L7;b:f2f2f2;w:420;f:f;i:135623170549713562397.jpg?w=400",
    description: "T-shirt bio coton avec illustration originale du vautour"
  },
  {
    id: 5,
    name: "Mug céramique Loup",
    category: "souvenirs",
    price: 14.90,
    image: "https://i.etsystatic.com/11498788/r/il/a3659c/5609083367/il_570xN.5609083367_mwar.jpg?w=400",
    description: "Mug artisanal avec illustration du loup gris"
  },
  {
    id: 6,
    name: "Longue-vue 20-60x80",
    category: "equipement",
    price: 249.90,
    image: "https://img.kentfaith.de/catalog/products/de/GW33.0006/A/GW33.0006-A3.jpg?w=400",
    description: "Longue-vue professionnelle avec trépied inclus"
  },
  {
    id: 7,
    name: "Atlas des Oiseaux de France",
    category: "livres",
    price: 34.90,
    image: "https://gite-digne.com/wp-content/uploads/2022/04/fiche-ornithologie-especes-milieu-9.jpg?w=400",
    description: "Atlas ornithologique complet avec 500+ espèces"
  },
  {
    id: 8,
    name: "Carnet de terrain imperméable",
    category: "equipement",
    price: 15.90,
    image: "https://www.rose-bunker.fr/6400-tm_large_default/carnet-de-note-etanche-notebook-de-voyage.jpg?w=400",
    description: "Carnet waterproof pour vos observations nature"
  },
  {
    id: 9,
    name: "Poster éducatif Rapaces",
    category: "souvenirs",
    price: 9.90,
    image: "https://boutique.lpo.fr/media/cache/sylius_shop_product_original/65/72/a91af6c33af34493b83019bf14d3.jpg?w=400",
    description: "Poster format A2 illustrant les rapaces de Lozère"
  },
  {
    id: 10,
    name: "Casquette brodée Cerf",
    category: "vetements",
    price: 16.90,
    image: "https://i.etsystatic.com/59008836/r/il/816125/6875619737/il_fullxfull.6875619737_mpy5.jpg?w=400",
    description: "Casquette ajustable avec broderie cerf élaphe"
  },
  {
    id: 11,
    name: "Kit d'identification traces",
    category: "equipement",
    price: 22.90,
    image: "https://m.media-amazon.com/images/I/51Ep5WJfhTL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_PIRIOFOURANDHALF-medium,BottomLeft,30,-20_ZJPHNwYW4gZm9yZWdyb3VuZD0iIzU2NTk1OSIgZm9udD0iQW1hem9uRW1iZXIgNTAiID4yMzwvc3Bhbj4=,500,900,420,420,0,0_QL100_.jpg?w=400",
    description: "Guide plastifié des empreintes et traces d'animaux"
  },
  {
    id: 12,
    name: "Lampe frontale LED",
    category: "equipement",
    price: 29.90,
    image: "https://contents.mediadecathlon.com/p2572902/k$a0e7a3eb5cd91899e0175b1e11c960e4/lampe-frontale-rechargeable-300-lumens-hl500-usb-v3-turquoise.jpg?format=auto&quality=40&f=520x520?w=400",
    description: "Lampe rechargeable 300 lumens pour observation nocturne"
  },
  {
    id: 13,
    name: "Sweat à capuche Mouflon",
    category: "vetements",
    price: 39.90,
    image: "https://i.etsystatic.com/22460592/r/il/172b91/6015019468/il_570xN.6015019468_bvh4.jpg?w=400",
    description: "Sweat bio épais avec sérigraphie mouflon de Corse"
  },
  {
    id: 14,
    name: "Magnet collection Faune (set de 6)",
    category: "souvenirs",
    price: 12.90,
    image: "https://atelier-nature-territoires.com/cdn/shop/files/Kit_magnetique_-_Riviere_1.jpg?v=1744798081?w=400",
    description: "Set de 6 magnets illustrés avec espèces emblématiques"
  },
  {
    id: 15,
    name: "Sac à dos randonnée 25L",
    category: "equipement",
    price: 59.90,
    image: "https://media.e.leclerc/3700684101426_7?fit=fit&op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&wid=450&hei=450?w=400",
    description: "Sac ergonomique avec poche hydratation"
  },
  {
    id: 16,
    name: "Encyclopédie Reptiles d'Europe",
    category: "livres",
    price: 28.90,
    image: "https://m.media-amazon.com/images/I/81tR1RvieIL._UF1000,1000_QL80_.jpg?w=400",
    description: "Guide complet des reptiles avec 200+ espèces décrites"
  },
  {
    id: 17,
    name: "Gourde isotherme gravée",
    category: "souvenirs",
    price: 24.90,
    image: "Images/gourdePA48.png",
    description: "Gourde inox 750ml avec gravure logo ParcoursAnimal48"
  },
  {
    id: 18,
    name: "peluche raton laveur",
    category: "souvenirs",
    price: 12.90,
    image: "Images/peluchePA48.jpg?w=400",
    description: "Peluche trop mignonne à adopter."
  }
];

let currentFilter = 'all';

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
  updateCartUI();
  
  // Gestion du toggle menu mobile
  const navToggle = document.getElementById('navbarToggle');
  const navMenu = document.querySelector('.navbar-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  
  // Fermeture menu au clic sur un lien
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
    });
  });
});

// Affichage des produits
function displayProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filtered = currentFilter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === currentFilter);
  
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-body">
        <div class="product-category">${getCategoryLabel(product.category)}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price.toFixed(2).replace('.', ',')} €</span>
          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            Ajouter
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filtrage des produits
function filterProducts() {
  const selectedRadio = document.querySelector('input[name="category"]:checked');
  currentFilter = selectedRadio ? selectedRadio.value : 'all';
  displayProducts();
}

// Labels des catégories
function getCategoryLabel(category) {
  const labels = {
    'livres': '📚 Livres',
    'equipement': '🔭 Équipement',
    'souvenirs': '🎁 Souvenirs',
    'vetements': '👕 Vêtements'
  };
  return labels[category] || category;
}

// Toggle panier mobile
function toggleCart() {
  const cartSidebar = document.getElementById('cartSidebar');
  if (cartSidebar) {
    cartSidebar.classList.toggle('active');
  }
}

// Ouvrir le checkout
function openCheckout() {
  const cart = getCart();
  if (cart.length === 0) return;
  
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;
  
  const total = calculateTotal();
  document.getElementById('checkoutSubtotal').textContent = total.toFixed(2).replace('.', ',') + ' €';
  document.getElementById('checkoutTotal').textContent = total.toFixed(2).replace('.', ',') + ' €';
  
  modal.classList.add('active');
}

// Fermer le checkout
function closeCheckout() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Traitement du paiement
function processPayment(event) {
  event.preventDefault();
  
  // Validation simple
  const form = event.target;
  if (!form.checkValidity()) {
    return;
  }
  
  // Simulation de traitement
  closeCheckout();
  
  // Génération numéro de commande
  const orderNumber = 'PA48-' + Date.now().toString().slice(-8);
  document.getElementById('orderNumber').textContent = orderNumber;
  
  // Affichage confirmation
  const confirmModal = document.getElementById('confirmationModal');
  if (confirmModal) {
    confirmModal.classList.add('active');
  }
  
  // Vider le panier
  clearCart();
  updateCartUI();
  
  // Reset formulaire
  form.reset();
}

// Fermer confirmation
function closeConfirmation() {
  const modal = document.getElementById('confirmationModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Format de la carte bancaire
document.getElementById('cardNumber')?.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\s/g, '');
  let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
  e.target.value = formatted;
});

// Format date expiration
document.getElementById('cardExpiry')?.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }
  e.target.value = value;
});

// Empêcher lettres dans CVV
document.getElementById('cardCVV')?.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '');
});