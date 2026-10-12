import ShowGrid from "./components/ShowGrid";
import { useState } from "react";
import { sampleShows } from "./data/sampleShows";
import SearchBar from "./components/SearchBar";
function App() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();

  const visibleShows = sampleShows.filter((show) =>
    show.title.toLowerCase().includes(search),
  );
  return (
    <main className="app">
      <h1>TV Show Watchlist Hub</h1>
      <SearchBar value={query} onChange={setQuery} />
      <p>
        {search === ""
          ? `Showing all ${sampleShows.length} shows`
          : `Showing ${visibleShows.length} of ${sampleShows.length} shows`}
      </p>
      <ShowGrid
        shows={visibleShows}
        emptyMessage={`No shows match "${query.trim()}"`}
      />
    </main>
  );
}

export default App;
