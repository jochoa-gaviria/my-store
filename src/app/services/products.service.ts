import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Product } from '../interfaces/product.model';
import { Observable, catchError, throwError } from 'rxjs';
import { CreateProductDto } from '../interfaces/create.product.model';
import { UpdateProductDto } from '../interfaces/update.product.model';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api`;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(limit: number, offset: number) : Observable<Product[]> {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.apiUrl}/products`, { params })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError(() => new Error('Algo está fallando en el server.'));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error('El producto no existe.'));
        }
        return throwError(() => new Error('Ups algo salió mal'));
      })
    );
  }

  getAllByCategory(categoryId: string, limit?: number, offset?: number) : Observable<Product[]> {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`, { params });
  }

  getOne(id: string) : Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
  }

  create(product: CreateProductDto) : Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, JSON.stringify(product));
  }

  update(product: UpdateProductDto, id: string) : Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, product);
  }

  delete(id: string) : Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`)
  }
}
