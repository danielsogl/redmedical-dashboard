import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  StackOverflowItem,
  StackOverflowSearchResult,
} from 'src/app/models/stack-overflow.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StackOverflowService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.stackOverflowEndpoint;
  }

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
      .pipe(map((result) => result.items));
  }
}
