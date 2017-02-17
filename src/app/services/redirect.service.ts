import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router'
import { Observable   } from 'rxjs/Observable'
import { Angular2TokenService } from 'angular2-token'
import { NotificationsService } from 'angular2-notifications'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected _router: Router,
    protected _tokenService: Angular2TokenService,
    private   _notifyService: NotificationsService
  ){ }

  canActivate(): Observable<boolean> | boolean {
    if (!this._tokenService.userSignedIn()) {
      this._router.navigate(['/login']);
      this._notifyService.alert(
        'Unauthorized user',
        'Please sign in into your account',
      )
      return false;
    }

    return true;
  }
}
