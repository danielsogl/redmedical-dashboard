import { MatCardModule } from '@angular/material/card';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { WidgetComponent } from './widget.component';

describe('WidgetComponent', () => {
  let spectator: Spectator<WidgetComponent>;
  const createComponent = createComponentFactory({
    component: WidgetComponent,
    imports: [MatCardModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          title: 'Foo',
          loading: false,
        },
      }))
  );

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render title', () => {
    expect(spectator.query('mat-card-title')?.textContent?.trim()).toEqual(
      'Foo'
    );
  });
});
