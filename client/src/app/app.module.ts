import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastaModule } from 'ngx-toasta';

import { EventService } from './services/event.service';
import { AuthenticationService } from './services//authentication.service';
import { RegisterationService } from './services/registeration.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    EventsComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    EventCreateComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToastaModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'events', component: EventsComponent, data: {title: 'Event-Details'} },
      { path: 'registration', component: RegistrationComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'eventCreate', component: EventCreateComponent }
    ])
  ],
  providers: [EventService, AuthenticationService, RegisterationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
