import { IAlbum } from "../interfaces/interfaces";

const discography: IAlbum[] = [
  {
    id: 0,
    title: "Birth Of The Cool",
    year: 1950,
    cover: "/images/birth-of-the-cool/cover.jpg",
    songs: [
      { title: "Jeru", track: "/tracks/birth-of-the-cool/A01.flac" },
      { title: "Move", track: "/tracks/birth-of-the-cool/A02.flac" },
      { title: "Godchild", track: "/tracks/birth-of-the-cool/A03.flac" },
      { title: "Budo", track: "/tracks/birth-of-the-cool/A04.flac" },
      {
        title: "Venus De Milo",
        track: "/tracks/birth-of-the-cool/A05.flac",
      },
      { title: "Rouge", track: "/tracks/birth-of-the-cool/A06.flac" },
      { title: "Boplicity", track: "/tracks/birth-of-the-cool/B01.flac" },
      { title: "Israel", track: "/tracks/birth-of-the-cool/B02.flac" },
      { title: "Deception", track: "/tracks/birth-of-the-cool/B03.flac" },
      { title: "Rocker", track: "/tracks/birth-of-the-cool/B04.flac" },
      {
        title: "Moondreams",
        track: "/tracks/birth-of-the-cool/B05.flac",
      },
      {
        title: "Darn That Dream",
        track: "/tracks/birth-of-the-cool/B06.flac",
      },
    ],
  },
  {
    id: 1,
    title: "Dig",
    year: 1951,
    cover: "/images/dig/cover.jpg",
    songs: [
      { title: "Dig", track: "/tracks/dig/01.flac" },
      { title: "It's Only A Paper Moon", track: "/tracks/dig/02.flac" },
      { title: "Denial", track: "/tracks/dig/03.flac" },
      { title: "Bluing", track: "/tracks/dig/04.flac" },
      { title: "Out Of The Blue", track: "/tracks/dig/05.flac" },
      { title: "Conception", track: "/tracks/dig/06.flac" },
      { title: "My Old Flame", track: "/tracks/dig/07.flac" },
    ],
  },

  {
    id: 2,
    title: "Blue Haze",
    year: 1954,
    cover: "/images/blue-haze/cover.jpg",
    songs: [
      {
        title: "Bag's Groove (take 1)",
        track: "/tracks/blue-haze/01.flac",
      },
      {
        title: "Bag's Groove (take 2)",
        track: "/tracks/blue-haze/02.flac",
      },
      { title: "Airegin", track: "/tracks/blue-haze/03.flac" },
      { title: "Oleo", track: "/tracks/blue-haze/04.flac" },
      {
        title: "But Not For Me (take 2)",
        track: "/tracks/blue-haze/05.flac",
      },
      { title: "Doxy", track: "/tracks/blue-haze/06.flac" },
      {
        title: "But Not For Me (take 1)",
        track: "/tracks/blue-haze/07.flac",
      },
    ],
  },

  {
    id: 3,
    title: "Bags Groove",
    year: 1954,
    cover: "/images/bags-groove/cover.jpg",
    songs: [
      {
        title: "I'll Remember April",
        track: "/tracks/bags-groove/01.flac",
      },
      { title: "Four", track: "/tracks/bags-groove/02.flac" },
      { title: "Old Devil Moon", track: "/tracks/bags-groove/03.flac" },
      { title: "Smooch", track: "public/tracks/bags-groove/04.flac" },
      { title: "Blue Haze", track: "public/tracks/bags-groove/05.flac" },
      {
        title: "When Lights Are Low",
        track: "public/tracks/bags-groove/06.flac",
      },
      { title: "Tune Up", track: "public/tracks/bags-groove/07.flac" },
      { title: "Miles Ahead", track: "public/tracks/bags-groove/08.flac" },
    ],
  },
];

export default discography;
