import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router'
import { appRoutes }      from './app.routes'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Angular2TokenService }             from 'angular2-token';
import { SimpleNotificationsModule }        from 'angular2-notifications'
import { AuthGuard }                        from './services'
import { HttpModule }     from '@angular/http'
import { AppComponent }   from './app.component';
import {
  CounterpartiesComponent,
  LoginComponent,
  NavbarComponent,
  HomeComponent,
  WorkspaceComponent
} from './components'
import { SerializePipe }  from './pipes'

@NgModule({
  declarations: [
    AppComponent,
    CounterpartiesComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    WorkspaceComponent,
    SerializePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    appRoutes,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    Angular2TokenService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
