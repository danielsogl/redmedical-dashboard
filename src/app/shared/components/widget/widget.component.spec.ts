import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';

import { StackOverflowContentComponent } from '../stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from '../weather-content/weather-content.component';
import { WidgetBaseDirective } from '../widget-base/widget-base.directive';
import { WidgetContentItemComponent } from '../widget-content-item/widget-content-item.component';
import { WidgetContentDirective } from '../widget-content-item/widget-content.directive';
import { WidgetComponent } from './widget.component';

describe('WidgetComponent', () => {
  let spectator: Spectator<WidgetComponent<unknown, unknown>>;

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
    component: WidgetComponent,
    declarations: [
      WidgetComponent,
      WidgetBaseDirective,
      StackOverflowContentComponent,
      WidgetContentItemComponent,
      WidgetContentDirective,
    ],
    entryComponents: [WeatherContentComponent],
    imports: [MatCardModule, MatListModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          title: 'Foo',
          items: [new WidgetItem(WeatherContentComponent, mockWeatherData)],
        },
      }))
  );

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render title', () => {
    expect(spectator.query('mat-card-title')?.textContent?.trim()).toEqual(
      'Foo'
    );
  });

  it('should render widget content items', () => {
    expect(spectator.queryAll(WidgetContentItemComponent)).toHaveLength(1);
  });

  it('should handle empty items', () => {
    spectator.component.items = [];
    spectator.detectChanges();
    expect(spectator.query('No Data Available')).toBeDefined();
  });
});
