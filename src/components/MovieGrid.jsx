import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies }) {
  if (movies.length === 0) {
    return <p>No Movies available at this moment.</p>;
  }
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
