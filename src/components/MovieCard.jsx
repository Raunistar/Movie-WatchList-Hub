import { TMDB_IMAGE_BASE } from "../data/sampleMovies";
import "./MovieCard.css";
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      {movie.poster_path ? (
        <img
          className="movie-card_poster"
          src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
          alt={movie.title + " poster"}
        />
      ) : (
        <div className="movie-card_placeholder">No poster</div>
      )}
      <h3 className="movie-card_title">{movie.title}</h3>
      <p className="movie-card_overview">{movie.overview}</p>

      <p className="movie-card_year">
        {movie.release_date ? movie.release_date.slice(0, 4) : "TBA"}
      </p>

      <p className="movie-card_rating">
        {movie.vote_average ? movie.vote_average.toFixed(1) : "Not Rated"}
      </p>
    </article>
  );
}

export default MovieCard;
