import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {

  api(path:string) {
    return `/api/v1/${path}`
  }
}
