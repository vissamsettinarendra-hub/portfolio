import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      <div className="loader-orb"></div>

      <div className="loader-text">
        <span>&lt;</span>
        <span className="loader-name">
          VISSAMSETTI NARENDRA
        </span>
        <span>/&gt;</span>
      </div>

      <div className="loader-bar">
        <div className="loader-bar-fill"></div>
      </div>

    </div>
  );
}

export default Loader;