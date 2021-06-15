import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { StackOverflowContentComponent } from './components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from './components/weather-content/weather-content.component';
import { WidgetBaseDirective } from './components/widget-base/widget-base.directive';
import { WidgetContentItemComponent } from './components/widget-content-item/widget-content-item.component';
import { WidgetContentDirective } from './components/widget-content-item/widget-content.directive';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetBaseDirective,
    StackOverflowContentComponent,
    WeatherContentComponent,
    WidgetContentItemComponent,
    WidgetContentDirective,
  ],
  imports: [CommonModule, MatCardModule, MatListModule],
  exports: [WidgetComponent],
})
export class SharedModule {}
