import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  @Input('playlist')
  playlist: Playlist;

  mode: string = 'show';

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.mode = 'edit';
  }

  cancel() {
    this.mode = 'show'
  }

  @Output()
  playlistChange = new EventEmitter<Playlist>();

  save(form) {
    const draft: Pick<Playlist, 'name' | 'favourite' |'color'> = form.value;
    const playlist = {
      ...this.playlist,
      ...draft
    }
    this.playlistChange.emit(playlist);
    this.mode = 'show'
  }

}