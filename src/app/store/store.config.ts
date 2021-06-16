import { NgxsDevtoolsOptions } from '@ngxs/devtools-plugin/src/symbols';
import { NgxsLoggerPluginOptions } from '@ngxs/logger-plugin/src/symbols';
import { NgxsConfig } from '@ngxs/store/src/symbols';
import { environment } from 'src/environments/environment';

import { DashboardState } from './dashboard/dashboard.actions';

export const STATES_MODULES = [DashboardState];

export const OPTIONS_CONFIG: Partial<NgxsConfig> = {
  /**
   * Run in development mode. This will add additional debugging features:
   * - Object.freeze on the state and actions to guarantee immutability
   *
   */
  developmentMode: false,
};

export const DEVTOOLS_REDUX_CONFIG: NgxsDevtoolsOptions = {
  /**
   * Whether the dev tools is enabled or note. Useful for setting during production.
   */
  disabled: environment.production,
};

export const LOGGER_CONFIG: NgxsLoggerPluginOptions = {
  /**
   * Disable the logger. Useful for prod mode..
   */
  disabled: environment.production,
};
