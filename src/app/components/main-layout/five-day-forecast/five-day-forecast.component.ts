import { Component, OnInit } from '@angular/core';
import { IForecast } from '../../../shared/model/weather-app.model';
import { IList } from '../../../shared/model/weather-app.model';
import { WeatherService } from '../../../shared/service/weather.service';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.scss']
})

export class FiveDayForecastComponent implements OnInit {

  forecast!: IForecast;
  list: IList[] = [];
  timezone!: number;
  listWithinTimezone: IList[] = [];
  fiveDays: IList[] = [];
  hourly: IList[] = [];
  active!: IList;
  weekday!: number;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getForecastData();
  }

  getForecastData(): void {
  	this.weatherService.getForecast().subscribe((forecast: IForecast) => {
	    this.forecast = forecast;
      this.list = forecast.list;
      this.timezone = forecast.city.timezone;
      this.getListWithinTimezone(this.list, this.timezone);
      this.getListOfFiveDays(this.listWithinTimezone);
      this.active = this.fiveDays[0];
      this.weekday = this.fiveDays[0].dt;
      this.getListOfHoursOfOneDay(this.listWithinTimezone, this.getDateinSelectedBlock(this.fiveDays[0].dt));
    })
  }

  getListWithinTimezone(list: IList[], timezone: number): void {
    for (let elem of list) {
      elem.dt = (elem.dt + timezone - this.weatherService.currentTimezone) * 1000;
    }
    this.listWithinTimezone = list;
  }

  getListOfFiveDays(list: IList[]): void {
    this.fiveDays = [];
    let time: Date = new Date(list[0].dt);
    let hours: number = time.getHours();
    if (hours != 22 && hours != 23 && hours != 0) {
      this.fiveDays.push(list[0]);
    }

    let count: number = 0
    for (let i = 0; i < list.length; i++) {
      let time: Date = new Date(list[i].dt);
      let hours: number = time.getHours();
      if (hours === 22 || hours === 23 || hours === 0) {
        break;
      }
      count = i;
    }
    if (count === 0) {
      count = 1;
    }
    for (let i = count; i < list.length; i++) {
      if (this.fiveDays.length === 5) {
      	break;
      }
      let time: Date = new Date(list[i].dt);
      let hours: number = time.getHours();
      if (hours === 14 || hours === 15 || hours === 16) {
      	this.fiveDays.push(list[i]);
      }
    }
  }

  getListOfHoursOfOneDay(list: IList[], date: number): void {
    this.hourly = [];
    for (let i = 0; i < list.length; i++) {
      if (this.getDateinSelectedBlock(list[i].dt) === date) {
      	this.hourly.push(list[i]);
      }
    }
  }

  getDateinSelectedBlock(num: number): number {
    let day: number = new Date(num).getDate();
    return day;
  }
}
