import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NotesPrivateComponent } from './notes-private/notes-private.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DcComponent } from './dc/dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    NotesPrivateComponent,
    BurbankComponent,
    ChicagoComponent,
    DcComponent,
    DallasComponent,
    SanjoseComponent,
    SeattleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule // <--- Our routing rules
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
