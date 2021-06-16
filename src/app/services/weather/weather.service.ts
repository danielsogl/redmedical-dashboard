import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Weather } from 'src/app/models/weather.model';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';
import { environment } from 'src/environments/environment';

import { BaseHttpService } from '../base/base-http.service';
import { WidgetBaseService } from '../base/widget-base.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService extends BaseHttpService {
  private readonly endpoint: string;

  constructor(private http: HttpClient, snackbar: MatSnackBar) {
    super(snackbar);
    this.endpoint = environment.weatherEndpoint;
  }

  /**
   * Returns a list of weather items.
   *
   * If a error happens a empty array will be returned
   */
  private weatherData(): Observable<Weather[]> {
    return this.http.get<Weather[]>(this.endpoint).pipe(
      catchError((error: unknown) => {
        super.handleRequestError(error);
        return [];
      })
    );
  }

  getWidgetItems() {
    const request = this.weatherData();
    const mappedData = this.mapDataToWidget(WeatherContentComponent, request);
    return mappedData;
  }
}
