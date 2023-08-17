import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  @Input() weatherDetails: any;

  ngOnInit(): void {
    this.weatherDetails = {
      main: {
        temp: 'N/A',
        temp_min: 'N/A',
        temp_max: 'N/A',
        humidity: 'N/A',
        pressure: 'N/A',
        feels_like: 'N/A',
      },
      wind: {
        deg: 'N/A',
        speed: 'N/A',
        gust: 'N/A',
      },
      visibility: 'N/A',
    };
  }
}
