# TV Show Watchlist Hub

A TV show browsing and watchlist app built with React and Vite, using real data from the free [TVmaze API](https://www.tvmaze.com/api). Every UI component (cards, grid, sidebar, table, select, multi-select, modal, drawer, carousel) and every custom hook (`useFetch`, `usePost`, `useLocalStorage`, `useCookies`, `useTimeout`, `useInterval`, `useAutoRefresh`, `useClickOutside`) is written by hand, without a UI library.

## Progress

- [x] Show card grid: responsive layout, with fallbacks for a missing poster, premiere date or rating
- [x] Live search: filters by title as you type, ignoring case and extra spaces
- [ ] Real shows from the TVmaze API, with a reusable `useFetch` hook and a data-mapping layer
- [ ] Routing, sidebar and pages
- [ ] Dark mode and saved preferences
- [ ] Watchlist table with sorting and pagination
- [ ] Genre filters, reviews, show details drawer, carousel

## Tech

React 19, Vite, React Router, json-server (a local REST API for the watchlist and reviews), oxlint.

## Running it locally

```bash
npm install
cp .env.example .env   # no API key needed
npm run dev            # http://localhost:5173
```

| Command          | What it does                                         |
| ---------------- | ---------------------------------------------------- |
| `npm run dev`    | Starts the React app (Vite) at http://localhost:5173 |
| `npm run server` | Starts the fake backend (json-server) on port 3001   |
| `npm run build`  | Production build                                     |
| `npm run lint`   | Checks the code with oxlint                          |
