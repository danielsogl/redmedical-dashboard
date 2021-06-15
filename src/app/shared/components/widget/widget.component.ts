import { Component } from '@angular/core';
import { WidgetBaseDirective } from '../widget-base/widget-base.directive';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent extends WidgetBaseDirective {}
