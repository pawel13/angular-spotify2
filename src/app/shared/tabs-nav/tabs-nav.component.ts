import { Component, OnInit, Input, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-nav',
  templateUrl: './tabs-nav.component.html',
  styleUrls: ['./tabs-nav.component.scss']
})
export class TabsNavComponent implements OnInit {

  @Input()
  tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

}
