import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { WidgetComponent } from 'src/app/shared/components/widget/widget.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  const createComponent = createComponentFactory({
    component: DashboardComponent,
    imports: [SharedModule, MatGridListModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render dashboard widgets', () => {
    const widgets = spectator.queryAll(WidgetComponent);
    expect(widgets).toHaveLength(3);

    const tiles = spectator.queryAll(MatGridTile);
    expect(tiles).toHaveLength(3);

    // Angular widget
    expect(widgets[0].title).toEqual('Angular');
    expect(tiles[0].colspan).toEqual(1);
    expect(tiles[0].rowspan).toEqual(1);

    // TypeScript widget
    expect(widgets[1].title).toEqual('Weather');
    expect(tiles[1].colspan).toEqual(1);
    expect(tiles[1].rowspan).toEqual(2);

    // Weather widget
    expect(widgets[2].title).toEqual('TypeScript');
    expect(tiles[2].colspan).toEqual(1);
    expect(tiles[2].rowspan).toEqual(1);
  });
});
