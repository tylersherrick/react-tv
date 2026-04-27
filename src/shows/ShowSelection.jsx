import "./shows.css";

export default function ShowSelection({ shows, setSelectedShow, setSelectedEpisode }) {
  return (
    <section className="shows">
      {shows.map((show) => (
        <div
          key={show.name}
          className="show"
          onClick={() => {
            setSelectedShow(show);
            setSelectedEpisode(null);
          }}
        >
          {show.name}
        </div>
      ))}
    </section>
  );
}