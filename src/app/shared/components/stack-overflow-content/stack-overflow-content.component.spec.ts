import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { StackOverflowContentComponent } from './stack-overflow-content.component';

describe('StackOverflowContentComponent', () => {
  let spectator: Spectator<StackOverflowContentComponent>;
  const createComponent = createComponentFactory({
    component: StackOverflowContentComponent,
    imports: [MatListModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });
});
