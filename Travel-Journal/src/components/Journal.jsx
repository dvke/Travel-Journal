export default function Journal(props) {
  return (
    <div className="journal">
      <img src="https://source.unsplash.com/JmuyB_LibRo" alt="australia" />
      <div className="journal-details">
        <div className="location">
          <img src="./public/location-icon.png" alt="" />
          <span>Australia</span>
          <a href="https://goo.gl/maps/681n4jdijgdt3uGS6">
            View on Google Maps
          </a>
        </div>
        <h1>Sydney Opera House</h1>
        <div className="duration">12 Jan, 2021 - 24 Jan, 2021</div>
        <div className="description">
          The Sydney Opera House is a multi-venue performing arts centre in
          Sydney. Located on the banks of the Sydney Harbour, it is often
          regarded as one of the 20th century's most famous and distinctive
          buildings
        </div>
      </div>
    </div>
  );
}
