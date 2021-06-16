import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
  SpyObject,
} from '@ngneat/spectator/jest';
import { forkJoin, of } from 'rxjs';
import { StackOverflowService } from 'src/app/services/stack-overflow/stack-overflow.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WidgetComponent } from 'src/app/shared/components/widget/widget.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';

const stackOverflowServiceMock = {
  getWidgetItems: () => of([]),
};

const weatherServiceMock = {
  getWidgetItems: () => of([]),
};

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  let stackOverflowService: SpyObject<StackOverflowService>;
  let weatherService: SpyObject<WeatherService>;

  const createComponent = createComponentFactory({
    component: DashboardComponent,
    imports: [
      SharedModule,
      MatGridListModule,
      NoopAnimationsModule,
      HttpClientTestingModule,
      MatSnackBarModule,
    ],
    providers: [
      mockProvider(StackOverflowService, stackOverflowServiceMock),
      mockProvider(WeatherService, weatherServiceMock),
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    stackOverflowService = spectator.inject(StackOverflowService);
    weatherService = spectator.inject(WeatherService);
  });

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should request data on ngOnInit', (done) => {
    spectator.component.ngOnInit();
    forkJoin([
      spectator.component.angularData,
      spectator.component.typeScriptData,
      spectator.component.weatherData,
    ]).subscribe((result) => {
      const angularData = result[0];
      const typeScriptData = result[1];
      const weatherData = result[2];

      const widgets = spectator.queryAll(WidgetComponent);
      expect(widgets[0].items).toEqual(angularData);
      expect(widgets[1].items).toEqual(weatherData);
      expect(widgets[2].items).toEqual(typeScriptData);

      done();
    });
  });

  describe('test widgets', () => {
    let widgets: WidgetComponent<unknown, unknown>[];
    let tiles: MatGridTile[];

    beforeEach(() => {
      widgets = spectator.queryAll(WidgetComponent);
      tiles = spectator.queryAll(MatGridTile);
    });

    it('should render angular widget', () => {
      // Angular widget
      expect(widgets[0].title).toEqual('Angular');
      expect(tiles[0].colspan).toEqual(1);
      expect(tiles[0].rowspan).toEqual(1);
    });

    it('should render typescript widget', () => {
      // Weather widget
      expect(widgets[2].title).toEqual('TypeScript');
      expect(tiles[2].colspan).toEqual(1);
      expect(tiles[2].rowspan).toEqual(1);
    });

    it('should render weather widget', () => {
      // TypeScript widget
      expect(widgets[1].title).toEqual('Weather');
      expect(tiles[1].colspan).toEqual(1);
      expect(tiles[1].rowspan).toEqual(2);
    });
  });
});
