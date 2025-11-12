# ⚛️ React Fundamentals Refresher Project

This repository is a small, opinionated React project scaffolded with Vite. It's structured as a set of practical exercises that focus on core React concepts: functional components, props, state, conditional rendering, and array methods. The app uses plain CSS (BEM conventions) and small reusable components.

---

## 🚀 Getting Started

This project uses Vite for a fast development experience.

### Prerequisites

- Node.js (16+) and npm

### 1. Clone the repository

Clone the repo and change into the project folder:

```bash
git clone [YOUR_REPOSITORY_URL]
cd react-sandbox
```

### 2. Install dependencies

Install packages with your preferred package manager:

```bash
npm install
```

### 3. Run the development server

Start the app locally:

```bash
npm run dev
```

Open your browser at http://localhost:5173 (Vite's default) to view the app.

---

## 🎯 Project Goals

This repo is designed as a refresher for developers who want to practice React fundamentals via small, focused exercises. Each exercise isolates a concept so you can implement logic without worrying about build tooling or CSS.

Key learning goals:

- Functional components and JSX
- Props drilling and destructuring
- Conditional rendering and loading states
- Working with arrays: map, filter and keys
- Minimal, reusable component patterns

---

## 📁 Project Structure

Key folders and files you'll use while completing the exercises:

```
src/
	components/          # Reusable UI components (Carousel, AlbumTiles, ArtistTile, etc.)
	exercises/           # Exercise components (Exercise1..Exercise6)
	pages/               # Page containers (Home, AlbumInfo...)
	services/            # Small helpers (mockApi.js)
	assets/              # Images and other static assets
public/                # Static JSON used by mockApi (albums.json, artist.json)
```

Notable files:

- `src/pages/Home/Home.jsx` — main container that composes the exercise components and holds initial data fetching
- `src/exercises/Exercise1` — Exercise 1 (functional components / JSX)
- `src/exercises/Exercise2` — Exercise 2 (props & destructuring)
- `src/exercises/Exercise3` — Exercise 3 (prop drilling & conditional rendering)
- `src/exercises/Exercise4` — Exercise 4 (array methods & rendering lists)
- `src/exercises/Exercise5` — Not ready yet
- `src/exercises/Exercise6` — Not ready yet
- `src/components/Loading` — small Loading spinner component used for null/loading states
- `src/services/mockApi.js` — tiny fetch wrapper that reads `public/*.json` for local mock data

---

## 🧩 Exercises & Where to Work

Each exercise has a small component in `src/exercises`. Open the matching `.jsx` and the adjacent `todo.md` (or `todo.md`-style notes) to see the exact tasks.

Summary table:

| Exercise |                                Topic | Main file to edit                       |
| -------- | -----------------------------------: | :-------------------------------------- |
| E1       |           Functional components, JSX | `src/exercises/Exercise1/Exercise1.jsx` |
| E2       |                Props & destructuring | `src/exercises/Exercise2/Exercise2.jsx` |
| E3       | Prop drilling, conditional rendering | `src/exercises/Exercise3/Exercise3.jsx` |
| E4       |      Array methods (`map`, `filter`) | `src/exercises/Exercise4/Exercise4.jsx` |
| E5       |                   Gallery (Carousel) | `src/exercises/Exercise5/Exercise5.jsx` |
| E6       |                       Explore albums | `src/exercises/Exercise6/Exercise6.jsx` |

If you need to change data, the mock JSON files live in `public/` (for example `public/albums.json` and `public/artist.json`). The project uses `mockApiFetch` in `src/services/mockApi.js` to read these files during development.

---

## 🎨 Styling

- Technology: Plain CSS (no SCSS required). Many files were originally authored with SCSS-style nesting but have been converted to standard CSS using explicit BEM-style class names.
- Convention: BEM (Block**Element--Modifier). Example: `.artist-tile**content--text`.
- Responsibility: You generally do not need to edit CSS to complete the React exercises—focus on the React logic and use `className` values already present in the markup.

---

## 🛠 Development Notes

- The app is intentionally small and uses local mock JSON for data so exercises work offline.
- A lightweight `Loading` component exists and is used for components that receive `null`/loading props (see `src/components/Loading`).
- There's a small `NotFound` component at `src/components/NotFound` you can use as a catch-all route.

---
