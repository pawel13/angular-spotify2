import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../../services/music-search.service';
import { AlbumService } from '../../services/album.service';
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('id')),
    filter(id => id !== null),
    switchMap(id => this.service.getAlbum(id!)),
  );

  constructor(
    private service: AlbumService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
