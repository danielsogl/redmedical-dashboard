import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from 'src/app/models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.weatherEndpoint;
  }

  weatherData(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.endpoint);
  }
}
