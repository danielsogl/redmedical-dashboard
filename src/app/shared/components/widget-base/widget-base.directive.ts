import { Directive, Input } from '@angular/core';

/**
 * Adds inputs to components via inheritance
 *
 * **Note:** since Ivy is used as view engine a selector musst be set
 */
@Directive({
  selector: '[appWidgetBase]',
})
export class WidgetBaseDirective {
  @Input() title: string = '';
}
