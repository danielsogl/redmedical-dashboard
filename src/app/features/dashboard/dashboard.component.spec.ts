import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createComponentFactory,
  Spectator,
  SpyObject,
} from '@ngneat/spectator/jest';
import { Actions, NgxsModule, ofActionDispatched, Store } from '@ngxs/store';
import { merge } from 'rxjs';
import { StackOverflowItem } from 'src/app/models/stack-overflow.model';
import { Weather } from 'src/app/models/weather.model';
import { WidgetItem } from 'src/app/models/widget.model';
import { StackOverflowContentComponent } from 'src/app/shared/components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';
import { WidgetComponent } from 'src/app/shared/components/widget/widget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardState } from 'src/app/store/dashboard/dashboard.actions';
import {
  DashboardStateModel,
  LoadAngularData,
  LoadTypeScriptData,
  LoadWeatherData,
} from 'src/app/store/dashboard/dashboard.state';

import { DashboardComponent } from './dashboard.component';

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

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  let actions: SpyObject<Actions>;
  let store: SpyObject<Store>;

  const createComponent = createComponentFactory({
    component: DashboardComponent,
    imports: [
      SharedModule,
      NgxsModule.forRoot([DashboardState]),
      MatGridListModule,
      NoopAnimationsModule,
      HttpClientTestingModule,
      MatSnackBarModule,
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    actions = spectator.inject(Actions);
    store = spectator.inject(Store);

    store.reset({
      ...store.snapshot(),
      dashboard: {
        angularWidget: {
          data: [
            new WidgetItem(StackOverflowContentComponent, stackOverflowData),
          ],
        },
        typeScriptWidget: {
          data: [
            new WidgetItem(StackOverflowContentComponent, stackOverflowData),
          ],
        },
        weatherWidget: {
          data: [
            new WidgetItem(StackOverflowContentComponent, stackOverflowData),
            new WidgetItem(WeatherContentComponent, weatherData),
          ],
        },
      } as DashboardStateModel,
    });
  });

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should request data on ngOnInit', (done) => {
    const angularAction = actions.pipe(ofActionDispatched(LoadAngularData));
    const typeScriptAction = actions.pipe(
      ofActionDispatched(LoadTypeScriptData)
    );
    const weatherAction = actions.pipe(ofActionDispatched(LoadWeatherData));

    merge([angularAction, typeScriptAction, weatherAction]).subscribe(() => {
      done();
    });

    spectator.component.ngOnInit();
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
