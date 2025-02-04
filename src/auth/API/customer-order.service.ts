import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerOrder } from '../Classes/customer-order';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  private http_link: string = environment.api+"/commercial/customer/order";

  constructor(
    private http: HttpClient
  ) { }

  getItems = () : Observable<CustomerOrder[]> => {
    return this.http.get<CustomerOrder[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value)
  }

  deleteItem = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }
  
  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }


  uploadData = (data: any): Observable<any> => {
    let fData: FormData = new FormData();
    fData.append("customer_order_file",data.file);
    fData.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,fData);
  }



}
