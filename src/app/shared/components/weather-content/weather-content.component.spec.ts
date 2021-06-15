import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { Weather } from 'src/app/models/weather.model';

import { WeatherContentComponent } from './weather-content.component';

describe('WeatherContentComponent', () => {
  let spectator: Spectator<WeatherContentComponent>;
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
    component: WeatherContentComponent,
    imports: [MatListModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          data: mockWeatherData,
        },
      }))
  );

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render data', () => {
    expect(spectator.query('h3')?.textContent).toEqual('Weather Forecast');

    const details = spectator.queryAll('p');

    // Date
    expect(details[0].querySelector('span')?.textContent).toEqual(
      ' 29.02.2016 - 23:15'
    );

    // Current temperature
    expect(details[1].querySelector('span')?.textContent).toEqual(
      ' Current Temperature '
    );
    expect(details[1].querySelector('strong')?.textContent).toEqual(' -1.1°C ');

    // Air pressure
    expect(details[2].querySelector('span')?.textContent).toEqual(
      ' Air Pressure '
    );
    expect(details[2].querySelector('strong')?.textContent).toEqual(' 968hPa ');

    // Rain
    expect(details[3].querySelector('span')?.textContent).toEqual(
      ' Probability of rain '
    );
    expect(details[3].querySelector('strong')?.textContent).toEqual(' 0.36% ');
  });
});
