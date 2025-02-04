import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupplierOrders } from '../Classes/supplier-orders';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SupplierOrdersService {

  private http_link: string = environment.api+"/commercial/supplier/order";

  constructor(private http: HttpClient) { }

  getItem = () : Observable<SupplierOrders[]> => {
    return this.http.get<SupplierOrders[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }
 
  uploadItem = (data: any): Observable<any> => {
    let FData: FormData = new FormData();
    FData.append("supplier_order_file",data.file);
    FData.append("fk_user_id",JSON.stringify(data.fk_user_id));

    return this.http.post<any>(`${this.http_link}/upload`,FData);
  }

}
