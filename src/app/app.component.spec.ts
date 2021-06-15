import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule, CoreModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });
});
