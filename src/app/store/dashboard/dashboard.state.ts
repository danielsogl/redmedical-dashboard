import { StackOverflowItem } from 'src/app/models/stack-overflow.model';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';
import { StackOverflowContentComponent } from 'src/app/shared/components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';

export interface DashboardStateModel {
  angularWidget: {
    data: WidgetItem<
      StackOverflowContentComponent | WeatherContentComponent,
      StackOverflowItem | Weather
    >[];
  };
  typeScriptWidget: {
    data: WidgetItem<
      StackOverflowContentComponent | WeatherContentComponent,
      StackOverflowItem | Weather
    >[];
  };
  weatherWidget: {
    data: WidgetItem<
      StackOverflowContentComponent | WeatherContentComponent,
      StackOverflowItem | Weather
    >[];
  };
}

export class LoadAngularData {
  static readonly type = '[Dashboard] Load Angular Data';
}

export class LoadTypeScriptData {
  static readonly type = '[Dashboard] Load TypeScript Data';
}

export class LoadWeatherData {
  static readonly type = '[Dashboard] Load Weather Data';
}
