import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingMethod } from '../Classes/shipping-method';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ShippingMethodService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<ShippingMethod[]> => {
    return this.http.get<ShippingMethod[]>(`${this.http_link}/commercial/shipping/method/get`)
  }

  getInformation = (ID: number) : Observable<ShippingMethod> => {
    return this.http.get<ShippingMethod>(`${this.http_link}/commercial/shipping/method/get/info/${ID}`);
  }


  upload = (data: any): Observable<any> => {
    let formData: FormData = new FormData();
    formData.append("shipping_method_file",data.file);
    formData.append("fk_user_id",JSON.stringify(data.fk_user_id))

    return this.http.post<any>(`${this.http_link}/commercial/shipping/method/upload`,formData)
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/commercial/shipping/method/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/commercial/shipping/method/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/commercial/shipping/method/update/${ID}`,data.value);
  }

}
