import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Album, AlbumResponse } from 'src/app/model/Albums';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of, empty, throwError } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { map, pluck, catchError } from 'rxjs/operators'

export const SEARCH_URL = new InjectionToken('Search API URL');

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  albums: Album[] = [
    {
      id: '123',
      name: 'Album Testowy 1',
      images: [
        {
          url: 'http://placekitten.com/300/300'
        }
      ]
    },
    {
      id: '1234',
      name: 'Album Testowy 2',
      images: [
        {
          url: 'http://placekitten.com/300/300'
        }
      ]
    },
    {
      id: '1235',
      name: 'Album Testowy 3',
      images: [
        {
          url: 'http://placekitten.com/300/300'
        }
      ]
    }
  ];

  constructor(
    @Inject(SEARCH_URL) private api_url: string,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getAlbums(query = "batman"): Observable<Album[]> {
    return this.http.get<AlbumResponse>(this.api_url, {
      params: {
        type: "album",
        q: query
      }
    })
    .pipe(
      map(resp => resp.albums.items)
    );
  }
}
