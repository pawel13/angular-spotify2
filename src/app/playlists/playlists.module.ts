import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsViewComponent } from './components/playlists-view/playlists-view.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';
import { ItemsListComponent } from './items-list/items-list.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlaylistsViewComponent, 
    ListItemComponent, 
    PlaylistDetailsComponent, 
    ItemsListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PlaylistsViewComponent
  ]
})
export class PlaylistsModule { }
