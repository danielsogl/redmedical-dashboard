import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { WeatherContentComponent } from './weather-content.component';

describe('WeatherContentComponent', () => {
  let spectator: Spectator<WeatherContentComponent>;
  const createComponent = createComponentFactory({
    component: WeatherContentComponent,
    imports: [MatListModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });
});
