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
import { alternateArrays } from 'src/app/utils/array.utils';

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
    this.angularData = this.loadStackOverflowData('angular');
    this.typeScriptData = this.loadStackOverflowData('typescript');
    this.loadWeatherData();
  }

  private loadStackOverflowData(keyword: string) {
    const request = this.stackOverflowService.searchByKeyword(keyword);
    const mappedData = this.widgetService.mapDataToWidget(
      StackOverflowContentComponent,
      request
    );
    return mappedData;
  }

  private loadWeatherData() {
    // fetch weather data
    const weatherDataRequest = this.weatherService.weatherData();
    const weatherData = this.widgetService.mapDataToWidget(
      WeatherContentComponent,
      weatherDataRequest
    );
    // fetch stack overflow data
    const stackData = this.loadStackOverflowData('weather');
    const alternatedData = forkJoin([stackData, weatherData]).pipe(
      map((forkedResult) => alternateArrays(forkedResult[0], forkedResult[1]))
    );
    return alternatedData;
  }
}
