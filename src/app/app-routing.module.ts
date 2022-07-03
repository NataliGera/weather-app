import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { CurrentWeatherComponent } from './components/main-layout/current-weather/current-weather.component';
import { FiveDayForecastComponent } from './components/main-layout/five-day-forecast/five-day-forecast.component';


const routes: Routes = [
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'five-day-forecast', component: FiveDayForecastComponent },
  { path: '', redirectTo: '/current-weather', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
