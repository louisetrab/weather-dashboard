import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  // Get request to the weather api. for getting geo information based on city name.
  public getCityGeo(cityName: string): Observable<any> {
    return <Observable<any>>this.http
      .get(environment.apiBaseUrl + '/geo/1.0/direct', {
        params: new HttpParams()
          .set('q', cityName)
          .set('appid', environment.apiKey),
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  // Get Request to the weather api. for getting weather information based on the lon and lat.
  public getCurrentWeatherStatus(lat: number, long: number): Observable<any> {
    return <Observable<any>>this.http
      .get(environment.apiBaseUrl + '/data/2.5/weather', {
        params: new HttpParams()
          .set('lat', lat)
          .set('lon', long)
          .set('units', environment.units)
          .set('appid', environment.apiKey),
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  /*
  public getHourlyWeatherStatus(lat: number, long: number): Observable<any> {
      return <Observable<any>> this.http.get(environment.apiBaseUrl + "/data/2.5/forecast/hourly", {
          params: new HttpParams()
              .set('lat', lat)
              .set('lon', long)
              .set('units', environment.units)
              .set('appid', environment.apiKey)
      }).pipe(map((response: any) => {return response;}));
  }

  public getDailyWeatherStatus(lat: number, long: number): Observable<any>{
      return <Observable<any>> this.http.get(environment.apiBaseUrl + "/data/2.5/forecast/daily", {
          params: new HttpParams()
              .set('lat', lat)
              .set('lon', long)
              .set('units', environment.units)
              .set('appid', environment.apiKey)
      }).pipe(map((response: any) => {return response;}));
  }
  */
}
