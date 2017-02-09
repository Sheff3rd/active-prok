import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user'

@Injectable()
export class SessionService {
  constructor(private _http: Http){ }

  create(user: User){
    let params: { user: User } = { 'user': user };
    return this._http
      .post('http://localhost:3000/sessions', { params: params });
  }
}
