import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [HighlightDirective, UnlessDirective, CardComponent, TabComponent, TabsComponent],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, UnlessDirective, CardComponent, TabComponent, TabsComponent]
})
export class SharedModule { }
