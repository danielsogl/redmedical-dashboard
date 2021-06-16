import { HttpErrorResponse } from '@angular/common/http';
import { Type } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WidgetItem } from 'src/app/models/widget.model';

export class BaseHttpService {
  constructor(private snackbar: MatSnackBar) {}

  /**
   * Displays a error toast message based on the error type.
   * If the error is an instance of `HttpErrorResponse` the
   * backend error will be displayed
   */
  handleRequestError(_error: unknown) {
    let errorMessage = 'Request error happened';
    this.snackbar.open(errorMessage, 'Ok', { duration: 2500 });
  }

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
