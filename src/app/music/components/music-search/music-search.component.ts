import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Albums';
import { MusicSearchService } from '../../services/music-search.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];
  message: string;

  constructor(private service: MusicSearchService) { }

  search(query: string) {
    this.service.getAlbums(query)
      .subscribe(
        albums => this.albums = albums,
        error => (this.message = error.message),
        () => console.log("completed!")
      );
  }

  ngOnInit() {
    // this.service
    //   .getAlbums()
    //   .subscribe(
    //     albums => this.albums = albums,
    //     error => (this.message = error.message),
    //     () => console.log("completed!")
    //   );
  }

}
