// Search & Filter Module

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const minPriceFilter = document.getElementById('minPriceFilter');
const maxPriceFilter = document.getElementById('maxPriceFilter');
const searchBtn = document.getElementById('searchBtn');
const sortByNykaaBtn = document.getElementById('sortByNykaa');
const sortByTiraBtn = document.getElementById('sortByTira');
const sortBySavingsBtn = document.getElementById('sortBySavings');
const productGrid = document.getElementById('productGrid');
const clearFiltersBtn = document.getElementById('clearFilters');

// Current state
let currentProducts = [...products];
let currentSort = '';

// Event Listeners
if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
}

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

if (categoryFilter) {
    // Populate category filter
    populateCategoryFilter();
    categoryFilter.addEventListener('change', handleSearch);
}

if (minPriceFilter) {
    minPriceFilter.addEventListener('change', handleSearch);
}

if (maxPriceFilter) {
    maxPriceFilter.addEventListener('change', handleSearch);
}

if (sortByNykaaBtn) {
    sortByNykaaBtn.addEventListener('click', () => {
        setSortMethod('nykaa');
        handleSearch();
    });
}

if (sortByTiraBtn) {
    sortByTiraBtn.addEventListener('click', () => {
        setSortMethod('tira');
        handleSearch();
    });
}

if (sortBySavingsBtn) {
    sortBySavingsBtn.addEventListener('click', () => {
        setSortMethod('savings');
        handleSearch();
    });
}

if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearAllFilters);
}

// Populate category filter
function populateCategoryFilter() {
    if (!categoryFilter) return;
    
    const categories = getAllCategories();
    
    // Add default option
    let options = `<option value="">All Categories</option>`;
    
    // Add category options
    categories.forEach(category => {
        options += `<option value="${category}">${category}</option>`;
    });
    
    categoryFilter.innerHTML = options;
}

// Clear all filters
function clearAllFilters() {
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (minPriceFilter) minPriceFilter.value = '';
    if (maxPriceFilter) maxPriceFilter.value = '';
    
    // Reset sort buttons
    if (sortByNykaaBtn) sortByNykaaBtn.classList.remove('active');
    if (sortByTiraBtn) sortByTiraBtn.classList.remove('active');
    if (sortBySavingsBtn) sortBySavingsBtn.classList.remove('active');
    
    currentSort = '';
    
    // Show all products
    displayProducts(products);
}

// Set sort method
function setSortMethod(method) {
    currentSort = method;
    
    // Update UI
    if (sortByNykaaBtn) sortByNykaaBtn.classList.toggle('active', method === 'nykaa');
    if (sortByTiraBtn) sortByTiraBtn.classList.toggle('active', method === 'tira');
    if (sortBySavingsBtn) sortBySavingsBtn.classList.toggle('active', method === 'savings');
}

// Calculate savings for a product
function calculateSavings(product) {
    return Math.abs(product.priceNykaa - product.priceTira);
}

// Search functionality
function handleSearch() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const category = categoryFilter ? categoryFilter.value : '';
    const minPrice = minPriceFilter && minPriceFilter.value ? parseInt(minPriceFilter.value) : 0;
    const maxPrice = maxPriceFilter && maxPriceFilter.value ? parseInt(maxPriceFilter.value) : Infinity;
    
    // Filter products based on search criteria
    const filteredProducts = products.filter(product => {
        // Match text query
        const matchesQuery = !query || 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query);
        
        // Match category
        const matchesCategory = !category || product.category === category;
        
        // Match price range (using minimum price from either platform)
        const productMinPrice = Math.min(product.priceNykaa, product.priceTira);
        const matchesPrice = productMinPrice >= minPrice && productMinPrice <= maxPrice;
        
        return matchesQuery && matchesCategory && matchesPrice;
    });
    
    // Sort products if needed
    let sortedProducts = [...filteredProducts];
    
    if (currentSort === 'nykaa') {
        sortedProducts.sort((a, b) => a.priceNykaa - b.priceNykaa);
    } else if (currentSort === 'tira') {
        sortedProducts.sort((a, b) => a.priceTira - b.priceTira);
    } else if (currentSort === 'savings') {
        sortedProducts.sort((a, b) => calculateSavings(b) - calculateSavings(a));
    }
    
    // Update current products
    currentProducts = sortedProducts;
    
    // Display products
    displayProducts(sortedProducts);
}

// Display products in grid
function displayProducts(productsToShow) {
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-message">
                <p>No products found matching your search criteria.</p>
                <button class="btn" onclick="clearAllFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    if (productGrid) {
        displayProducts(products);
    }
});