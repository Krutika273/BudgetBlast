// Wishlist Module

// DOM Elements
const wishlistGrid = document.getElementById('wishlistGrid');
const wishlistContainer = document.getElementById('wishlistContainer');
const clearWishlistBtn = document.getElementById('clearWishlistBtn');
const totalSavingsElement = document.getElementById('totalSavings');

// Event Listeners
if (clearWishlistBtn) {
    clearWishlistBtn.addEventListener('click', clearWishlist);
}

// Display wishlist items
function displayWishlist() {
    if (!wishlistGrid) return;
    
    const wishlist = getWishlist();
    const wishlistProducts = [];
    
    // Get all product details
    wishlist.forEach(productId => {
        const product = findProductById(productId);
        if (product) {
            wishlistProducts.push(product);
        }
    });
    
    // Display or show empty message
    if (wishlistProducts.length === 0) {
        wishlistContainer.innerHTML = `
            <h2 class="section-title">My Wishlist</h2>
            <div class="empty-wishlist">
                <p>Your wishlist is empty.</p>
                <p>Add products from the search page to compare prices and save money!</p>
                <a href="/search" class="btn">Browse Products</a>
            </div>
        `;
        return;
    }
    
    // Calculate total savings
    const totalSavings = calculateWishlistSavings();
    
    // Update summary
    if (totalSavingsElement) {
        totalSavingsElement.textContent = `₹${totalSavings}`;
    }
    
    // Clear and populate grid
    wishlistGrid.innerHTML = '';
    wishlistProducts.forEach(product => {
        const productCard = createProductCard(product);
        wishlistGrid.appendChild(productCard);
    });
}

// Clear entire wishlist
function clearWishlist() {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
        setWishlist([]);
        displayWishlist();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    if (wishlistGrid) {
        displayWishlist();
    }
});