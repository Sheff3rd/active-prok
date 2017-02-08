import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import {
  LoginComponent,
  NavbarComponent,
  HomeComponent
} from './components'

const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

export const appRoutes = RouterModule.forRoot(routes)
