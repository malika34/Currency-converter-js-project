# 💱 Currency Converter

A fully responsive **Currency Converter** web application built with **HTML, CSS, and JavaScript**, designed and implemented based on a Figma mockup.  
The app fetches **real-time exchange rates** from an API and allows users to convert between different currencies instantly.

---

## 📌 Features

- 🌍 Convert between **any two world currencies**
- 🔄 Swap button to switch "From" and "To" currencies instantly
- 📱 Fully responsive design for **mobile, tablet, and desktop**
- ⚡ Fetches **real-time exchange rates** using an API
- 🎨 UI converted from **Figma to HTML, CSS, JS** with pixel-perfect accuracy
- 🖥️ Dropdown currency selection with **short currency codes only** (e.g., USD, EUR, PKR)

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Styling and responsiveness
- **JavaScript (ES6)** – API integration and DOM manipulation
- **Exchange Rate API** – For real-time currency data
- **Figma** – Original design source

---

## 📂 Project Structure

currency-converter/
│
├── index.html # Main HTML file
├── style.css # All CSS styles
├── script.js # Main JavaScript logic
├── # Images/icons (if any)
└── README.md # Project documentation

---

## 🔍 How It Works

### 1️⃣ HTML (index.html)

- Contains the **layout** for:
  - Two `<select>` dropdowns for currency codes (short form: USD, EUR, PKR, etc.)
  - Two `<input>` fields for entering amounts
  - A **Swap** button to reverse currencies
  - A **Convert** button to fetch the conversion rate and show results

### 2️⃣ CSS (style.css)

- Applied **Figma-to-code styling**:
  - Colors, spacing, fonts exactly as in the design
  - Flexbox/Grid for responsive layout
  - Hover and focus effects for interactive elements

### 3️⃣ JavaScript (script.js)

- Fetches data from the **Exchange Rate API**
- Populates currency dropdowns with **short codes**
- Handles conversion calculation in real-time
- Updates the DOM to show converted values
- Adds functionality to **Swap** button

---

## 🌐 API Used

**API Name:** [ExchangeRate API](https://api.currencyapi.com/v3/latest?apikey=cur_live_rIdYU8TrqQDGpLHDSoBPINSDgohYjnB5aFa0xDqj)

**Endpoint Example:**

```bash
https://api.exchangerate.host/latest?base=USD&symbols=EUR
```
