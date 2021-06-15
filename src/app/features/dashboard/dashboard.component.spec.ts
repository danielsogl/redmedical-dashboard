import { MatCardModule } from '@angular/material/card';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  const createComponent = createComponentFactory({
    component: DashboardComponent,
    imports: [DashboardRoutingModule, MatGridListModule, MatCardModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render dashboard widgets', () => {
    const widgets = spectator.queryAll(MatGridTile);
    expect(widgets.length).toEqual(3);

    // Angular widget
    expect(widgets[0].colspan).toEqual(1);
    expect(widgets[0].rowspan).toEqual(1);

    // TypeScript widget
    expect(widgets[1].colspan).toEqual(1);
    expect(widgets[1].rowspan).toEqual(2);

    // Weather widget
    expect(widgets[2].colspan).toEqual(1);
    expect(widgets[2].rowspan).toEqual(1);
  });
});
