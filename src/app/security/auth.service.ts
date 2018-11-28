import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

export class AuthConfig {
  url: string;
  client_id: string;
  response_type: string;
  redirect_uri: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = "";

  constructor(private config: AuthConfig) { }

  authorize() {

    const {
      client_id, redirect_uri, response_type, url
    } = this.config;

    const params = new HttpParams({
      fromObject: {
        client_id,
        redirect_uri,
        response_type
      }
    });

    sessionStorage.removeItem('token');
    location.href = `${url}?${params.toString()}`;
  }

  getToken() {
    this.token = JSON.parse(sessionStorage.getItem('token')!);

    if (!this.token && location.hash) {
      const params = new HttpParams({
        fromString: location.hash
      })
      this.token = params.get("#access_token") || "";
      sessionStorage.setItem('token', JSON.stringify(this.token))
      location.hash = '';
    }

    if (!this.token) {
      this.authorize();
    }

    return this.token;
  }
}
