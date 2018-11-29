import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Albums';
import { MusicSearchService } from '../../services/music-search.service';
import { tap, catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss'],
  viewProviders: [MusicSearchService]
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

  constructor(private service: MusicSearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const query = this.route.snapshot.queryParamMap.get('q');
    this.route.queryParamMap.subscribe(queryParamMap => {
      const query = queryParamMap.get('q');
      if (query) {
        this.search(query);
      }
    })
  }

  search(query: string) {
    this.service.search(query);

    this.router.navigate(['/music'], {
      queryParams: {
        q: query
      },
      replaceUrl: true
    })
  }

}
