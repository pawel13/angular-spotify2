import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {

  playlists: Playlist[] = [
    {
      id: 123,
      name: 'Angular Hits 1',
      favourite: true,
      color: "#FF00FF"
    },
    {
      id: 1234,
      name: 'Angular Hits 2',
      favourite: false,
      color: "#BDB76B"
    },
    {
      id: 12334534,
      name: 'Angular Hits 3',
      favourite: true,
      color: "#FFFF00"
    }
  ];

  selected: Playlist = this.playlists[1];

  constructor() { }

  ngOnInit() {
  }

}
