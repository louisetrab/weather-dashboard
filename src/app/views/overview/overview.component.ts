import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { GaugeComponent } from 'src/app/modules/gauge/gauge.component';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  constructor(private ws: WeatherService) {}

  @Output() cords = new EventEmitter<object>();
  @Input() forecast: any;

  public city!: string;
  public country!: string;
  public date = new Date();

  public cityname!: string;

  // on keypress add to city.
  public onKey(value: string) {
    this.city = value;
  }

  public getLocation() {
    this.ws.getCityGeo(this.city).subscribe((geoData) => {
      var cordinates = { lon: undefined, lat: undefined };
      cordinates.lon = geoData[0].lon;
      cordinates.lat = geoData[0].lat;
      this.country = geoData[0].country;
      this.cords.emit(cordinates);
    });
  }

  ngOnInit(): void {
    this.forecast = {
      main: {
        temp: 0,
      },
      weather: [
        {
          description: 'N/A',
        },
      ],
    };
  }
}
