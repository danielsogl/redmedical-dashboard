import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WidgetItem } from 'src/app/models/widget.model';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  mapDataToWidget<T, K>(
    component: Type<T>,
    observable: Observable<K[]>
  ): Observable<WidgetItem<T, K>[]> {
    return observable.pipe(
      map((data) => {
        return data.map((data) => {
          return this.createWidgetItem(component, data);
        });
      })
    );
  }

  private createWidgetItem<T, K>(
    component: Type<T>,
    data: K
  ): WidgetItem<T, K> {
    const item = new WidgetItem(component, data);
    return item;
  }
}
