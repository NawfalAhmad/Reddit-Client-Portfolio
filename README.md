🧭 Reddit Client Portfolio

A lightweight React + TypeScript mini-application inspired by Reddit’s UI, built as a personal portfolio project to showcase clean component structure, CSS Modules styling, and pixel-perfect layout techniques.
The current focus is on building a fully responsive, interactive Navbar with search, icons, theming, and reusable UI patterns.

⭐ Features
🎯 Core Highlights

React + TypeScript for type-safe, modular UI development

CSS Modules for style encapsulation & clean component-based theming

Vite for blazing-fast development environment

Pixel-perfect navbar inspired by Reddit

SVG-driven interactive icons

Theme-ready design using CSS variables (--bg, --text, etc.)

🧩 Navbar Features

Logo + text section

Responsive search bar with input + icon button

Additional action buttons

Smooth alignment using flexbox

SVG icons scale cleanly across screen sizes


🛠️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/<your-username>/Reddit-Client-Portfolio.git
cd Reddit-Client-Portfolio

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev


Your app will start at:

http://localhost:5173/

🎨 Styling Notes (Important)

.navbar uses flex for horizontal alignment

.navbar-search wraps input + button using flex row

.navbar-search-input uses flex: 1 for responsive expansion

.navbar-search-button uses a fixed 2rem width and centers the SVG

.navbar-search-icon uses full size (width:100%; height:100%) for clean scaling

🧭 File-by-File Walkthrough
NavBar.tsx

Functional component

Uses minimal props

Imports modular CSS

Manages layout (logo → search → actions)

navBar.module.css

Defines the entire styling system using:

CSS variables (theme-ready)

Flexbox layout utilities

Input/button reset styles

Responsive behavior (WIP)

public/reddit.png

Logo used inside the navigation bar

Replaceable with custom SVG or PNG

⚠️ Known Issues / Work in Progress
Issue	Status
Search button alignment	✔ Fixed via flex wrapper
Responsiveness for small screens	⏳ Pending
Documentation	⏳ Expanding (this README)
Additional Screens/Components	⏳ Future work
🗺️ Roadmap
🔜 Next Steps

Add responsive breakpoints

Create sidebar, posts, voting UI

Improve keyboard accessibility

Add ARIA roles for navbar elements

Create full component library structure

Add unit tests (Vitest / React Testing Library)

Build out complete Reddit-style UI layout

🚀 Long-term goals

Component demo page

Theme switcher

API integration (optional)

Multi-page routing

🧑‍💻 Contributing

We welcome contributions! Feel free to improve the UI, styling, docs, refactor code, or add new components.

🔽 Steps to Contribute

Fork the repository

Clone your fork

Create a new branch

git checkout -b docs/improve-readme


Make your changes

Commit

git commit -m "docs: improved project documentation"


Push your branch

git push origin docs/improve-readme


Open a Pull Request referencing Issue #19

📝 Contribution Guidelines (Summary)

Keep commits clean

Use meaningful branch names

Add screenshots if UI changes

Run the app before submitting a PR

Follow standard React + TS style conventions

📜 License

This project is open-source and available under the MIT License.
Feel free to use, modify, and learn from it.

🙌 Acknowledgements

Inspired by Reddit's interface & UX patterns

Built using React + TypeScript + Vite

Open-source contributions are welcome ❤️