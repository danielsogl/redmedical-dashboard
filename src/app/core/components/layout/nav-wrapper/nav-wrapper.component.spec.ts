import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { NavWrapperComponent } from './nav-wrapper.component';

describe('NavWrapperComponent', () => {
  let spectator: Spectator<NavWrapperComponent>;
  const createComponent = createComponentFactory({
    component: NavWrapperComponent,
    imports: [NoopAnimationsModule, MatToolbarModule, MatSidenavModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render navbar title', () => {
    expect(spectator.query('span')?.textContent).toEqual(
      'Red Medical Dashboard'
    );
  });
});
