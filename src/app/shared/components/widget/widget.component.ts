import { Component, Input } from '@angular/core';
import { WidgetContent, WidgetItem } from 'src/app/models/widget.model';
import { WidgetBaseDirective } from '../widget-base/widget-base.directive';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent<T, K> extends WidgetBaseDirective {
  @Input() items: WidgetItem<WidgetContent<K>, K>[] = [];
}
