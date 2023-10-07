import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.API_URL}/api/categories`

  constructor(
    private http : HttpClient
  ) { }


  getAll(limit?: number, offset?: number) : Observable<Category[]> {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.http.get<Category[]>(this.apiUrl, { params });
  }
}
