import { RouterModule }         from '@angular/router'
import { AuthGuard }            from './services'
import { Angular2TokenService } from 'angular2-token'

import { AppComponent } from './app.component'
import {
  CounterpartiesComponent,
  LoginComponent,
  NavbarComponent,
  RegisterComponent,
  HomeComponent
} from './components'

const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'counterparties', component: CounterpartiesComponent, canActivate:[AuthGuard]},
  {path: 'articles', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'reports', component: HomeComponent, canActivate: [AuthGuard]}
];

export const appRoutes = RouterModule.forRoot(routes)
