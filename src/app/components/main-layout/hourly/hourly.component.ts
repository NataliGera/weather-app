import { Component, Input, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/model/weather-app.model';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {

  @Input() hourly: IList[] = [];
  @Input() weekday: number = 0;

  constructor() { }

  ngOnInit(): void {

  }
}
