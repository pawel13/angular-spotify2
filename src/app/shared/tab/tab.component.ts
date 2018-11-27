import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { EventEmitter } from '@angular/core';

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

  openChange = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  toggle() {
    this.openChange.emit();
  }

}
