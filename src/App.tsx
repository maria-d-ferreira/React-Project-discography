import React from "react";

import discography from "./discography/discography";
import Album from "./components/Album";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <section>
        <ul className="album-list">
          {discography.map(album => (
            <Album
              key={album.id}
              cover={album.cover}
              title={album.title}
              year={album.year}
              songs={album.songs}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
