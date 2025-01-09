import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingMethod } from '../Classes/shipping-method';
import { environment } from '../../environments/environment.development';

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
    return this.http.get<ShippingMethod>(`${this.http_link}//commercial/shipping/method/get/info/${ID}`);
  }


  upload = (data: any): Observable<any> => {
    let formData: FormData = new FormData();
    formData.append("shipping_method_file",data.shipping_method_file);

    return this.http.post<any>(`${this.http_link}/commercial/shipping/method/upload`,formData)
  }
}
