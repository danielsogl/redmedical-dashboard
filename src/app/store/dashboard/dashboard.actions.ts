import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { forkJoin } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StackOverflowService } from 'src/app/services/stack-overflow/stack-overflow.service';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { alternateArrays, cutToSameLength } from 'src/app/utils/array.utils';

import {
  DashboardStateModel,
  LoadAngularData,
  LoadTypeScriptData,
  LoadWeatherData,
} from './dashboard.state';

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {
    angularWidget: {
      data: [],
    },
    typeScriptWidget: {
      data: [],
    },
    weatherWidget: {
      data: [],
    },
  },
})
@Injectable()
export class DashboardState {
  constructor(
    private stackOverflowService: StackOverflowService,
    private weatherService: WeatherService,
    private snackbar: MatSnackBar,
    private zone: NgZone
  ) {}

  @Selector()
  static angularData(state: DashboardStateModel) {
    return state.angularWidget.data;
  }

  @Selector()
  static typeScriptData(state: DashboardStateModel) {
    return state.typeScriptWidget.data;
  }

  @Selector()
  static weatherData(state: DashboardStateModel) {
    return state.weatherWidget.data;
  }

  @Action(LoadAngularData)
  loadAngularData(ctx: StateContext<DashboardStateModel>) {
    return this.stackOverflowService.getWidgetItems('angular2').pipe(
      tap((result) => {
        ctx.patchState({
          angularWidget: {
            data: result,
          },
        });
      }),
      catchError(() => {
        this.handleRequestError();
        return [];
      })
    );
  }

  @Action(LoadTypeScriptData)
  loadTypeScriptData(ctx: StateContext<DashboardStateModel>) {
    return this.stackOverflowService.getWidgetItems('typescript').pipe(
      tap((result) => {
        ctx.patchState({
          typeScriptWidget: {
            data: result,
          },
        });
      }),
      catchError(() => {
        this.handleRequestError();
        return [];
      })
    );
  }

  @Action(LoadWeatherData)
  loadWeatherData(ctx: StateContext<DashboardStateModel>) {
    // get weather data
    const weatherData = this.weatherService.getWidgetItems();
    // get stack overflow data
    const stackData = this.stackOverflowService.getWidgetItems('weather');

    return forkJoin([stackData, weatherData]).pipe(
      // cut arrays to the same length based on the shortest array
      map((forkedResult) => cutToSameLength(forkedResult[0], forkedResult[1])),
      // cut result to 5 items per result
      map((forkedResult) => {
        return [forkedResult[0].splice(0, 5), forkedResult[1].splice(0, 5)];
      }),
      // @ts-expect-error: types will not be resolved correctly by the IDE
      map((forkedResult) => alternateArrays(forkedResult[0], forkedResult[1])),
      tap((result) => {
        ctx.patchState({
          weatherWidget: {
            data: result,
          },
        });
      }),
      catchError(() => {
        this.handleRequestError();
        return [];
      })
    );
  }

  private handleRequestError() {
    let errorMessage = 'Request error happened';
    this.zone.run(() => {
      this.snackbar.open(errorMessage, 'Ok', { duration: 2500 });
    });
  }
}
