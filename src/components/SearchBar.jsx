import "./SearchBar.css";
function SearchBar({ value, onChange }) {
  return (
    <section className="search-bar">
      <label htmlFor="search-input">Search Shows</label>
      <input
        type="search"
        id="search-input"
        className="search-bar-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search shows..."
      />

      {value !== "" && (
        <button
          type="button"
          id="search-bar-clear"
          onClick={() => onChange("")}
        >
          Clear
        </button>
      )}
    </section>
  );
}

export default SearchBar;
