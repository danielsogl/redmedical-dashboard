import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StackOverflowItem } from 'src/app/models/stack-overflow.model';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';
import { StackOverflowService } from 'src/app/services/stack-overflow/stack-overflow.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WidgetService } from 'src/app/services/widget/widget.service';
import { StackOverflowContentComponent } from 'src/app/shared/components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';
import {
  alternateArrays,
  cutToSameLength,
  shuffleArray,
} from 'src/app/utils/array.utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  angularData!: Observable<
    WidgetItem<StackOverflowContentComponent, StackOverflowItem>[]
  >;
  typeScriptData!: Observable<
    WidgetItem<StackOverflowContentComponent, StackOverflowItem>[]
  >;
  weatherData!: Observable<
    WidgetItem<
      StackOverflowContentComponent | WeatherContentComponent,
      StackOverflowItem | Weather
    >[]
  >;

  constructor(
    private stackOverflowService: StackOverflowService,
    private weatherService: WeatherService,
    private widgetService: WidgetService
  ) {}

  ngOnInit() {
    this.angularData = this.loadStackOverflowData('angular2');
    this.typeScriptData = this.loadStackOverflowData('typescript');
    this.weatherData = this.loadWeatherData();
  }

  /**
   * Maps StackOverflowItems to WidgetItems based on a given search string
   */
  private loadStackOverflowData(keyword: string) {
    const request = this.stackOverflowService.searchByKeyword(keyword);
    const mappedData = this.widgetService.mapDataToWidget(
      StackOverflowContentComponent,
      request
    );
    return mappedData;
  }

  /**
   * Merges weather data and StackOverflow weather data items into one array.
   * The array will contain the same amount of both item types
   */
  private loadWeatherData() {
    // weather request
    const weatherDataRequest = this.weatherService.weatherData();
    // map weather data
    const weatherData = this.widgetService.mapDataToWidget(
      WeatherContentComponent,
      weatherDataRequest
    );

    // fetch stack overflow data
    const stackData = this.loadStackOverflowData('weather');

    // combine both arrays
    const alternatedData = forkJoin([stackData, weatherData]).pipe(
      // cut arrays to the same length based on the shortest array
      map((forkedResult) => cutToSameLength(forkedResult[0], forkedResult[1])),
      // cut result to 5 items per result
      map((forkedResult) => {
        return [forkedResult[0].splice(0, 5), forkedResult[1].splice(0, 5)];
      }),
      // shuffle weather data
      map((forkedResult) => {
        // @ts-expect-error: types will not be resolved correctly by the IDE
        return [forkedResult[0], shuffleArray(forkedResult[1])];
      }),
      // @ts-expect-error: types will not be resolved correctly by the IDE
      // alternate both arrays into one array
      map((forkedResult) => alternateArrays(forkedResult[0], forkedResult[1]))
    );
    return alternatedData;
  }
}
