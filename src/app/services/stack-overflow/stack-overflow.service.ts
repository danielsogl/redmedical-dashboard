import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  StackOverflowItem,
  StackOverflowSearchResult,
} from 'src/app/models/stack-overflow.model';
import { StackOverflowContentComponent } from 'src/app/shared/components/stack-overflow-content/stack-overflow-content.component';
import { environment } from 'src/environments/environment';

import { BaseHttpService } from '../base/base-http.service';
import { WidgetBaseService } from '../base/widget-base.service';

@Injectable({
  providedIn: 'root',
})
export class StackOverflowService
  extends BaseHttpService
  implements WidgetBaseService
{
  private readonly endpoint: string;

  constructor(private http: HttpClient, snackbar: MatSnackBar) {
    super(snackbar);
    this.endpoint = environment.stackOverflowEndpoint;
  }

  /**
   * Returns a list of StackOverflow items.
   *
   * If a error happens a empty array will be returned
   */
  private searchByKeyword(keyword: string): Observable<StackOverflowItem[]> {
    // build url
    const url = `${this.endpoint}/search`;
    // const url = 'assets/data/stack-overflow.json';
    // build query object
    const queryParams = new HttpParams({
      fromObject: {
        pagesize: 20,
        order: 'desc',
        sort: 'activity',
        site: 'stackoverflow',
        intitle: keyword,
      },
    });

    return this.http
      .get<StackOverflowSearchResult>(url, {
        params: queryParams,
      })
      .pipe(map((result) => result.items));
  }

  getWidgetItems(keyword: string) {
    const request = this.searchByKeyword(keyword);
    const mappedData = this.mapDataToWidget(
      StackOverflowContentComponent,
      request
    );
    return mappedData;
  }
}
