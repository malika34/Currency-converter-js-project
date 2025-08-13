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
├── index.html — Main HTML file
├── style.css — CSS styles
├── script.js — JavaScript logic
├── assets/ — Images & icons (optional)
└── README.md — Project documentation

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

🚀 Setup & Installation
Clone the repository

```bash
git clone https://github.com/malika34/Currency-converter-js-project.git

```

1. Open `index.html` in your browser.
2. No server setup is required — this is a pure frontend project.
3. Start converting currencies 🎉

## 🎯 Learning Outcomes

Through this project, I learned:

- How to fetch real-time data from APIs
- Basics of working with API keys
- Practical integration of frontend and backend for real-world usage
- How to convert Figma designs into real HTML/CSS/JS
- How to fetch and display API data in the browser
- How to manipulate the DOM dynamically
- How to create a responsive design for multiple devices
- How to structure and document a frontend project
