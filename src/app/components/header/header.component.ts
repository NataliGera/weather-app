import { Component, Output, EventEmitter, OnInit, NgZone} from '@angular/core';
import { WeatherService } from '../../shared/service/weather.service';
import { ICurrentWeather } from '../../shared/model/weather-app.model';
import { IForecast } from '../../shared/model/weather-app.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  cityName: string = this.weatherService.city;


  constructor(private weatherService: WeatherService, private router: Router, private zone: NgZone) { }

  @Output() changeDataCurrentWeather = new EventEmitter<ICurrentWeather>();
  @Output() changeDataForecast = new EventEmitter<IForecast>();


  ngOnInit(): void {
    this.getCityName();
  }

  setDataCurrentWeather() {
    this.changeDataCurrentWeather.emit();
  }

  setDataForecast() {
    this.changeDataForecast.emit();
  }

  getCityName(): string {
    return this.weatherService.city = this.cityName;
  }

  showError() {
    if (this.weatherService.isError) {
      this.zone.run(() => {this.router.navigate(['**'])});
    }
  }
}
