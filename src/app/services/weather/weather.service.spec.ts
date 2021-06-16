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
  });

  beforeEach(() => (spectator = createHttp()));

  it('should create', () => {
    expect(spectator.service).toBeDefined();
  });

  it('should get widget weather items', (done) => {
    spectator.service.getWidgetItems().subscribe((result) => {
      expect(result).toHaveLength(1);
      done();
    });
    const req = spectator.expectOne('assets/data/weather.json', HttpMethod.GET);
    req.flush([
      {
        Datum: '01.01.2016',
        Zeit: '00:00',
        'Temp. A.': 1.6,
        'Temp. 3': -38.8,
        'Feuchte A.': 94,
        Luftdruck: 977,
        Regen: 0,
        Wind: 5,
        Richtung: 150,
        Helligkeit: 0,
      },
    ]);
  });
});
