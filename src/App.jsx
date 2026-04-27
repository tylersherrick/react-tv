import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>

        <ShowSelection
          shows={tvShows}
          setSelectedShow={setSelectedShow}
          setSelectedEpisode={setSelectedEpisode}
        />
      </header>

      <main>
        <ShowDetails
          show={selectedShow}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />
      </main>
    </>
  );
}