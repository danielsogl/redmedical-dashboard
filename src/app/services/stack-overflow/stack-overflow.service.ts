import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  StackOverflowItem,
  StackOverflowSearchResult,
} from 'src/app/models/stack-overflow.model';
import { environment } from 'src/environments/environment';
import { BaseHttpService } from '../base/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class StackOverflowService extends BaseHttpService {
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
  searchByKeyword(keyword: string): Observable<StackOverflowItem[]> {
    // build url
    const url = `${this.endpoint}/search`;
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
      .pipe(
        map((result) => result.items),
        catchError((error: unknown) => {
          super.handleRequestError(error);
          return [];
        })
      );
  }
}
