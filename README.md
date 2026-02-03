# 📱 Cellphone Store

A minimal but realistic cellphone store web application built with vanilla HTML, CSS, and JavaScript. This project demonstrates a simple e-commerce interface with device catalog, customer management, and purchase tracking.

## 🚀 How to Run

1. **No installation required** - this project uses pure HTML/CSS/JS with no dependencies
2. Simply open `index.html` in any modern web browser
3. The application will load immediately and is fully functional

## ✨ Features

### Current Functionality (MVP)

1. **Device Catalog**
   - Browse 8 devices (phones and accessories)
   - View device details: name, brand, price, category, stock status
   - Visual placeholders using emoji icons
   - Responsive grid layout

2. **Customer Management**
   - List of 5 customers with tier status (Regular/VIP)
   - Click to select a customer
   - View customer details and statistics

3. **Purchase System**
   - Click "Buy Now" on any device to make a purchase
   - Purchase validation (must select customer, device must be in stock)
   - Real-time status messages for user feedback
   - Purchase records include: device name, price, and timestamp

4. **Purchase History**
   - View complete purchase history for selected customer
   - See total number of purchases
   - Calculate and display total amount spent
   - Chronological purchase list with details

5. **User Experience**
   - Clean, modern interface with gradient header
   - Responsive design (mobile and desktop)
   - Interactive hover effects
   - Disabled states for unavailable actions
   - Auto-hiding success/error messages

## 📁 Project Structure

```
cellphone-store/
├── index.html      # Main HTML structure
├── styles.css      # All styling and layout
├── script.js       # Application logic and data
└── README.md       # This file
```

## 🎯 Data Structure

### Devices
Each device contains:
- `id`: Unique identifier
- `name`: Device name
- `brand`: Manufacturer
- `price`: Price in USD
- `category`: iPhone/Android/Accessories
- `inStock`: Boolean availability
- `image`: Emoji placeholder

### Customers
Each customer contains:
- `id`: Unique identifier
- `fullName`: Customer's full name
- `tier`: Regular or VIP status
- `purchases`: Array of purchase records

### Purchases
Each purchase record contains:
- `deviceId`: Reference to purchased device
- `deviceName`: Name of device (for history display)
- `price`: Purchase price
- `date`: Timestamp of purchase

## 🔮 Future Improvements

This project is designed to support iterative development. Here are potential enhancements for future commits:

### Phase 1 - Enhanced Filtering & Sorting
- Add category filter dropdown (iPhone/Android/Accessories)
- Sort devices by price (low to high, high to low)
- Filter by stock availability
- Search devices by name or brand

### Phase 2 - Visual Enhancements
- Theme switcher (light/dark mode)
- Custom color schemes for different device categories
- Real device images (placeholder URLs)
- Animation transitions

### Phase 3 - Data Persistence
- Save purchases to localStorage
- Load previous purchase history on page refresh
- Export purchase history to CSV
- Import/export customer data

### Phase 4 - Advanced Features
- Shopping cart functionality
- Discount codes for VIP customers
- Device comparison tool
- Customer loyalty points system
- Purchase statistics dashboard
- Inventory management (reduce stock on purchase)

### Phase 5 - UI/UX Improvements
- Pagination for large device catalogs
- Confirmation modal before purchase
- Edit/delete purchase records
- Add new customers dynamically
- Device detail modal/popup

### Phase 6 - Reporting
- Sales reports by date range
- Best-selling devices
- Customer spending analytics
- Category performance charts

## 🛠️ Technical Notes

- **No frameworks**: Pure vanilla JavaScript for maximum simplicity
- **No build process**: Just open and run
- **In-memory storage**: All data is stored in JavaScript arrays (resets on page refresh)
- **Mobile responsive**: Works on phones, tablets, and desktops
- **Modern browser required**: Uses ES6+ features

## 📝 Development Tips

- All mock data is in `script.js` at the top of the file
- Add new devices by extending the `devices` array
- Add new customers by extending the `customers` array
- Status messages appear automatically for 3 seconds
- Device cards disable when no customer is selected or out of stock

## 🤝 Contributing

This project is structured to support incremental improvements through Git commits. Each feature addition should:
1. Be functional and tested
2. Maintain the existing code structure
3. Update this README with new features
4. Include clear commit messages

---

**Version:** 1.0.0 (MVP)  
**Last Updated:** February 2026