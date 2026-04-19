# 📈 StockAlert Pro — Real-Time Stock Price Monitoring & Alert System

> **BATCH-09 Project** — Giriraj N · Gokulnath R · Gurusaeth B

A full-stack web application for real-time stock price monitoring with instant price alerts. Built with vanilla HTML/CSS/JS, hosted on **GitHub Pages**, backed by **Firebase**.

---

## 🗂️ Project Structure

```
stockalert/
├── index.html              ← Landing page (public)
├── firebase-config.js      ← Firebase credentials (edit this!)
├── pages/
│   ├── login.html          ← Sign in with email or Google
│   ├── register.html       ← Create account (saves to Firebase)
│   ├── dashboard.html      ← Live stock prices + alert management
│   └── alerts.html         ← View & delete all your alerts
└── README.md
```

---

## 🚀 STEP 1 — Set Up Firebase

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add Project** → name it `stockalert-pro` → Create
3. In the project, click **Web** icon `</>` → Register app
4. Copy the `firebaseConfig` object shown
5. Open `firebase-config.js` and **paste your values**:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "stockalert-pro.firebaseapp.com",
  databaseURL: "https://stockalert-pro-default-rtdb.firebaseio.com",
  projectId: "stockalert-pro",
  storageBucket: "stockalert-pro.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Enable Firebase Services

In Firebase Console, enable:

- **Authentication** → Sign-in method → Enable **Email/Password** and **Google**
- **Realtime Database** → Create database → Start in **test mode**
- (Optional) **Firestore** → Create database (for advanced alert history)

### Realtime Database Rules (paste in Firebase Console → Database → Rules)

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

---

## 🐙 STEP 2 — Deploy to GitHub Pages

### First Time Setup

```bash
# 1. Create a new repository on GitHub
#    Go to github.com → New → name: stockalert-pro → Public → Create

# 2. In your project folder, open terminal:
git init
git add .
git commit -m "Initial commit — StockAlert Pro"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stockalert-pro.git
git push -u origin main
```

### Enable GitHub Pages

1. Go to your GitHub repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → Folder: `/ (root)` → **Save**
4. Wait ~2 minutes → your site is live at:
   ```
   https://YOUR_USERNAME.github.io/stockalert-pro/
   ```

### Update Firebase Auth Domain

In Firebase Console → Authentication → Settings → **Authorized domains**  
Add: `YOUR_USERNAME.github.io`

---

## 📡 STEP 3 — Connect Real Stock API (Optional Upgrade)

The dashboard uses **simulated demo prices** by default.  
To get **real live prices**, sign up for a free API key:

| API | Free Tier | Link |
|-----|-----------|------|
| Alpha Vantage | 25 req/day | https://www.alphavantage.co |
| Finnhub | 60 req/min | https://finnhub.io |
| Yahoo Finance (unofficial) | Unlimited | Use `yahoofinance` npm |

### Example — Alpha Vantage

Replace the `simulatePrices()` call in `dashboard.html` with:

```js
const API_KEY = 'YOUR_ALPHA_VANTAGE_KEY';

async function fetchRealPrice(sym) {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${sym}&apikey=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return parseFloat(data['Global Quote']['05. price']);
}
```

---

## 🔔 STEP 4 — Enable Email Notifications (Firebase Functions)

For **real email alerts**, deploy a Firebase Cloud Function:

```bash
npm install -g firebase-tools
firebase login
firebase init functions
```

In `functions/index.js`:

```js
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendAlertEmail = functions.database
  .ref('/alertsTrigger/{uid}/{alertId}')
  .onCreate(async (snap, context) => {
    const alert = snap.val();
    // Send email via nodemailer or SendGrid
  });
```

---

## 📋 Database Schema (Firebase Realtime DB)

```
users/
  {uid}/
    fullname: "Giriraj N"
    email: "user@example.com"
    phone: "+91 9876543210"
    experience: "intermediate"
    createdAt: 1700000000000
    alerts/
      {alertId}/
        sym: "AAPL"
        target: 190.00
        condition: "above"
        channel: "email"
        createdAt: 1700000000000
```

---

## 👥 Team

| ID | Name |
|----|------|
| 2403811710621033 | Giriraj N |
| 2403811710621034 | Gokulnath R |
| 2403811710621037 | Gurusaeth B |

---

## 📄 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Home | `/index.html` | Landing page with project overview |
| Login | `/pages/login.html` | Firebase email + Google login |
| Register | `/pages/register.html` | Account creation → saves to DB |
| Dashboard | `/pages/dashboard.html` | Live prices + set alerts |
| My Alerts | `/pages/alerts.html` | View & manage all alerts |

---

*Built for BATCH-09 Academic Project — Real Time Stock Price Monitoring and Alert System*
