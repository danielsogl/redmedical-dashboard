import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { WidgetBaseDirective } from './components/widget-base/widget-base.directive';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [WidgetComponent, WidgetBaseDirective],
  imports: [CommonModule, MatCardModule],
  exports: [WidgetComponent],
})
export class SharedModule {}
