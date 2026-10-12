import "./ShowCard.css";
function ShowCard({ show }) {
  return (
    <article className="show-card">
      {show.posterUrl ? (
        <img
          className="show-card_poster"
          src={show.posterUrl}
          alt={show.title + " poster"}
        />
      ) : (
        <div className="show-card_placeholder">No poster</div>
      )}
      <h3 className="show-card_title">{show.title}</h3>
      <p className="show-card_summary">{show.summary}</p>

      <p className="show-card_year">
        {show.premiered ? show.premiered.slice(0, 4) : "TBA"}
      </p>

      <p className="show-card_rating">
        {show.rating ? show.rating.toFixed(1) : "Not Rated"}
      </p>
    </article>
  );
}

export default ShowCard;
