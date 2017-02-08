import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models'
import { SessionService } from '../../services'

@Component({
  providers: [
    SessionService
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent{
  form: FormGroup;
  user: User = new User({});

  constructor(
    private _router: Router,
    private _sessionService: SessionService,
    fb: FormBuilder) {
    this.form = fb.group({
      'name': [''],
      'price': ['']
    })
   }


  onSubmit(): void {
    this._sessionService
      .create(this.user)
      .subscribe(_ => {
        this._router.navigate(['']);
      });
  }
}
