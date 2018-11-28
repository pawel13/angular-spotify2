import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, AuthConfig } from './auth.service';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AuthConfig,
      useValue: environment.authConfig
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class SecurityModule {

  constructor(private auth: AuthService) {
    this.auth.getToken();
  }
 }
