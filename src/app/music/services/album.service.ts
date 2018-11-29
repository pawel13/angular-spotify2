import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/model/Albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbum(id: string) {
    return this.http.get<Album>(`https://api.spotify.com/v1/albums/${id}`);
  }
}
