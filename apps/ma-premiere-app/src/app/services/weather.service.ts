import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../models/weather';
import { HttpClient } from '@angular/common/http';


export const WEATHERAPIURLTOKEN = new InjectionToken<string>('WEATHERAPIURLTOKEN');


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private httpClient:HttpClient,
    @Inject(WEATHERAPIURLTOKEN) private apiUrl:string
  ) { }

  getAll():Observable<Weather[]>{
    return this.httpClient.get<Weather[]>(this.apiUrl);
  }

}
