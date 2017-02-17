import { Component, OnInit }                 from '@angular/core'
import { Angular2TokenService, SignInData }  from 'angular2-token';
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.html',
  styleUrls:   ['./login.css']
})
export class LoginComponent{
  private _signInData: SignInData = <SignInData>{}
  private _output: any

  constructor(
    private _router: Router,
    private _tokenService: Angular2TokenService){
      this._tokenService.init({
        apiBase: 'api/v1',
        signInPath: 'auth/sign_in'
      })
    }

  onSubmit() {
    this._output = null

    this._tokenService.signIn(this._signInData).subscribe(
      res => {
        this._signInData    = <SignInData>{};
        this._output        = res;
        this.redirect('')
      }, error => {
        this._signInData    = <SignInData>{};
        this._output        = error;
      }
    )
  }

  private redirect(redirectUrl): void {
    this._router.navigate([ redirectUrl ])
  }
}
