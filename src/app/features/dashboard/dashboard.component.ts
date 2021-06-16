import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StackOverflowItem } from 'src/app/models/stack-overflow.model';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';
import { StackOverflowContentComponent } from 'src/app/shared/components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';
import { DashboardState } from 'src/app/store/dashboard/dashboard.actions';
import {
  LoadAngularData,
  LoadTypeScriptData,
  LoadWeatherData,
} from 'src/app/store/dashboard/dashboard.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Select(DashboardState.angularData) angularData!: Observable<
    WidgetItem<StackOverflowContentComponent, StackOverflowItem>[]
  >;

  @Select(DashboardState.typeScriptData) typeScriptData!: Observable<
    WidgetItem<StackOverflowContentComponent, StackOverflowItem>[]
  >;
  @Select(DashboardState.weatherData) weatherData!: Observable<
    WidgetItem<
      StackOverflowContentComponent | WeatherContentComponent,
      StackOverflowItem | Weather
    >[]
  >;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch([
      new LoadAngularData(),
      new LoadTypeScriptData(),
      new LoadWeatherData(),
    ]);
  }
}
