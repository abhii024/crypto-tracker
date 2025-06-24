# crypto-tracker
CoinGecko Google Sheets Automation using Google Apps Script


# 🚀 Crypto Tracker – CoinGecko + Google Sheets

## 📌 Objective
Automatically sync top 15 crypto market data into Google Sheets using Google Apps Script.

## 🧠 How it works
- Uses CoinGecko API to fetch top 15 coins
- Updates two sheets:
  - `Current Prices`: Fresh prices on each cycle
  - `Price History`: Appends timestamped rows for hourly tracking

## 🔁 Automation
- Google Apps Script Trigger
- Runs every 30 minutes

## 📂 Files Included
- `code.gs`: Google Apps Script logic
- `trigger-screenshot.png`: Trigger configuration proof
- `Google_Sheet_Link.txt`: Link to working Google Sheet (View access)

## ⚠ Limitations
- Free CoinGecko API may rate limit (code 429)
- `Internal Ref Code` left blank (API doesn’t provide it)

## ✅ Author
Abhishek Jhatwal
