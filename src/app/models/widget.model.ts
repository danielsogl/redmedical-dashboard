import { Type } from '@angular/core';

export class WidgetItem<T, K> {
  component: Type<T>;
  data: K;

  constructor(component: Type<T>, data: K) {
    this.component = component;
    this.data = data;
  }
}

export interface WidgetContent<T> {
  data: T;
}
