import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  title: string;

  @HostBinding('class.card')
  card = true;

  open = false;

  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.open = !this.open;
  }

}
