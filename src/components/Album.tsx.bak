import React, { useState } from "react";
import Songs from "./Songs";
import { ISong } from "../interfaces/interfaces";

import "./Album.css";

interface Props {
  title: string;
  cover: string;
  year: number;
  songs: ISong[];
}

const Album: React.FC<Props> = props => {
  const { title, cover, year, songs } = props;

  const [showSongs, setShowSongs] = useState(false);

  const toggleShow = () => {
    setShowSongs(prevShowSongs => !prevShowSongs);
  };

  return (
    <>
      <li className="album">
        <img src={process.env.PUBLIC_URL + cover} alt={title} />
        <h2>{title}</h2>
        <h4>{year}</h4>
        <button onClick={toggleShow}>
          {!showSongs ? "Songs" : "Discograhy"}
        </button>
        {showSongs && (
          <ul className="songs-ul">
            {songs.map(song => (
              <li className="songs-li">
                <Songs key={song.title} title={song.title} />
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default Album;
