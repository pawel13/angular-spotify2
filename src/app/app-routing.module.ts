import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsViewComponent } from './playlists/components/playlists-view/playlists-view.component';
import { MusicSearchComponent } from './music/components/music-search/music-search.component';
import { AlbumDetailsComponent } from './music/components/album-details/album-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'playlists',
    pathMatch: 'full'
  }, 
  {
    path: 'playlists',
    component: PlaylistsViewComponent
  },
  {
    path: 'music',
    component: MusicSearchComponent
  },
  {
    path: 'music/:id',
    component: AlbumDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'playlists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, 
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
