# 🎥 React + Vite TikTok Feature Project

Welcome to the TikTok Feature project built with React and Vite! This project features a video feed with a bottom navigation bar, closely mimicking the UI and functionality of the TikTok app. Exciting updates and new features are on the way!

Demo here: https://www.youtube.com/watch?v=6p3qW0eJgs8

## ✨ Features

- 🎬 **Video feed with auto-playing videos**
- 📜 **Scroll to the next video feature**
- 🔍 **Bottom navigation bar with icons**
- 🎨 **Styled components for UI design**
- 🚀 **Add a new TikTok feature! Coming soon...**

## 📋 Project Info

**TikTok-Hackathon-2024-Team-Geniuses**

## 🛠 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later) 🟢
- [npm](https://www.npmjs.com/) (comes with Node.js) 📦
- [Git](https://git-scm.com/) (for version control) 🌐

## 🏁 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

First, clone the repository to your local machine using Git.

```sh
git clone https://github.com/TikTok-Hackathon-2024-Team-Geniuses/TikTok_Main.git
cd TikTok_Main
```

### 2. Install Dependencies

Next, install the project dependencies using npm.

```sh
npm install
```

### 3. Run the Development Server

Once the dependencies are installed, start the development server.

```sh
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:3000/` (sometimes it will generate a different port number eg: #:5147 ) to see the app running. 🚀

## 📂 Project Structure 

Here's an overview of the project structure, but will be updated when it's completed:

```
Tiktok-Main/
├── public/                 # Static assets
├── src/
│   ├── Components/
│   │   ├── Content_/
│   │   │   ├── VideoFeed.jsx
│   │   │   ├── VideoPlayer.jsx
│   │   │   ├── FetchVideoData.js
│   │   ├── NavigationBar/
│   │   │   ├── BottomBar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### 📂 Key Files and Directories

- `src/Components/Content_/VideoFeed.jsx`: Manages the video feed.
- `src/Components/Content_/VideoPlayer.jsx`: Handles video playback.
- `src/Components/Content_/FetchVideoData.js`: Contains video data.
- `src/Components/NavigationBar/BottomBar.jsx`: Renders the bottom navigation bar.
- `src/App.jsx`: The main app component.
- `index.html`: The HTML template.
- `vite.config.js`: Vite configuration file.

## 📦 Building for Production

To create a production build, run:

```sh
npm run build
```

This will create an optimized build of your application in the `dist` directory. 📁

## 🛠 Troubleshooting

If you encounter any issues, try the following steps:

1. Ensure all dependencies are installed: `npm install`
2. Clear npm cache and reinstall dependencies:
   ```sh
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```
3. Make sure your Node.js and npm versions are up to date.

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome! 🌟

## 🙏 Acknowledgements

This project was created using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/). Big thanks to the open-source community! 💖

---

*Happy Coding!* 🚀✨
