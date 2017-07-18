import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=59075ddaca78239f93d94313e1bded57`)
    .map( data => data.json() )
    .toPromise();
  }

}
