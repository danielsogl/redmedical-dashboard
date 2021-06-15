import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { StackOverflowContentComponent } from './components/stack-overflow-content/stack-overflow-content.component';
import { WeatherContentComponent } from './components/weather-content/weather-content.component';
import { WidgetBaseDirective } from './components/widget-base/widget-base.directive';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetBaseDirective,
    StackOverflowContentComponent,
    WeatherContentComponent,
  ],
  imports: [CommonModule, MatCardModule],
  exports: [WidgetComponent],
})
export class SharedModule {}
