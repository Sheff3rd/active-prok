import { Component }             from '@angular/core'
import { Angular2TokenService }  from 'angular2-token'
import { Router }                from '@angular/router'

@Component({
  selector:    'app-navbar',
  templateUrl: './navbar.html'
})
export class NavbarComponent{
  private _showImprint: boolean = false;
  private _output: any;

  constructor(
    private _router: Router,
    private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'api/v1'
    })
  }

  logout() {
    this._output = null;

    this._tokenService.signOut().subscribe(
      res => {
        this._output     = res;
        this.redirect('login')
      }, error => this._output   = error
    )
  }

  private redirect(redirectUrl): void {
    this._router.navigate([ redirectUrl ])
  }
}
