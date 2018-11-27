import { Component, OnInit, ViewChild, AfterViewInit, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsNavComponent } from '../tabs-nav/tabs-nav.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {

  @ContentChild(TabsNavComponent, { read: TabsNavComponent })
  navRef: TabsNavComponent;

  @ContentChildren(TabComponent)
  tabsList: QueryList<TabComponent>;

  // tabsList: TabComponent[] = []

  constructor() {
  }

  ngOnInit() {
  }

  toggle(active: TabComponent) {
    this.tabsList.forEach(tab => {
      tab.open = active === tab
    })
  }

  ngAfterContentInit() {
    this.tabsList.forEach(tab => {
      tab.openChange.subscribe(() => {
        this.toggle(tab);
      })
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.navRef.tabs = this.tabsList;
    })
  }

}
