# 💸 BudgetPal — Personal Budget Tracker

A clean, fast, multi-user budget tracking web app. Zero dependencies, zero installation — runs entirely in your browser.

🔗 **Live Demo:** [endergencturk.github.io/butce-takip-app](https://endergencturk.github.io/butce-takip-app/?v=2)

💰 **Get it on Gumroad:** [Buy BudgetPal — $9 one-time](https://endergenctuerk.gumroad.com/l/kdjums)

---

## 📸 Screenshots

![BudgetPal Main Screen](https://github.com/user-attachments/assets/fe5713c4-bfd7-4ddc-bf88-8db38a45dbbc)

---

## 🚀 Features

### 👤 User Management
- Multi-user support (add, rename, delete)
- Each user has their own data, budget goals and PIN protection

### 💰 Transaction Tracking
- Add and edit income / expense transactions
- **Notes** on every transaction
- **Installment payments** — amount split automatically across months (2–24 installments)
- **🔁 Recurring transactions** — weekly / monthly / yearly, with optional end date
- **💱 Per-transaction currency** — choose a different currency per transaction with automatic conversion
- Tag system — label and filter transactions by tags

### 📊 Analysis & Reporting
- Monthly income/expense summary and net balance
- **📎 Monthly budget goal** — set a spending target, track progress with a progress bar
- **📑 Financial Summary Report** — KPIs, category breakdown and monthly trends for last 1/3/6/12 months
- **🔍 Spending anomaly detection** — automatically flags unusual expenses compared to your 3-month average
- Category-based spending analysis with limit management
- ⚠️ Limit alerts at 80% and on overspend
- Daily spending trend chart
- 📊 Month comparison chart — last 3 / 6 / 12 months
- Yearly net balance analysis (month by month)

### 🗓 Budget Planning
- Build a category-based budget plan for next month
- Compare with current month spending and track the difference visually

### 🎨 Category Management
- Add and delete categories
- 🎨 Custom color picker for each category
- Per-category budget limits

### 👥 Sharing & Collaboration
- **Share code** — export budget data as base64 and send to a friend
- **Web Share API** integration — share with one tap
- **Drag & drop JSON import** — easily import data from a friend
- Imported transactions merge with existing data — no overwriting

### 📤 Export & Backup
- 📄 **JSON** export / import
- 📊 **CSV** export (Excel compatible)
- 📗 **Excel (.xlsx)** export
- 📕 **PDF Financial Summary Report**

### 🔔 Notifications & Reminders
- Web Notifications API integration
- Reminders with custom title / date / time / repeat frequency
- Upcoming reminder counter in the top bar

### 📱 Mobile App Experience
- **Bottom navigation** — 5 tabs: Overview / Transactions / Analysis / Report / Settings
- **FAB button** — add a transaction with one tap
- **Bottom sheet form** — slide-up transaction panel
- **Swipe to delete** — swipe left on any transaction
- **Page swipe** — swipe between pages with your finger
- **PWA** — installable on home screen, works offline

### 🔐 Security
- 4-digit **PIN protection** — auto-lock on app open
- PIN setup, change and reset

### 🌍 General
- 🌐 4 languages: English, Turkish, German, Spanish
- 🌙 Dark mode
- **💱 9 currencies:** TRY, USD, EUR, GBP, JPY, CHF, CAD, AUD, SAR
- 💾 All data stored in `localStorage` — no server required

---

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| HTML / CSS / Vanilla JS | App foundation |
| LocalStorage | Data storage |
| [Chart.js](https://www.chartjs.org/) | Charts and visualizations |
| [jsPDF](https://github.com/parallax/jsPDF) | PDF report generation |
| [SheetJS (xlsx)](https://sheetjs.com/) | Excel export |
| [Google Fonts](https://fonts.google.com/) | Plus Jakarta Sans, JetBrains Mono |
| Web Notifications API | Reminder notifications |
| Web Share API | Data sharing |
| Service Worker | Offline PWA support |

---

## 📦 Installation

No installation needed. Open `index.html` in your browser and start using it.

```bash
git clone https://github.com/endergencturk/butce-takip-app.git
cd butce-takip-app
# Open index.html in your browser
```

---

## 📄 License

MIT
