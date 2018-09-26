import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventService } from './services/event.service';
import { AuthenticationService } from './services//authentication.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'events', component: EventsComponent, data: {title: 'Event-Details'} },
      { path: 'registration', component: RegistrationComponent }
    ])
  ],
  providers: [EventService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
