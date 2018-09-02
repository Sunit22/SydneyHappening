import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebServiceService } from './services//web-service.service';

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
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'events', component: EventsComponent },
      { path: 'registration', component: RegistrationComponent }
    ])
  ],
  providers: [WebServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
