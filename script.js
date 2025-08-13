// ================== DOM ELEMENTS ==================
const amountInput = document.querySelector(".row input"); // first input
const convertedInput = document.querySelectorAll(".row input")[1]; // second input
const fromSelect = document.querySelectorAll(".currency-select select")[0];
const toSelect = document.querySelectorAll(".currency-select select")[1];
const exchangeRateText = document.querySelector(".exchange-rate span");
const switchBtn = document.querySelector(".switch-icon");

const fromFlag = document.querySelectorAll(".currency-select img")[0];
const toFlag = document.querySelectorAll(".currency-select img")[1];

// ================== API CONFIG ==================
const API_KEY = "cur_live_rIdYU8TrqQDGpLHDSoBPINSDgohYjnB5aFa0xDqj";
const API_URL = "https://api.currencyapi.com/v3/latest";

// Currency code → country flag mapping
const FLAGS = {
  USD: "us",
  EUR: "eu",
  GBP: "gb",
  PKR: "pk",
  INR: "in",
  AED: "ae",
  AUD: "au",
  CAD: "ca",
  SGD: "sg",
  JPY: "jp",
  CNY: "cn",
  CHF: "ch",
  SAR: "sa",
  TRY: "tr",
  NZD: "nz",
  MYR: "my",
  THB: "th",
  IDR: "id",
  BDT: "bd",
  HKD: "hk",
};

// ================== FUNCTIONS ==================

// Update flag image based on currency code
function setFlag(img, code) {
  const countryCode = (FLAGS[code] || code.slice(0, 2)).toLowerCase();
  img.src = `https://flagcdn.com/w40/${countryCode}.png`;
  img.alt = code;
}

// Remove commas/spaces & convert to number
function parseAmount(value) {
  return parseFloat(value.replace(/[,\s]/g, ""));
}

// Fetch and convert currency
async function convertCurrency() {
  const amount = parseAmount(amountInput.value);
  const from = fromSelect.value.toUpperCase();
  const to = toSelect.value.toUpperCase();

  if (!amount || amount <= 0) {
    convertedInput.value = "";
    exchangeRateText.textContent = "";
    return;
  }

  try {
    const res = await fetch(
      `${API_URL}?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`
    );
    const data = await res.json();
    const rate = data?.data?.[to]?.value;

    if (!rate) throw new Error("Rate not found");

    convertedInput.value = (amount * rate).toFixed(2);
    exchangeRateText.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
  } catch {
    convertedInput.value = "Error";
    exchangeRateText.textContent = "";
  }
}

// ================== EVENT LISTENERS ==================
[fromSelect, toSelect].forEach((select, i) => {
  select.addEventListener("change", () => {
    setFlag(i === 0 ? fromFlag : toFlag, select.value.toUpperCase());
    convertCurrency();
  });
});

amountInput.addEventListener("input", convertCurrency);

switchBtn.addEventListener("click", () => {
  [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value];
  setFlag(fromFlag, fromSelect.value.toUpperCase());
  setFlag(toFlag, toSelect.value.toUpperCase());
  convertCurrency();
});

// ================== INIT ==================
window.addEventListener("DOMContentLoaded", () => {
  setFlag(fromFlag, fromSelect.value || "SGD");
  setFlag(toFlag, toSelect.value || "USD");
  convertCurrency();
});
