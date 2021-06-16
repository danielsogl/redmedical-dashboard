import { State, Selector } from '@ngxs/store';
import { DashboardStateModel } from './dashboard.state';

@State<DashboardStateModel>({
  name: 'dashboard',
  defaults: {},
})
export class DashboardState {}
