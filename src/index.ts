import '../styles/styles.scss';
import { SongsService } from './services/songs.service';


export class MusicPlayer {
  private songsService: SongsService;

  constructor() {
    this.songsService = new SongsService();

    this.loadSongs();
  }

  private loadSongs() {
    let songsHtml: string = '';

    this.songsService.getSongs().forEach(song => {
      let songTemplate = require("./templates/song-item.hbs");

      songsHtml += songTemplate(song);
    });

    document.getElementById('music-list').innerHTML = songsHtml;

  }
}

new MusicPlayer();