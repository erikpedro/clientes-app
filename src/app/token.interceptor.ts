import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenSting = localStorage.getItem('access_token');

    if( tokenSting ){
        const token = JSON.parse(tokenSting);
        const jwt = token.access_token;
        request = request.clone({
          setHeaders : {
            Authorization: 'Bearer ' + jwt
          }
        })
    }


    return next.handle(request);
  }
}
