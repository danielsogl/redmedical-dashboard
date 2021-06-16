import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';

import { WeatherService } from './weather.service';

describe('HttpClient testing', () => {
  let spectator: SpectatorHttp<WeatherService>;
  const createHttp = createHttpFactory({
    service: WeatherService,
    imports: [NoopAnimationsModule, MatSnackBarModule],
  });

  beforeEach(() => (spectator = createHttp()));

  it('should get results by keyword', () => {
    spectator.service.weatherData().subscribe();
    spectator.expectOne('assets/data/weather.json', HttpMethod.GET);
  });

  it('should handle errors', (done) => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');

    spectator.service.weatherData().subscribe(
      () => {},
      () => {},
      () => done()
    );

    const request = spectator.expectOne(
      'assets/data/weather.json',
      HttpMethod.GET
    );
    request.error(errorEvent, { status, statusText });
  });
});
