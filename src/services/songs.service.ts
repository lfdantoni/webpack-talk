import { Song } from "../models/song";

export class SongsService {
  private songs: Array<Song>;

  constructor() {
    this.songs = new Array<Song>();

    for(let i=1; i <= 25; i++) {
      const minutes: string = Math.floor((Math.random() * 9) + 1).toString();
      let seconds: string = Math.floor((Math.random() * 59) + 1).toString();

      seconds = seconds.length === 1 ? `0${seconds}` : seconds;
      
      this.songs.push(
        {id: i, title: 'Song '+i, album: 'Black in Black', time: `${minutes}:${seconds}`, cover: 'https://images.991.com/large_image/ACDC+Black+Ice-448601.jpg'}
      )
    }
  }

  getSongs(): Array<Song> {
    return this.songs;
  }
}