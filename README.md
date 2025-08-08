# 🔐 Login & Registration System (Frontend Only)

This is a simple login and registration system built using only **HTML**, **CSS**, and **JavaScript**.  
with No backend or server — all data is stored locally using the browser's **localStorage**.


## 🚀 Features

- ✅ User registration with name, email, and password
- ✅ Prevents registration with already-used email
- ✅ Secure login by validating email and password
- ✅ User profile page showing logged-in details
- ✅ Logout functionality to clear session
- ✅ Friendly pop-up messages (no default alerts)
- ✅ Clean and responsive UI


## 🗂️ Project Structure

Register System/
│
├── html/
│ ├── register.html
│ ├── login.html
│ └── profile.html
│
├── css/
│ └── style.css
│
└── js/
└── script.js







## 🔧 How It Works

### 📌 Registration
- Users fill in **name, email, and password**
- Email is checked for uniqueness
- Data is saved in localStorage
- Redirects to the login page after successful registration

### 📌 Login
- Users enter **email and password**
- Data is validated against saved users
- On success, user is saved as `loggedInUser` and redirected to the profile

### 📌 Profile
- Displays user's name and email from localStorage
- Prevents access if user is not logged in
- Includes **Logout** button to clear session


## 📦 Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser `localStorage` for data storage


## 🧪 How to Use

1. Clone or download the project
2. Open `register.html` in any browser
3. Create a new account
4. You'll be redirected to login
5. Login and view your profile


## ⚠️ Notes

- All data is stored **locally in the browser** — this is not secure for production.

- Data will reset if you clear your browser cache or localStorage.
