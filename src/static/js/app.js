// Product Store Demo JavaScript
class ProductStore {
    constructor() {
        this.apiBase = '';
        this.products = [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadProducts();
    }

    bindEvents() {
        // Add product form
        document.getElementById('add-product-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addProduct();
        });

        // Edit product form
        document.getElementById('edit-product-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateProduct();
        });

        // Modal close events
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal('edit-modal');
        });

        document.getElementById('cancel-edit').addEventListener('click', () => {
            this.closeModal('edit-modal');
        });

        document.getElementById('close-delete-modal').addEventListener('click', () => {
            this.closeModal('delete-modal');
        });

        document.getElementById('cancel-delete').addEventListener('click', () => {
            this.closeModal('delete-modal');
        });

        document.getElementById('confirm-delete').addEventListener('click', () => {
            this.confirmDelete();
        });

        // Message close events
        document.getElementById('close-error').addEventListener('click', () => {
            this.hideMessage('error-message');
        });

        document.getElementById('close-success').addEventListener('click', () => {
            this.hideMessage('success-message');
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });
    }

    async loadProducts() {
        this.showLoading();
        try {
            const response = await fetch(`${this.apiBase}/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.products = await response.json();
            this.renderProducts();
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            this.showError('Failed to load products: ' + error.message);
        }
    }

    async addProduct() {
        const form = document.getElementById('add-product-form');
        const formData = new FormData(form);
        const productData = {
            name: formData.get('name').trim(),
            description: formData.get('description').trim()
        };

        if (!productData.name) {
            this.showError('Product name is required');
            return;
        }

        this.showLoading();
        try {
            const response = await fetch(`${this.apiBase}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const newProduct = await response.json();
            this.products.push(newProduct);
            this.renderProducts();
            form.reset();
            this.hideLoading();
            this.showSuccess('Product added successfully!');
        } catch (error) {
            this.hideLoading();
            this.showError('Failed to add product: ' + error.message);
        }
    }

    async updateProduct() {
        const productId = document.getElementById('edit-product-id').value;
        const name = document.getElementById('edit-product-name').value.trim();
        const description = document.getElementById('edit-product-description').value.trim();

        if (!name) {
            this.showError('Product name is required');
            return;
        }

        const productData = { name, description };

        this.showLoading();
        try {
            const response = await fetch(`${this.apiBase}/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const updatedProduct = await response.json();
            const index = this.products.findIndex(p => p.id === productId);
            if (index !== -1) {
                this.products[index] = updatedProduct;
            }
            this.renderProducts();
            this.closeModal('edit-modal');
            this.hideLoading();
            this.showSuccess('Product updated successfully!');
        } catch (error) {
            this.hideLoading();
            this.showError('Failed to update product: ' + error.message);
        }
    }

    async deleteProduct(productId) {
        this.showLoading();
        try {
            const response = await fetch(`${this.apiBase}/products/${productId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            this.products = this.products.filter(p => p.id !== productId);
            this.renderProducts();
            this.closeModal('delete-modal');
            this.hideLoading();
            this.showSuccess('Product deleted successfully!');
        } catch (error) {
            this.hideLoading();
            this.showError('Failed to delete product: ' + error.message);
        }
    }

    renderProducts() {
        const container = document.getElementById('products-container');
        const noProducts = document.getElementById('no-products');

        if (this.products.length === 0) {
            container.innerHTML = '';
            container.appendChild(noProducts);
            return;
        }

        container.innerHTML = '';
        this.products.forEach(product => {
            const productCard = this.createProductCard(product);
            container.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${this.escapeHtml(product.name)}</h3>
            <p>${this.escapeHtml(product.description || 'No description')}</p>
            <div class="product-actions">
                <button class="btn btn-secondary" onclick="productStore.editProduct('${product.id}')">Edit</button>
                <button class="btn btn-danger" onclick="productStore.confirmDeleteProduct('${product.id}')">Delete</button>
            </div>
        `;
        return card;
    }

    editProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            this.showError('Product not found');
            return;
        }

        document.getElementById('edit-product-id').value = product.id;
        document.getElementById('edit-product-name').value = product.name;
        document.getElementById('edit-product-description').value = product.description || '';
        this.showModal('edit-modal');
    }

    confirmDeleteProduct(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            this.showError('Product not found');
            return;
        }

        document.getElementById('delete-product-name').textContent = product.name;
        document.getElementById('confirm-delete').onclick = () => this.deleteProduct(productId);
        this.showModal('delete-modal');
    }

    confirmDelete() {
        // This will be dynamically set by confirmDeleteProduct
    }

    showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        document.body.style.overflow = '';
    }

    showLoading() {
        document.getElementById('loading').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loading').classList.add('hidden');
    }

    showError(message) {
        document.getElementById('error-text').textContent = message;
        document.getElementById('error-message').classList.remove('hidden');
        setTimeout(() => {
            this.hideMessage('error-message');
        }, 5000);
    }

    showSuccess(message) {
        document.getElementById('success-text').textContent = message;
        document.getElementById('success-message').classList.remove('hidden');
        setTimeout(() => {
            this.hideMessage('success-message');
        }, 3000);
    }

    hideMessage(messageId) {
        document.getElementById(messageId).classList.add('hidden');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when the page loads
let productStore;
document.addEventListener('DOMContentLoaded', () => {
    productStore = new ProductStore();
});