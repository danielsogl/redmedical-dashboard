import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createServiceFactory,
  SpectatorService,
  SpyObject,
} from '@ngneat/spectator/jest';
import { NgxsModule, Store } from '@ngxs/store';
import { of, throwError } from 'rxjs';
import { StackOverflowItem } from 'src/app/models/stack-overflow.model';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';
import { StackOverflowService } from 'src/app/services/stack-overflow/stack-overflow.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { StackOverflowContentComponent } from 'src/app/shared/components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';

import { DashboardState } from './dashboard.actions';
import {
  LoadAngularData,
  LoadTypeScriptData,
  LoadWeatherData,
} from './dashboard.state';

const stackOverflowData: StackOverflowItem = {
  tags: ['javascript', 'typescript'],
  owner: {
    reputation: 1,
    user_id: 11190640,
    user_type: 'registered',
    profile_image: 'https://i.stack.imgur.com/sc45G.png?s=128&g=1',
    display_name: 'marry',
    link: 'https://stackoverflow.com/users/11190640/marry',
  },
  is_answered: false,
  view_count: 14,
  answer_count: 0,
  score: 0,
  last_activity_date: 1623754359,
  creation_date: 1623754359,
  question_id: 67984894,
  content_license: 'CC BY-SA 4.0',
  link: 'https://stackoverflow.com/questions/67984894/typescript-move-object-horizontally',
  title: 'Typescript move object horizontally',
};

const weatherData: Weather = {
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
};

describe('DashboardState', () => {
  let spectator: SpectatorService<DashboardState>;
  let stackService: SpyObject<StackOverflowService>;
  let weatherService: SpyObject<WeatherService>;
  let store: SpyObject<Store>;
  let snackBar: SpyObject<MatSnackBar>;

  const createService = createServiceFactory({
    service: DashboardState,
    imports: [
      HttpClientTestingModule,
      MatSnackBarModule,
      NoopAnimationsModule,
      NgxsModule.forRoot([DashboardState]),
    ],
    mocks: [StackOverflowService, WeatherService],
  });

  beforeEach(() => {
    spectator = createService();
    stackService = spectator.inject(StackOverflowService);
    weatherService = spectator.inject(WeatherService);
    store = spectator.inject(Store);
    snackBar = spectator.inject(MatSnackBar);
  });

  it('should create', () => {
    expect(spectator.service).toBeDefined();
  });

  describe('test actions', () => {
    describe('LoadAngularData', () => {
      it('should dispatch successfully', async () => {
        const mockWidget = new WidgetItem(
          StackOverflowContentComponent,
          stackOverflowData
        );

        stackService.getWidgetItems.mockReturnValue(of([mockWidget]));
        await store.dispatch(new LoadAngularData()).toPromise();
        expect(store.selectSnapshot(DashboardState.angularData)).toEqual([
          mockWidget,
        ]);
      });

      it('should handle errors', async () => {
        stackService.getWidgetItems.mockReturnValue(
          throwError(new Error('Error'))
        );
        await store.dispatch(new LoadAngularData()).toPromise();
        expect(store.selectSnapshot(DashboardState.angularData)).toEqual([]);
      });
    });

    describe('LoadTypeScriptData', () => {
      it('should dispatch successfully', async () => {
        const mockWidget = new WidgetItem(
          StackOverflowContentComponent,
          stackOverflowData
        );

        stackService.getWidgetItems.mockReturnValue(of([mockWidget]));
        await store.dispatch(new LoadTypeScriptData()).toPromise();
        expect(store.selectSnapshot(DashboardState.typeScriptData)).toEqual([
          mockWidget,
        ]);
      });

      it('should handle errors', async () => {
        stackService.getWidgetItems.mockReturnValue(
          throwError(new Error('Error'))
        );
        await store.dispatch(new LoadTypeScriptData()).toPromise();
        expect(store.selectSnapshot(DashboardState.typeScriptData)).toEqual([]);
      });
    });

    describe('LoadWeatherData', () => {
      it('should dispatch successfully', async () => {
        const mockStackWidget = new WidgetItem(
          StackOverflowContentComponent,
          stackOverflowData
        );
        const mockWeatherWidget = new WidgetItem(
          WeatherContentComponent,
          weatherData
        );

        stackService.getWidgetItems.mockReturnValue(of([mockStackWidget]));
        weatherService.getWidgetItems.mockReturnValue(of([mockWeatherWidget]));
        await store.dispatch(new LoadWeatherData()).toPromise();
        expect(store.selectSnapshot(DashboardState.weatherData)).toEqual([
          mockStackWidget,
          mockWeatherWidget,
        ]);
      });

      it('should handle errors', async () => {
        stackService.getWidgetItems.mockReturnValue(
          throwError(new Error('Error'))
        );
        weatherService.getWidgetItems.mockReturnValue(
          throwError(new Error('Error'))
        );
        await store.dispatch(new LoadAngularData()).toPromise();
        expect(store.selectSnapshot(DashboardState.weatherData)).toEqual([]);
      });
    });
  });
});
