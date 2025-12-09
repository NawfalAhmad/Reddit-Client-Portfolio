🧭 Reddit Client Portfolio
<sup>A modern Reddit-style UI built with React + TypeScript</sup>
<div align="center">


</div>
📚 Contents

(Tap any section to auto-scroll)

✨ Overview

🖼️ Live Preview

🧩 Tech Stack

🗂️ Project Structure

🚀 Features

🎨 Styling Highlights

🛠️ Installation & Setup

🧭 Component Breakdown

🔧 Known Issues

🗺️ Roadmap

🤝 How to Contribute

📝 Contribution Guidelines

📜 License

❤️ Acknowledgements

✨ Overview

A clean, lightweight, Reddit-inspired UI built using React + TypeScript and styled with elegant CSS Modules.
Focus: building a pixel-perfect, responsive, component-driven UI starting with the Reddit Navbar.

🖼️ Live Preview

Add images in docs/images/

<div align="center">
Navbar Preview	Search Bar
(navbar.png)	(search.png)
</div>
🧩 Tech Stack
Technology	Purpose
⚛ React	UI Components
🟦 TypeScript	Type safety
🎨 CSS Modules	Scoped styling
⚡ Vite	Fast dev environment
🖼 SVG Icons	Clean scalable icons
🗂️ Project Structure
src/
  components/
    NavBar.tsx
  styles/
    navBar.module.css
public/
  reddit.png
docs/
  images/

🚀 Features
✔ Pixel-perfect Navbar
✔ Logo + text section
✔ Responsive search bar
✔ SVG icon integration
✔ Flexbox alignment
✔ Theme variables
✔ Modular TypeScript components
🎨 Styling Highlights
🎛 Theme Variables
--bg: #ffffff;
--text: #1a1a1b;
--bg-input: #f6f7f8;
--text-muted: #7a7a7a;

📐 Layout Structure

Flexbox-driven

Search input uses flex: 1

Search button fixed width

SVG icon fills container (width:100%, height:100%)

🛠️ Installation & Setup
1️⃣ Clone your fork
git clone https://github.com/<your-username>/Reddit-Client-Portfolio.git
cd Reddit-Client-Portfolio

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


Runs at http://localhost:5173/

🧭 Component Breakdown
🔷 NavBar.tsx

Functional component

Minimal props

Inline SVG

Imports scoped CSS

Reusable layout

🔷 navBar.module.css

Theming

Flex alignment

Input resets

Hover states

Responsive (WIP)

🔧 Known Issues
Issue	Status
Responsive Navbar	⏳ In Progress
More UI Screens	⏳ Planned
Accessibility (ARIA)	⏳ Pending
Sidebar + Feed Components	⏳ Planned
🗺️ Roadmap
🔹 Short Term

Add responsive breakpoints

Improve mobile layout

Add dark mode

Add ARIA labels

Navigation animations

🔹 Medium Term

Add sidebar

Post cards

Voting UI

Comment section

Component library expansion

🔹 Long Term

Theme switcher

Routing

Unit tests (Vitest + RTL)

Component showcase playground

🤝 How to Contribute
1. Fork the repo
2. Clone your fork
3. Create a new branch
git checkout -b docs/update-readme

4. Make changes
5. Commit
git commit -m "docs: enhanced animated readme"

6. Push
git push origin docs/update-readme

7. Open a pull request

Reference Issue #19 (Documentation)

📝 Contribution Guidelines

Write clear commit messages

Keep PRs focused and small

Add screenshots for UI changes

Match TypeScript and CSS module patterns

Test using npm run dev

Maintain clean component structure

📜 License

This project is licensed under the MIT License.

❤️ Acknowledgements

Inspired by Reddit’s UI

Built with React, TypeScript, and Vite

Supported by open-source contributors