import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/model/Albums';

@Component({
  selector: 'app-albums-grid',
  templateUrl: './albums-grid.component.html',
  styleUrls: ['./albums-grid.component.scss']
})
export class AlbumsGridComponent implements OnInit {

  @Input('albums')
  albums: Album[];

  constructor() { }

  ngOnInit() {
  }

}
