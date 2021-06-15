import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';

import { WeatherContentComponent } from '../weather-content/weather-content.component';
import { WidgetContentItemComponent } from './widget-content-item.component';
import { WidgetContentDirective } from './widget-content.directive';

describe('WidgetContentItemComponent', () => {
  let spectator: Spectator<WidgetContentItemComponent<unknown, unknown>>;

  const mockWeatherData: Weather = {
    Datum: '29.02.2016',
    Zeit: '23:15',
    'Temp. A.': -1.1,
    'Temp. 3': 39.6,
    'Feuchte A.': 92,
    Luftdruck: 968,
    Regen: 0.36,
    Wind: 13.6,
    Richtung: 345,
    Helligkeit: 0,
  };

  const createComponent = createComponentFactory({
    component: WidgetContentItemComponent,
    declarations: [WidgetContentDirective],
    entryComponents: [WeatherContentComponent],
    componentMocks: [WeatherContentComponent],
    imports: [MatListModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          item: new WidgetItem(WeatherContentComponent, mockWeatherData),
        },
      }))
  );

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render widget content', () => {
    spectator.component.ngAfterContentInit();
    expect(spectator.query(WeatherContentComponent)).toBeDefined();
    expect(spectator.query(WeatherContentComponent)?.data).toEqual(
      mockWeatherData
    );
  });
});
