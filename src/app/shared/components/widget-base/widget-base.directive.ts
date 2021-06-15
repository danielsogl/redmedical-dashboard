import { Directive, Input } from '@angular/core';

// because of ivy I had to use a directive with a selector
@Directive({
  selector: '[appWidgetBase]',
})
export class WidgetBaseDirective {
  @Input() title: string = '';
  @Input() loading: boolean = false;
}
