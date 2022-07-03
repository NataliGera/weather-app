import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentWeather } from '../model/weather-app.model';
import { IForecast } from '../model/weather-app.model';
import { Observable } from 'rxjs';


const API_URL = 'https://api.openweathermap.org';
const API_KEY = '6bc1ddf39c566f61b3ff659046e2901b';

@Injectable({
  providedIn: 'root'
})
export class WeatherService  {

  city = 'Minsk';
  currentTimezone: number = 10800;
  isError: boolean = false;


  constructor(private http: HttpClient) { }

  getCurrentWeather(): Observable<ICurrentWeather> {
    return this.http.get<ICurrentWeather>(`${API_URL}/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`);
  }

  getForecast(): Observable<IForecast> {
    return this.http.get<IForecast>(`${API_URL}/data/2.5/forecast?q=${this.city}&appid=${API_KEY}&units=metric`);
  }
}
