// API Base URL
const API_BASE_URL = '/products';

// DOM Elements
const productForm = document.getElementById('product-form');
const productsList = document.getElementById('products-list');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.cancel-btn');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
    setupProductEventDelegation();
});

// Setup Event Listeners
function setupEventListeners() {
    productForm.addEventListener('submit', handleAddProduct);
    editForm.addEventListener('submit', handleUpdateProduct);
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    editModal.addEventListener('click', (e) => {
        if (e.target === editModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && editModal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Setup product event delegation
function setupProductEventDelegation() {
    productsList.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-action]');
        if (!button) return;
        
        const action = button.dataset.action;
        const productId = button.dataset.id;
        
        if (action === 'edit') {
            openEditModal(productId);
        } else if (action === 'delete') {
            showDeleteConfirmation(productId);
        }
    });
}

// Load all products
async function loadProducts() {
    try {
        showLoading(true);
        hideError();

        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        showError('Failed to load products. Please try again.');
        console.error('Error loading products:', error);
    } finally {
        showLoading(false);
    }
}

// Display products in the grid
function displayProducts(products) {
    if (!products || products.length === 0) {
        productsList.innerHTML = `
            <div class="empty-state">
                <h3>No products yet</h3>
                <p>Add your first product using the form above!</p>
            </div>
        `;
        return;
    }

    productsList.innerHTML = products.map(product => {
        const escapedId = escapeHtml(product.id);
        const escapedName = escapeHtml(product.name);
        const escapedDescription = escapeHtml(product.description || 'No description');
        
        return `
            <div class="product-card" data-id="${escapedId}">
                <h3>${escapedName}</h3>
                <p>${escapedDescription}</p>
                <div class="product-card-actions">
                    <button class="btn btn-edit" data-action="edit" data-id="${escapedId}" aria-label="Edit ${escapedName}">
                        Edit
                    </button>
                    <button class="btn btn-danger" data-action="delete" data-id="${escapedId}" aria-label="Delete ${escapedName}">
                        Delete
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Handle add product
async function handleAddProduct(e) {
    e.preventDefault();
    
    const formData = new FormData(productForm);
    const product = {
        name: formData.get('name'),
        description: formData.get('description')
    };

    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        productForm.reset();
        await loadProducts();
        showSuccess('Product added successfully!');
    } catch (error) {
        showError('Failed to add product. Please try again.');
        console.error('Error adding product:', error);
    }
}

// Open edit modal
async function openEditModal(productId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${encodeURIComponent(productId)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const product = await response.json();
        
        document.getElementById('edit-product-id').value = product.id;
        document.getElementById('edit-product-name').value = product.name;
        document.getElementById('edit-product-description').value = product.description || '';
        
        editModal.classList.add('show');
        document.getElementById('edit-product-name').focus();
    } catch (error) {
        showError('Failed to load product details. Please try again.');
        console.error('Error loading product:', error);
    }
}

// Close modal
function closeModal() {
    editModal.classList.remove('show');
    editForm.reset();
}

// Handle update product
async function handleUpdateProduct(e) {
    e.preventDefault();
    
    const productId = document.getElementById('edit-product-id').value;
    const formData = new FormData(editForm);
    const product = {
        name: formData.get('name'),
        description: formData.get('description')
    };

    try {
        const response = await fetch(`${API_BASE_URL}/${encodeURIComponent(productId)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        closeModal();
        await loadProducts();
        showSuccess('Product updated successfully!');
    } catch (error) {
        showError('Failed to update product. Please try again.');
        console.error('Error updating product:', error);
    }
}

// Show delete confirmation
function showDeleteConfirmation(productId) {
    // Find the product card using a safer approach
    const productCards = Array.from(productsList.querySelectorAll('.product-card'));
    const productCard = productCards.find(card => card.dataset.id === productId);
    const productName = productCard?.querySelector('h3')?.textContent || 'this product';
    
    if (confirm(`Are you sure you want to delete "${productName}"? This action cannot be undone.`)) {
        deleteProduct(productId);
    }
}

// Delete product
async function deleteProduct(productId) {
    try {
        const response = await fetch(`${API_BASE_URL}/${encodeURIComponent(productId)}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        await loadProducts();
        showSuccess('Product deleted successfully!');
    } catch (error) {
        showError('Failed to delete product. Please try again.');
        console.error('Error deleting product:', error);
    }
}

// Utility functions
function showLoading(show) {
    loadingDiv.style.display = show ? 'block' : 'none';
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function hideError() {
    errorDiv.style.display = 'none';
}

function showSuccess(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = message;
    successDiv.setAttribute('role', 'status');
    successDiv.setAttribute('aria-live', 'polite');
    
    // Insert at the top of the main content
    const main = document.querySelector('main');
    main.insertBefore(successDiv, main.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
