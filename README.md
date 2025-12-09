# Reddit

A lightweight React + TypeScript project styled with CSS modules, inspired by Reddit’s UI. The current focus is on building a **pixel‑perfect, interactive navbar** with a search bar, buttons, and logo integration.

---

## 🚀 Features

- **React + TypeScript** for component structure and type safety.
- **CSS Modules** for scoped, maintainable styles.
- **Navbar Layout**
  - Logo section with image + text.
  - Search bar with input + button (SVG icon).
  - Additional action button.
- **SVG Icon Integration**
  - Search icon scales to fill the button.
  - Flexbox alignment for pixel‑perfect centering.
- **Customizable Theme**
  - Uses CSS variables (`--bg`, `--text`, `--bg-input`, `--text-muted`) for easy theming.

---

## 📂 Project Structure

```
src/
  components/
    NavBar.tsx        # Main navbar component
  styles/
    navBar.module.css # Scoped styles for navbar
public/
  reddit.png          # Logo asset
```

---

## 🛠️ Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🎨 Styling Notes

- `.navbar` uses `flex` for horizontal layout and spacing.
- `.navbar-search` is a flex container for the search input + button.
- `.navbar-search-input` expands with `flex: 1` to fill available space.
- `.navbar-search-button` is fixed width (`2rem`) and centers the SVG.
- `.navbar-search-icon` fills the button (`width: 100%; height: 100%`).

---

## 🔧 Known Issues / Work in Progress

- Search button alignment: fixed by wrapping input + button in a flex container (`.navbar-search-container`).
- Responsiveness: currently fixed width (`400px`), needs media queries for smaller screens.
- Documentation: README is evolving as more components are added.

---

## 📌 Next Steps

- Add responsive breakpoints for the navbar.
- Expand components (sidebar, voting, comments) to match Reddit‑style app goals.
- Improve accessibility (ARIA labels, keyboard navigation).
- Write beginner‑friendly onboarding docs for new contributors.
