export interface ISong {
  title: string;
  track: string;
}

export interface IAlbum {
  id: number;
  title: string;
  year: number;
  cover: string;
  songs: ISong[];
}
