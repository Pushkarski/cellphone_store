// ========== DATA MODELS ==========

// Devices catalog with mock data
const devices = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        brand: "Apple",
        price: 999,
        category: "iPhone",
        inStock: true,
        image: "📱"
    },
    {
        id: 2,
        name: "iPhone 14",
        brand: "Apple",
        price: 799,
        category: "iPhone",
        inStock: true,
        image: "📱"
    },
    {
        id: 3,
        name: "Samsung Galaxy S24",
        brand: "Samsung",
        price: 899,
        category: "Android",
        inStock: true,
        image: "📱"
    },
    {
        id: 4,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        price: 899,
        category: "Android",
        inStock: false,
        image: "📱"
    },
    {
        id: 5,
        name: "OnePlus 12",
        brand: "OnePlus",
        price: 699,
        category: "Android",
        inStock: true,
        image: "📱"
    },
    {
        id: 6,
        name: "AirPods Pro",
        brand: "Apple",
        price: 249,
        category: "Accessories",
        inStock: true,
        image: "🎧"
    },
    {
        id: 7,
        name: "Samsung Galaxy Buds",
        brand: "Samsung",
        price: 149,
        category: "Accessories",
        inStock: true,
        image: "🎧"
    },
    {
        id: 8,
        name: "Wireless Charger",
        brand: "Anker",
        price: 39,
        category: "Accessories",
        inStock: false,
        image: "🔌"
    }
];

// Customers with purchase history
const customers = [
    {
        id: 1,
        fullName: "Alice Johnson",
        tier: "VIP",
        purchases: []
    },
    {
        id: 2,
        fullName: "Bob Smith",
        tier: "Regular",
        purchases: []
    },
    {
        id: 3,
        fullName: "Carol Williams",
        tier: "VIP",
        purchases: []
    },
    {
        id: 4,
        fullName: "David Brown",
        tier: "Regular",
        purchases: []
    },
    {
        id: 5,
        fullName: "Emma Davis",
        tier: "Regular",
        purchases: []
    }
];

// ========== STATE MANAGEMENT ==========

let selectedCustomerId = null;

// ========== UI RENDERING FUNCTIONS ==========

// Render all devices in the catalog
function renderDevices() {
    const grid = document.getElementById('devicesGrid');
    grid.innerHTML = '';
    
    devices.forEach(device => {
        const card = document.createElement('div');
        card.className = 'device-card';
        
        card.innerHTML = `
            <div class="device-image">${device.image}</div>
            <h3>${device.name}</h3>
            <p class="device-brand">${device.brand}</p>
            <span class="device-category">${device.category}</span>
            <p class="device-price">$${device.price}</p>
            <p class="stock-status ${device.inStock ? 'in-stock' : 'out-of-stock'}">
                ${device.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </p>
            <button 
                class="buy-btn" 
                onclick="handlePurchase(${device.id})"
                ${!device.inStock || selectedCustomerId === null ? 'disabled' : ''}
            >
                Buy Now
            </button>
        `;
        
        grid.appendChild(card);
    });
}

// Render all customers in the list
function renderCustomers() {
    const list = document.getElementById('customersList');
    list.innerHTML = '';
    
    customers.forEach(customer => {
        const item = document.createElement('div');
        item.className = `customer-item ${customer.id === selectedCustomerId ? 'selected' : ''}`;
        item.onclick = () => selectCustomer(customer.id);
        
        item.innerHTML = `
            <div class="customer-name">${customer.fullName}</div>
            <span class="customer-tier ${customer.tier.toLowerCase()}">${customer.tier}</span>
        `;
        
        list.appendChild(item);
    });
}

