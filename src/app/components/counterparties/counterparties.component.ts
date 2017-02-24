import { Component, OnInit } from '@angular/core'
import { Angular2TokenService } from 'angular2-token'
import { NotificationsService } from 'angular2-notifications'

@Component({
  selector: 'app-counterparties',
  templateUrl: './counterparties.html',
  styleUrls: ['./counterparties.css']
})
export class CounterpartiesComponent implements OnInit {
  today: number = Date.now()
  types = ['client', 'vendor', 'other']

  counterparties: Array<{}>
  submitData: any = {}

  constructor(
    public _tokenService: Angular2TokenService,
    private _notifyService: NotificationsService){
      this.submitData.party_type = 'client'
  }

  ngOnInit(){
    this.counterparties = []
    this._tokenService.get('counterparties')
      .subscribe(res => { this.counterparties = res.json() })
  }

  onCreate(){
    this._tokenService.post('counterparties', { counterparty: this.submitData })
      .subscribe(res => { this.counterparties.push(res.json())
                        },
                 err => { this._notifyService.error(err.statusText, err._body) }
      )
  }
}
