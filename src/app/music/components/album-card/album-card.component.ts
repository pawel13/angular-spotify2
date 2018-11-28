import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Album } from 'src/app/model/Albums';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input('album')
  album: Album;

  constructor() { }

  ngOnInit() {
  }

}