// Render customer details
function renderCustomerDetails() {
    const detailsDiv = document.getElementById('customerDetails');
    
    if (selectedCustomerId === null) {
        detailsDiv.innerHTML = `
            <h3>Customer Details</h3>
            <p class="no-selection">No customer selected</p>
        `;
        return;
    }
    
    const customer = customers.find(c => c.id === selectedCustomerId);
    const totalPurchases = customer.purchases.length;
    const totalSpent = customer.purchases.reduce((sum, p) => sum + p.price, 0);
    
    detailsDiv.innerHTML = `
        <h3>Customer Details</h3>
        <div class="details-content">
            <p><strong>Name:</strong> ${customer.fullName}</p>
            <p><strong>Tier:</strong> ${customer.tier}</p>
            <p><strong>Total Purchases:</strong> ${totalPurchases}</p>
            <p><strong>Total Spent:</strong> $${totalSpent.toFixed(2)}</p>
        </div>
    `;
}

// Render purchase history
function renderPurchaseHistory() {
    const historyDiv = document.getElementById('purchaseHistory');
    
    if (selectedCustomerId === null) {
        historyDiv.innerHTML = `
            <h3>Purchase History</h3>
            <div class="history-content">
                <p class="no-selection">Select a customer to view purchase history</p>
            </div>
        `;
        return;
    }
    
    const customer = customers.find(c => c.id === selectedCustomerId);
    
    if (customer.purchases.length === 0) {
        historyDiv.innerHTML = `
            <h3>Purchase History</h3>
            <div class="history-content">
                <p class="no-selection">No purchases yet</p>
            </div>
        `;
        return;
    }
    
    const totalPurchases = customer.purchases.length;
    const totalSpent = customer.purchases.reduce((sum, p) => sum + p.price, 0);
    
    let tableHTML = `
        <h3>Purchase History</h3>
        <div class="history-content">
            <table class="purchases-table">
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    customer.purchases.forEach(purchase => {
        tableHTML += `
            <tr>
                <td>${purchase.deviceName}</td>
                <td>$${purchase.price}</td>
                <td>${purchase.date}</td>
            </tr>
        `;
    });
    
    tableHTML += `
                </tbody>
            </table>
            <div class="totals">
                <p><strong>Total Purchases:</strong> ${totalPurchases}</p>
                <p><strong>Total Spent:</strong> $${totalSpent.toFixed(2)}</p>
            </div>
        </div>
    `;
    
    historyDiv.innerHTML = tableHTML;
}

// ========== EVENT HANDLERS ==========

// Select a customer
function selectCustomer(customerId) {
    selectedCustomerId = customerId;
    renderCustomers();
    renderCustomerDetails();
    renderPurchaseHistory();
    renderDevices(); // Re-render to update button states
}

// Handle device purchase
function handlePurchase(deviceId) {
    // Validation: check if customer is selected
    if (selectedCustomerId === null) {
        showStatus('Please select a customer first', 'error');
        return;
    }
    
    // Find the device
    const device = devices.find(d => d.id === deviceId);
    
    // Validation: check if device exists and is in stock
    if (!device) {
        showStatus('Device not found', 'error');
        return;
    }
    
    if (!device.inStock) {
        showStatus('Device is out of stock', 'error');
        return;
    }
    
    // Find the customer
    const customer = customers.find(c => c.id === selectedCustomerId);
    
    // Create purchase record
    const purchase = {
        deviceId: device.id,
        deviceName: device.name,
        price: device.price,
        date: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    // Add purchase to customer's history
    customer.purchases.push(purchase);
    
    // Update UI
    renderCustomerDetails();
    renderPurchaseHistory();
    showStatus(`Purchase added: ${device.name} for ${customer.fullName}`, 'success');
}

// Show status message
function showStatus(message, type) {
    const statusDiv = document.getElementById('statusMessage');
    statusDiv.textContent = message;
    statusDiv.className = `status-message show ${type}`;
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        statusDiv.className = 'status-message';
    }, 3000);
}

// ========== INITIALIZATION ==========

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderDevices();
    renderCustomers();
    renderCustomerDetails();
    renderPurchaseHistory();
});