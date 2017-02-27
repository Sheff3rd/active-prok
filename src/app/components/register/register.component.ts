import { Component, OnInit } from '@angular/core'

// mocks
import { ARTICLES, COUNTERPARTIES } from './mocks'

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {
  submitData: any = {}

  articles: Array<{}>
  counterparties: Array<{}>

  constructor(){
    this.counterparties = COUNTERPARTIES
    this.articles = ARTICLES
  }

  ngOnInit() {
  }
}
