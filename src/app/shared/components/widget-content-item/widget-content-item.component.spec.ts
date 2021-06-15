import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { WidgetContentItemComponent } from './widget-content-item.component';
import { WidgetContentDirective } from './widget-content.directive';

describe('WidgetContentItemComponent', () => {
  let spectator: Spectator<WidgetContentItemComponent<any, any>>;
  const createComponent = createComponentFactory({
    component: WidgetContentItemComponent,
    declarations: [WidgetContentDirective],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });
});
