import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Album } from 'src/app/model/Albums';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

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
    private http: HttpClient
  ) { }

  getAlbums() {

    const request = this.http.get(this.api_url, {
      headers: {

      },
      params: {
      },
      // observe: 'response',
      // reportProgress: false
      // responseType: 'text'
    });

    return this.albums;
  }
}
