import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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



  public ngOnInit(): void {

  }

  // on keypress add to city.
  public onKey(value: string) {
    this.city = value;
  }

  // gets location and calls the to get the current weather for that city.
  public getLocation() {
    this.ws.getCityGeo(this.city).subscribe((geoData) => {
      this.getCurrentWeather(geoData[0].lat, geoData[0].lon);
    });
  }

  // Gets Current weather and adds the data to our global vars, so we can use them in our html. (some ugly stuff but it is what it is)
  public getCurrentWeather(lat: any, lon: any) {
    this.ws.getCurrentWeatherStatus(lat, lon).subscribe((weatherData) => {
      console.log(weatherData);
      this.currentTemp = weatherData.main.temp;
      this.weatherDesc = weatherData.weather[0].description;
      this.tempFeelsLike = weatherData.main.feels_like;
      this.tempMin = weatherData.main.temp_min;
      this.tempMax = weatherData.main.temp_max;
      this.humidity = weatherData.main.humidity;
      this.visibillity = weatherData.visibility;
      this.pressure = weatherData.main.pressure;
      this.windDeg = weatherData.wind.deg;
      this.windSpeed = weatherData.wind.speed;
    });
  }
}