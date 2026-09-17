export default function MovieCard({ show, onDetails }) {
  return (
    <div className="movie-card">
      {show.image?.medium ? (
        <img src={show.image.medium} alt={show.name} />
      ) : (
        <div className="no-image">No Image</div>
      )}

      <div className="movie-info">
        <h3>{show.name}</h3>
        <p>⭐ {show.rating?.average || 'N/A'}</p>
        <p>📅 {show.premiered || 'N/A'}</p>

        <button onClick={() => onDetails(show)}>See Details</button>
      </div>
    </div>
  )
}
