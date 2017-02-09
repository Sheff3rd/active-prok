import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user'
import { ApiService } from './api.service'

@Injectable()
export class SessionService {
  constructor(private _http: Http,
              private _api: ApiService){ }

  create(user: User){
    let params: { user: User } = { 'user': user };
    return this._http.post(this._api.api('sessions'), params);
  }
}
