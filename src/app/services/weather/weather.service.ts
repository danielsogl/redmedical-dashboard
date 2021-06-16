import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';
import { environment } from 'src/environments/environment';

import { BaseHttpService } from '../base/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService extends BaseHttpService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    super();
    this.endpoint = environment.weatherEndpoint;
  }

  /**
   * Returns a list of weather items.
   *
   * If a error happens a empty array will be returned
   */
  private weatherData(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.endpoint);
  }

  getWidgetItems() {
    const request = this.weatherData();
    const mappedData = this.mapDataToWidget(WeatherContentComponent, request);
    return mappedData;
  }
}
