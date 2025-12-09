<h1 align="center">📱 Reddit Client Portfolio</h1>
<p align="center">A lightweight, modular, and visually consistent Reddit-inspired UI built using <strong>React + TypeScript</strong>, styled with <strong>CSS Modules</strong>.</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/CSS%20Modules-Modern-green" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
</p>

---

## 📚 **Contents**
This table is fully interactive — clicking will auto-scroll to that section.

| Section | Description |
|--------|-------------|
| 🎯 [Project Overview](#-project-overview) | What the project is and why it exists |
| ⚡ [Features](#-features) | Functionality included in the current build |
| 🧱 [Tech Stack](#-tech-stack) | Tools and frameworks used |
| 🗂️ [Project Structure](#️-project-structure) | Directory and file layout |
| 🚀 [Getting Started](#-getting-started) | Clone → Install → Run |
| 🎨 [Styling Breakdown](#-styling-breakdown) | How the navbar + icons are styled |
| 🧩 [Components Explained](#-components-explained) | File-by-file explanation |
| 🛠️ [Known Issues](#️-known-issues) | Current limitations |
| 🧭 [Roadmap](#-roadmap) | Upcoming improvements |
| 🤝 [Contribution Guide](#-contribution-guide) | How to contribute |
| 📝 [License](#-license) | License info |

---

## 🎯 **Project Overview**

The **Reddit Client Portfolio** is a minimalist front-end replica of core Reddit UI elements.  
It focuses heavily on **pixel-perfect navbar design**, clean component structure, and simple theme customization.

This project aims to gradually evolve into a fully responsive **Reddit-style web client**, built step by step with clean, readable code suitable for beginners and open-source contributors.

---

## ⚡ **Features**

### ✅ **Core Features**
- ⚛️ *React + TypeScript* for strong typing & organized components  
- 🎨 *CSS Modules* for isolated and maintainable styling  
- 🔍 Interactive *search bar* with integrated SVG icon  
- 🖼️ Logo + text branding similar to Reddit  
- 🧩 Pixel-perfect flexbox alignment  
- 🎛️ CSS variable-based theming (`--bg`, `--text`, `--bg-input`, etc.)

### 🔧 UI Behavior
- Input expands dynamically using `flex: 1`  
- Search button is fixed-width + centered icon  
- Clean component folder organization  
- Designed with extension in mind (sidebar, posts, voting, etc.)

---

## 🧱 **Tech Stack**

| Layer | Tools Used |
|-------|------------|
| Frontend Framework | **React 18**, **TypeScript** |
| Styling | **CSS Modules**, Flexbox |
| Build Tool | Vite |
| Assets | SVG Icons, PNG Logo |

---


## 🚀 **Getting Started**

### **1️⃣ Clone the repository**

```bash
1️⃣git clone https://github.com/cwillromero/Reddit-Client-Portfolio.git
cd Reddit-Client-Portfolio

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


Your project will run locally on:

http://localhost:5173/

🎨 Styling Breakdown

The navbar uses clean flexbox layout:

🧩 Layout Highlights

.navbar → horizontal layout + spacing

.navbar-search-container → fixes alignment issues

.navbar-search-input → expands using flex: 1

.navbar-search-button → fixed 2rem width, icon centered

.navbar-search-icon → fills the button (width: 100%; height: 100%)

🎛️ Theme Support

Change colors via CSS variables:

:root {
  --bg: #ffffff;
  --text: #1a1a1b;
  --bg-input: #f6f7f8;
  --text-muted: #878a8c;
}

🧩 Components Explained
📌 NavBar.tsx

Handles logo rendering

Renders search bar with input + button

Uses imported CSS module for scoped styling

📌 navBar.module.css

All styles for structure + spacing

Fixes the search bar alignment bug

Makes the navbar modern and responsive-ready

📌 reddit.png

The official project logo used inside <img />

🛠️ Known Issues
Issue	Status
Search input alignment on small screens	Pending fix
Navbar width responsiveness	Needs media queries
Documentation expansion	In progress
Limited components	More Reddit UI planned
🧭 Roadmap
🔜 Short-Term

Add media queries for small screens

Improve accessibility (ARIA, keyboard navigation)

Add complete contributor onboarding docs

📅 Mid-Term

Build sidebar + post list

Add voting & comment components

Add routing for different Reddit pages

🚀 Long-Term

Fully interactive Reddit-style client

Theming engine with multiple color presets

API integration for real post data

🤝 Contribution Guide

We welcome all contributors — especially beginners!
Follow the steps below to contribute:

1️⃣ Fork the repository

Click Fork on GitHub (top right corner).

2️⃣ Clone your fork
git clone <your-fork-url>

3️⃣ Create a new branch
git checkout -b docs-improvement

4️⃣ Make your changes

Improve this README

Fix navbar alignment

Add responsive styles

Add components

5️⃣ Commit and push
git add .
git commit -m "Improved documentation"
git push origin docs-improvement

6️⃣ Create a Pull Request

Go to Pull Requests → New PR

Select your branch

Write a clear explanation

Submit 🎉

We'll review and merge after verification!

📝 License

This project is licensed under the MIT License — free to use, modify, and distribute.

<p align="center"><b>⭐ If you like this project, don't forget to star the repo! ⭐</b></p>
