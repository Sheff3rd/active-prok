import { Component, OnInit } from '@angular/core'
import { Angular2TokenService } from 'angular2-token'

@Component({
  selector: 'app-counterparties',
  templateUrl: './counterparties.html',
  styleUrls: ['./counterparties.css']
})
export class CounterpartiesComponent implements OnInit {
  today: number = Date.now()
  types = ['client', 'vendor', 'other']

  counterparties: Array<{}>
  submitData = {}

  constructor(
    public _tokenService: Angular2TokenService,
  ){ }

  ngOnInit(){
    this.counterparties = []
    this._tokenService.get('counterparties')
      .subscribe(res => { this.counterparties = res.json()
    })
  }

  onCreate(){
    this._tokenService.post('counterparties', { counterparty: this.submitData })
      .subscribe(res => { this.counterparties.push(res.json())
                          console.log(res)
                        },
                 err => { console.log(err) }
      )

  }

}
