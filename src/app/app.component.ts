import { Component }       from '@angular/core';
import { NavbarComponent } from './components'
import { NotificationsService } from 'angular2-notifications'

@Component({
  selector:    'app-root',
  templateUrl: './app.html'
})

export class AppComponent {
  constructor(
    private _notifyService: NotificationsService
  ){ }

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    showProgressBar: false,
    preventDuplicates: true,
  }
}
