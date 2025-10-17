// Gestion du panier d'achats

// Récupération du panier depuis localStorage
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Sauvegarde du panier dans localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

// Ajouter un produit au panier
function addToCart(productId) {
  // Vérifier si productsData existe (page boutique)
  if (typeof productsData === 'undefined') {
    window.location.href = 'boutique.html';
    return;
  }
  
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  
  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart(cart);
  
  // Animation feedback
  showAddToCartFeedback();
}

// Retirer un produit du panier
function removeFromCart(productId) {
  const cart = getCart();
  const filtered = cart.filter(item => item.id !== productId);
  saveCart(filtered);
}

// Modifier la quantité
function updateQuantity(productId, change) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart(cart);
  }
}

// Vider le panier
function clearCart() {
  localStorage.removeItem('cart');
  updateCartUI();
}

// Calculer le total
function calculateTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Mise à jour de l'interface du panier
function updateCartUI() {
  const cart = getCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Mise à jour du compteur dans la navbar
  const navCartCount = document.getElementById('navCartCount');
  if (navCartCount) {
    navCartCount.textContent = cartCount;
  }
  
  // Mise à jour du panier latéral (si présent)
  const cartItems = document.getElementById('cartItems');
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Votre panier est vide</p>';
    updateCartTotal();
    return;
  }
  
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${item.price.toFixed(2).replace('.', ',')} €</div>
        <div class="cart-item-quantity">
          <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
    </div>
  `).join('');
  
  updateCartTotal();
}

// Mise à jour du total du panier
function updateCartTotal() {
  const total = calculateTotal();
  const cartTotal = document.getElementById('cartTotal');
  
  if (cartTotal) {
    cartTotal.textContent = total.toFixed(2).replace('.', ',') + ' €';
  }
  
  // Désactiver le bouton commander si panier vide
  const btnCheckout = document.querySelector('.btn-checkout');
  if (btnCheckout) {
    btnCheckout.disabled = getCart().length === 0;
  }
}

// Animation feedback ajout au panier
function showAddToCartFeedback() {
  // Créer une notification temporaire
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--sage);
    color: var(--earth);
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    z-index: 10000;
    animation: slideIn 0.3s ease;
    font-weight: 600;
  `;
  notification.textContent = '✓ Produit ajouté au panier';
  
  // Ajouter l'animation CSS
  if (!document.getElementById('cart-animation-style')) {
    const style = document.createElement('style');
    style.id = 'cart-animation-style';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Retirer après 2 secondes
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Gestion du clic sur le panier dans la navbar
document.addEventListener('DOMContentLoaded', () => {
  const navCart = document.querySelector('.navbar-cart');
  if (navCart) {
    navCart.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Sur mobile, ouvrir le panier latéral
      if (window.innerWidth < 1200) {
        toggleCart();
      } else {
        // Sur desktop, scroller vers le panier
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar) {
          cartSidebar.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
  
  // Fermer le panier mobile au clic sur overlay
  const cartSidebar = document.getElementById('cartSidebar');
  if (cartSidebar) {
    document.addEventListener('click', (e) => {
      if (window.innerWidth < 1200 && 
          cartSidebar.classList.contains('active') && 
          !cartSidebar.contains(e.target) && 
          !e.target.closest('.navbar-cart')) {
        toggleCart();
      }
    });
  }
  
  // Initialiser l'affichage du panier
  updateCartUI();
});

// Export des fonctions pour utilisation globale
if (typeof window !== 'undefined') {
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.updateQuantity = updateQuantity;
  window.clearCart = clearCart;
  window.calculateTotal = calculateTotal;
  window.getCart = getCart;
}