import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../../../shared/model/weather-app.model';
import { IList } from '../../../shared/model/weather-app.model';
import { WeatherService } from '../../../shared/service/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent  implements OnInit {

  currentWeather!: ICurrentWeather;
  today!: number;
  ICON_URL!: string;
  sunrise!: number;
  sunset!: number;
  duration!: number;

  constructor(private weatherService: WeatherService ) { }


  ngOnInit(): void {
    this.getCurrentWeatherData();
  }


  getCurrentWeatherData(): void {
  	this.weatherService.getCurrentWeather().subscribe((currentWeather: ICurrentWeather) => {
	    this.currentWeather = currentWeather;
      this.today = (this.currentWeather.dt + this.currentWeather.timezone - this.weatherService.currentTimezone) * 1000;
      this.ICON_URL = `http://openweathermap.org/img/wn/${this.currentWeather.weather[0].icon}@2x.png`;
      this.sunrise = (this.currentWeather.sys.sunrise + this.currentWeather.timezone - this.weatherService.currentTimezone) * 1000;
      this.sunset = (this.currentWeather.sys.sunset + this.currentWeather.timezone - this.weatherService.currentTimezone) * 1000;
      this.duration = (this.sunset - this.sunrise) - (this.weatherService.currentTimezone * 1000);
    })
  }
}



