import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
} from '@angular/core';
import { WidgetItem } from 'src/app/models/widget.model';

import { WidgetContentDirective } from './widget-content.directive';

@Component({
  selector: 'app-widget-content-item',
  templateUrl: './widget-content-item.component.html',
  styleUrls: ['./widget-content-item.component.scss'],
})
export class WidgetContentItemComponent<T, K> implements AfterContentInit {
  @Input() item!: WidgetItem<T, K>;

  @ViewChild(WidgetContentDirective, { static: true })
  contentHost!: WidgetContentDirective;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    this.loadComponent();
  }

  private loadComponent() {
    // create component by given type
    const componentFactory = this.cfr.resolveComponentFactory<T>(
      this.item.component
    );

    // assign template container the resolved component
    const viewContainerRef = this.contentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<T>(componentFactory);

    // assign data to component
    // TODO: add generic content interface
    // @ts-expect-error
    componentRef.instance.data = this.item.data;
  }
}
