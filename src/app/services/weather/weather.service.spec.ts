import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';

import { WeatherService } from './weather.service';

describe('HttpClient testing', () => {
  let spectator: SpectatorHttp<WeatherService>;
  const createHttp = createHttpFactory(WeatherService);

  beforeEach(() => (spectator = createHttp()));

  it('should get results by keyword', () => {
    spectator.service.weatherData().subscribe();
    spectator.expectOne('assets/data/weather.json', HttpMethod.GET);
  });
});
