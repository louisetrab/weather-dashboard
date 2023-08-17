import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public location: any;
  public weather: any;

  public city: any;
  public currentTemp = 30;
  public weatherDesc: any;
  public tempFeelsLike: any;
  public tempMin: any;
  public tempMax: any;
  public humidity: any;
  public visibillity: any;
  public pressure: any;
  public windDeg: any;
  public windSpeed: any;

  constructor(private ws: WeatherService) {}

  setLocation(value: any) {
    this.location = value;
    this.getCurrentWeather(this.location.lat, this.location.lon);
  }

  public ngOnInit(): void {}

  // Gets Current weather and adds the data to our global vars, so we can use them in our html. (some ugly stuff but it is what it is)
  public getCurrentWeather(lat: any, lon: any) {
    this.ws.getCurrentWeatherStatus(lat, lon).subscribe((weatherData) => {
      console.log(weatherData);
      this.weather = weatherData;
    });
  }
}
