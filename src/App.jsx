import MovieGrid from "./components/MovieGrid";
import { useState } from "react";
import { sampleMovies } from "./data/sampleMovies";
import SearchBar from "./components/SearchBar";
function App() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();

  const visibleMovies = sampleMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search),
  );
  return (
    <main className="app">
      <h1>Movie Watchlist Hub</h1>
      <SearchBar value={query} onChange={setQuery} />
      <p>
        {search === ""
          ? `Showing all ${sampleMovies.length} movies`
          : `Showing ${visibleMovies.length} of ${sampleMovies.length} movies`}
      </p>
      <MovieGrid
        movies={visibleMovies}
        emptyMessage={`No movies match "${query.trim()}"`}
      />
    </main>
  );
}

export default App;
