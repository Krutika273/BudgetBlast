// Authentication Module
const AUTH_KEY = 'budgetblast_auth';

// DOM Elements
const authContainer = document.getElementById('authContainer');
const loginForm = document.getElementById('loginForm');
const toggleRegister = document.getElementById('toggleRegister');
const nameGroup = document.getElementById('nameGroup');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const navbar = document.querySelector('.navbar');
const logoutBtn = document.getElementById('logoutBtn');
const userGreeting = document.getElementById('userGreeting');
const searchContainer = document.getElementById('searchContainer');

// Auth state
let isLoginMode = true;
let currentUser = null;

// Event Listeners
if (loginForm) {
    loginForm.addEventListener('submit', handleAuth);
}

if (toggleRegister) {
    toggleRegister.addEventListener('click', toggleAuthMode);
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
}

// Function to toggle between login and register modes
function toggleAuthMode(e) {
    e.preventDefault();
    isLoginMode = !isLoginMode;
    
    // Update form UI
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    submitBtn.textContent = isLoginMode ? 'Login' : 'Register';
    toggleRegister.textContent = isLoginMode ? 'New user? Register here' : 'Already have an account? Login here';
    
    // Toggle name field visibility
    if (nameGroup) {
        nameGroup.classList.toggle('hidden', isLoginMode);
    }
    
    // Clear form and error messages
    clearFormErrors();
}

// Handle auth form submission (login or register)
function handleAuth(e) {
    e.preventDefault();
    clearFormErrors();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Basic validation
    let hasError = false;
    if (!email) {
        showInputError(emailInput, 'Email is required');
        hasError = true;
    } else if (!isValidEmail(email)) {
        showInputError(emailInput, 'Please enter a valid email');
        hasError = true;
    }
    
    if (!password) {
        showInputError(passwordInput, 'Password is required');
        hasError = true;
    } else if (password.length < 6) {
        showInputError(passwordInput, 'Password must be at least 6 characters');
        hasError = true;
    }
    
    if (hasError) return;
    
    if (isLoginMode) {
        // Login logic
        const storedUsers = JSON.parse(localStorage.getItem('budgetblast_users') || '[]');
        const user = storedUsers.find(u => u.email === email && u.password === password);
        
        if (user) {
            loginUser(user);
        } else {
            showFormError('Invalid email or password');
        }
    } else {
        // Register logic
        const name = nameInput.value.trim();
        
        if (!name) {
            showInputError(nameInput, 'Name is required');
            return;
        }
        
        const storedUsers = JSON.parse(localStorage.getItem('budgetblast_users') || '[]');
        
        // Check if email already exists
        if (storedUsers.some(u => u.email === email)) {
            showInputError(emailInput, 'Email already registered');
            return;
        }
        
        // Create new user
        const newUser = { id: Date.now(), name, email, password };
        storedUsers.push(newUser);
        localStorage.setItem('budgetblast_users', JSON.stringify(storedUsers));
        
        // Log in the new user
        loginUser(newUser);
    }
}

// Login user and update UI
function loginUser(user) {
    // Save auth state
    currentUser = {
        id: user.id,
        name: user.name,
        email: user.email
    };
    
    localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
    
    // Update UI
    if (authContainer) authContainer.classList.add('hidden');
    if (navbar) navbar.classList.add('active');
    if (searchContainer) searchContainer.classList.remove('hidden');
    if (userGreeting) userGreeting.textContent = `Hello, ${user.name}!`;
    
    // If we're on index page, redirect to search
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        window.location.href = '/search';
    }
}

// Logout user
function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    currentUser = null;
    
    // Redirect to home page
    window.location.href = '/';
}

// Check auth status on page load
function checkAuth() {
    const savedUser = localStorage.getItem(AUTH_KEY);
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        
        // Update UI based on auth status
        if (authContainer) authContainer.classList.add('hidden');
        if (navbar) navbar.classList.add('active');
        if (searchContainer) searchContainer.classList.remove('hidden');
        if (userGreeting) userGreeting.textContent = `Hello, ${currentUser.name}!`;
        
        // If we're on the index page and already logged in, redirect to search
        if ((window.location.pathname === '/' || window.location.pathname.includes('index.html')) && 
            !window.location.pathname.includes('search') && 
            !window.location.pathname.includes('wishlist')) {
            window.location.href = '/search';
        }
    } else {
        // Not logged in, redirect to home if trying to access protected pages
        if (window.location.pathname.includes('search') || window.location.pathname.includes('wishlist')) {
            window.location.href = '/';
        }
    }
}

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showInputError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    formGroup.appendChild(error);
    input.classList.add('error-input');
}

function showFormError(message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    error.style.marginBottom = '1rem';
    loginForm.insertBefore(error, loginForm.firstChild);
}

function clearFormErrors() {
    const errors = loginForm.querySelectorAll('.error');
    errors.forEach(error => error.remove());
    
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error-input'));
}

// Initialize auth check
document.addEventListener('DOMContentLoaded', checkAuth);