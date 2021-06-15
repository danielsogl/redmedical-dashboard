import {
  createDirectiveFactory,
  SpectatorDirective,
} from '@ngneat/spectator/jest';

import { WidgetBaseDirective } from './widget-base.directive';

describe('WidgetBaseDirective', () => {
  let spectator: SpectatorDirective<WidgetBaseDirective>;
  const createDirective = createDirectiveFactory(WidgetBaseDirective);

  beforeEach(() => {
    spectator = createDirective(`<div appWidgetBase></div>`);
  });

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });
});
