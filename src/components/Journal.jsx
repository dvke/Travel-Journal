export default function Journal(props) {
  return (
    <div className="journal">
      <img src={props.imageUrl} alt={props.location} />
      <div className="journal-details">
        <div className="location">
          <img src="/location-icon.png" alt="" />
          <span>{props.location}</span>
          👉<a href={`${props.googleMapsUrl}`}> View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <div className="duration">
          {props.startDate} - {props.endDate}
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}
