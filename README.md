# Movie Watchlist Hub

A movie browsing and watchlist app built with React and Vite. Every UI component (cards, grid, sidebar, table, select, multi-select, modal, drawer, carousel) and every custom hook (`useFetch`, `usePost`, `useLocalStorage`, `useCookies`, `useTimeout`, `useInterval`, `useAutoRefresh`, `useClickOutside`) is written by hand, without a UI library.

## Progress

- [x] Movie card grid: responsive layout, with fallbacks for a missing poster, release date or rating
- [ ] Live search
- [ ] Trending movies from the TMDB API
- [ ] Routing, sidebar and pages
- [ ] Dark mode and saved preferences
- [ ] Watchlist table with sorting and pagination
- [ ] Genre filters, reviews, movie details drawer, carousel

## Tech

React 19, Vite, React Router, json-server (a local REST API for the watchlist and reviews), oxlint.

## Running it locally

```bash
npm install
cp .env.example .env   # then add your TMDB API key
npm run dev            # http://localhost:5173
```

| Command          | What it does                                         |
| ---------------- | ---------------------------------------------------- |
| `npm run dev`    | Starts the React app (Vite) at http://localhost:5173 |
| `npm run server` | Starts the fake backend (json-server) on port 3001   |
| `npm run build`  | Production build                                     |
| `npm run lint`   | Checks the code with oxlint                          |
