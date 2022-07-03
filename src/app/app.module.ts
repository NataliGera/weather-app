import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentWeatherComponent } from './components/main-layout/current-weather/current-weather.component';
import { FiveDayForecastComponent } from './components/main-layout/five-day-forecast/five-day-forecast.component';
import { HourlyComponent } from './components/main-layout/hourly/hourly.component';
import { ErrorComponent } from './components/error/error.component';
import {ErrorHandler} from "@angular/core";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentWeatherComponent,
    FiveDayForecastComponent,
    HourlyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: ErrorHandler, useClass: ErrorComponent}],
  bootstrap: [AppComponent]
})
export class AppModule { }
