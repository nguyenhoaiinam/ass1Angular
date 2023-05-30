import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from '../interface/products';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>(`http://localhost:3000/products`)
  }
  getOneProduct(id: number): Observable<IProducts>{
    return this.http.get<IProducts>(`http://localhost:3000/products/${id}`)
  }
  deleteProduct(id: number): Observable<IProducts>{
    return this.http.delete<IProducts>(`http://localhost:3000/products/${id}`)
  }
  addProduct(product: IProducts):Observable<IProducts>{
    return this.http.post<IProducts>(`http://localhost:3000/products`, product)
  }
  editProduct(product: IProducts): Observable<IProducts>{
    return this.http.patch<IProducts>(`http://localhost:3000/products/${product.id}`, product)
  }
}
