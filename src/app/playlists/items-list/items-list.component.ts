import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemsListComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  trackFn(index: number, item: Playlist) {
    return item.id
  }

}
