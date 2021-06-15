import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StackOverflowSearchResult } from 'src/app/models/stack-overflow.model';

@Injectable({
  providedIn: 'root',
})
export class StackOverflowService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.stackOverflowEndpoint;
  }

  // TODO: remove dummy endpoint at the end of the demo project
  searchByKeyword(keyword: string): Observable<StackOverflowSearchResult> {
    // build url
    const url = `${this.endpoint}${environment.production ? 'search' : ''}`;
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

    return this.http.get<StackOverflowSearchResult>(url, {
      params: environment.production ? queryParams : undefined,
    });
  }
}
