export default function MovieModal({ show, onClose }) {
  if (!show) return null

  const summary = show.summary
    ? show.summary.replace(/<[^>]*>/g, '')
    : 'No summary available.'

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-button" onClick={onClose}>✕</button>

        {show.image?.original && (
          <img src={show.image.original} alt={show.name} />
        )}

        <h2>{show.name}</h2>
        <p><strong>Rating:</strong> ⭐ {show.rating?.average || 'N/A'}</p>
        <p><strong>Release:</strong> {show.premiered || 'N/A'}</p>
        <p><strong>Genre:</strong> {show.genres?.join(', ') || 'N/A'}</p>

        <h3>Overview</h3>
        <p>{summary}</p>

        <button className="close-modal-button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
