// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8000/api/data/filter';

  constructor(private http: HttpClient) { }

  getDataWithFilters(filters: any): Observable<any[]> {
    let params = new HttpParams();
    // Set query parameters based on the filters
    for (const key in filters) {
      if (filters.hasOwnProperty(key) && filters[key] !== null && filters[key] !== undefined) {
        params = params.append(key, filters[key]);
      }
    }
    return this.http.get<any[]>(this.apiUrl, { params: params });
  }
}
