import { Observable } from 'rxjs';
import { WidgetItem } from 'src/app/models/widget.model';

export interface WidgetBaseService {
  getWidgetItems(...args: any): Observable<WidgetItem<unknown, unknown>[]>;
}
