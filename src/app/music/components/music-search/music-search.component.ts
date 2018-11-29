import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Albums';
import { MusicSearchService } from '../../services/music-search.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];

  albums$ = this.service.getAlbums().pipe(
    tap(albums => {
      this.albums = albums;
    }),
    catchError(error => (this.message = error.message))
  );

  query$ = this.service.getQuery();

  message: string;

  constructor(private service: MusicSearchService) { }

  search(query: string) {
    this.service.search(query);
  }

  ngOnInit() {
  }

}
