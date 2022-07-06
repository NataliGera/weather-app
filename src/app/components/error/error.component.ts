import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../shared/service/weather.service';
import { ICurrentWeather } from '../../shared/model/weather-app.model';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  cityName!: string;
  currentWeather!: ICurrentWeather;


  constructor(private weatherService: WeatherService, private router: Router, private zone: NgZone) { }


  ngOnInit(): void {
    this.getCityName();
  }

  public handleError(error: any) {
    if (error.status === 404) {
      this.weatherService.isError = true;
      this.zone.run(() => {this.router.navigate(['**'])});
    }
  }

  getCityName(): void {
    this.cityName = this.weatherService.city;
  }

  getCurrentWeatherData(): void {
  	this.weatherService.getCurrentWeather().subscribe((currentWeather: ICurrentWeather) => {
	    this.currentWeather = currentWeather;
      this.weatherService.isError = false;
      this.zone.run(() => {this.router.navigate(['/'])});
    })
  }
}



