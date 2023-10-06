import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Product } from '../interfaces/product.model';
import { Observable } from 'rxjs';
import { CreateProductDto } from '../interfaces/create.product.model';
import { UpdateProductDto } from '../interfaces/update.product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient,
  ) { }


  getAll() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  getAllByPage(limit: number, offset: number) : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, {
      params: { limit, offset }
    })
  }

  getOne(id: string) : Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  create(product: CreateProductDto) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl, JSON.stringify(product));
  }

  update(product: UpdateProductDto, id: string) : Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: string) : Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }
}
