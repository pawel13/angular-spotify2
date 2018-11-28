import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      setHeaders: {
        Authorization: "Bearer " + this.auth.getToken()
      }
    });

    return next.handle(authReq).pipe(
      catchError((err, caught) => {
        // return of([]);
        // return caught; ponownie sie przesubskrybuje na oryginalne zrodlo
        // return empty();
        if (err instanceof HttpErrorResponse && err.status == 401) {
          this.auth.authorize();
        }

        return throwError(new Error(err.error.error.message))
      })
    );
  }

}
