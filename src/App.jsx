import ShowGrid from "./components/ShowGrid";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import useFetch from "./hooks/useFetch";
import normalizeShow from "./utils/normalizeShow";

const SHOWS_URL = "https://api.tvmaze.com/shows?page=0";
function App() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();

  useEffect(() => {
    document.title = query.trim()
      ? `Searching "${query.trim()}" · TV Show Watchlist Hub`
      : "TV Show Watchlist Hub";
  }, [query]);
  const { data, loading, error } = useFetch(SHOWS_URL);
  const shows =
    data?.map((show) => {
      return normalizeShow(show);
    }) ?? [];

  const visibleShows = shows.filter((show) =>
    show.title.toLowerCase().includes(search),
  );
  const topShows = [...shows].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const showToDisplay = search === "" ? topShows : visibleShows;
  if (loading) {
    return (
      <main className="app">
        <h1>TV Show Watchlist Hub</h1>
        <p>Loading shows… sit back and enjoy.</p>
      </main>
    );
  }
  if (error) {
    return (
      <main className="app">
        <h1>TV Show Watchlist Hub</h1>
        <p>Couldn't load shows: {error}</p>
      </main>
    );
  }
  return (
    <main className="app">
      <h1>TV Show Watchlist Hub</h1>
      <SearchBar value={query} onChange={setQuery} />
      <p>
        {search === ""
          ? `Showing top ${showToDisplay.length} shows out of ${shows.length}`
          : `Showing ${visibleShows.length} of ${shows.length} shows`}
      </p>
      <ShowGrid
        shows={showToDisplay}
        emptyMessage={`No shows match "${query.trim()}"`}
      />
    </main>
  );
}

export default App;
