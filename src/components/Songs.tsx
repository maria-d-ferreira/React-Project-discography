import React from "react";
import { MdVolumeUp } from "react-icons/md";

import "./Songs.css";

interface Props {
  title: string;
}

const Songs: React.FC<Props> = props => {
  const { title } = props;

  return (
    <>
      <span>{title}</span>
      <button className="songs-button">
        <MdVolumeUp />
      </button>
    </>
  );
};

export default Songs;
