import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWidgetContentHost]',
})
export class WidgetContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
