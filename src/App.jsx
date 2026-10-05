import MovieGrid from "./components/MovieGrid";

import { sampleMovies } from "./data/sampleMovies";
function App() {
  return (
    <main className="app">
      <h1>Movie Watchlist Hub</h1>
      <MovieGrid movies={sampleMovies} />
    </main>
  );
}

export default App;
