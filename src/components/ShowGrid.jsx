import ShowCard from "./ShowCard";
import "./ShowGrid.css";

function ShowGrid({ shows, emptyMessage = "No shows found." }) {
  if (shows.length === 0) {
    return <p>{emptyMessage}</p>;
  }
  return (
    <div className="show-grid">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default ShowGrid;
