import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { WidgetContentItemComponent } from '../widget-content-item/widget-content-item.component';
import { WidgetContentDirective } from '../widget-content-item/widget-content.directive';
import { WidgetComponent } from './widget.component';

xdescribe('WidgetComponent', () => {
  let spectator: Spectator<WidgetComponent<any, any>>;
  const createComponent = createComponentFactory({
    component: WidgetComponent,
    declarations: [WidgetContentItemComponent, WidgetContentDirective],
    imports: [MatCardModule, MatListModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          title: 'Foo',
          loading: false,
          items: [],
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
