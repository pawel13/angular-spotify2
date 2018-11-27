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
      color: "#c70151"
    },
    {
      id: 1234,
      name: 'Angular Hits 2',
      favourite: false,
      color: "#065535"
    },
    {
      id: 12334534,
      name: 'Angular Hits 3',
      favourite: true,
      color: "#ff7f50"
    }
  ];

  selected: Playlist = this.playlists[0];

  constructor() { }

  ngOnInit() {
  }

  save(draft: Playlist) {
    const index = this.playlists.findIndex(
      p => p.id == draft.id
    )
    if (index === -1) {
      return;
    }

    this.playlists.splice(index, 1, draft);
    this.selected = draft;
  }

}
