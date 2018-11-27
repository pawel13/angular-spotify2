import { Component, OnInit, ViewEncapsulation, Output, Input } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemsListComponent implements OnInit {

  @Input('items') 
  playlists: Playlist[];

  @Output('selectedChange') 
  selectedChange = new EventEmitter<Playlist>();

  @Input()
  selected: Playlist;

  hover: Playlist;

  constructor() { }

  ngOnInit() {
  }

  select(playlist) {
    this.selectedChange.emit(playlist);
  }

  trackFn(index: number, item: Playlist) {
    return item.id
  }

}
