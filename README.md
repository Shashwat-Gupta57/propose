# Project Nemo — Proposal Website

Project Nemo is an interactive, animated, and fully personalized proposal website built with HTML, CSS, and JavaScript.  
It combines dynamic UI behavior, playful interactions, background music, and a passcode-protected entry system to create a memorable experience.

---

## 🌟 Features

### **1. Passcode-Protected Entry**
- The site opens with a landing screen.
- Users must enter a correct passcode to proceed.
- Once verified, the page title instantly updates to **“I love you apoorva”**.

### **2. Personalized Visual Experience**
- Modern UI using gradient backgrounds and Poppins font.
- Multiple sections containing images, compliments, memories, and flirty notes.
- Smooth animations and transitions throughout the page.

### **3. Interactive Proposal Buttons**
- **Yes** button triggers:
  - Confetti effect  
  - Floating hearts  
  - Transition to a final “accepted” screen  
  - Firebase entry logging  

- **No** button:
  - Moves to random positions to avoid clicks  
  - Displays playful popup messages  
  - Tracks the number of “No” attempts  

### **4. Analytics Tracking**
The website logs:
- Time spent on each section  
- Section view count  
- Time spent reading each paragraph  
- Total time on the page  
- Browser metadata  
- Passcode failure count  
- No-button click attempts  

All data is recorded in Firebase when the user clicks **Yes**.

### **5. Anti-Inspection Security**
To avoid casual inspection:
- Right-click is disabled  
- F12 is blocked  
- Ctrl+Shift+I / J / C disabled  
- Ctrl+U disabled  

### **6. Background Music**
- Auto-plays when access is granted  
- Starts at a specific timestamp (25 seconds)

---

## 🛠️ Tech Stack

| Component | Technology |
|----------|------------|
| Frontend | HTML5, CSS3, JavaScript |
| Animations | CSS Keyframes, Canvas-Confetti |
| Fonts | Google Fonts (Poppins) |
| Database | Firebase Realtime Database |
| Media | Local images + audio assets |

---

## 📁 Project Structure

```
/
|-- index.html
|-- README.md
|-- res/
|   |-- song.mp3
|   |-- photo-1.png
|   |-- photo-2.png
|   |-- photo-3.png
|   |-- ...
```

All images and audio files reside inside the `res/` directory.

---

## 🚀 How It Works

### **1. Landing Page**
The user first sees a welcome screen with an **Open** button.

### **2. Passcode Authentication**
- If the passcode is correct:
  - Landing page hides  
  - Music plays from 25 seconds  
  - Full website becomes visible  
  - Page title changes  
- If incorrect:
  - Error alert appears  
  - Failure count increments  

### **3. Scrolling and Interaction**
Each section’s visibility and duration are tracked for analytics.

### **4. Proposal Logic**
- **Yes** → Triggers animations + logs data to Firebase + final screen  
- **No** → Button escapes + fun teasing popups  

---

## 📦 Setup Instructions

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/project-nemo.git
cd project-nemo
```

### **2. Add Firebase configuration**
Insert your Firebase object here inside `index.html`:
```javascript
const firebaseConfig = { ... };
```

### **3. Add your images and audio**
Place all required files into:
```
/res
```

### **4. Deployment Options**
You may deploy using:
- GitHub Pages  
- Netlify  
- Vercel  
- Firebase Hosting  

---

## 🌐 Deploying to GitHub Pages

1. Commit all project files  
2. In GitHub → **Settings**  
3. Go to **Pages**  
4. Select branch: `main`  
5. Set build folder to `/root`  
6. Save  

Your live site will be published automatically.

---

## 📜 License

This project is personal and intended for private use only. Redistribution or commercial use is not permitted.

---

