import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceType } from '../Classes/price-type';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PriceTypeService {

  private http_link: string = environment.api+"/commercial/price/type";

  constructor(private http: HttpClient) { }

  get = (): Observable<PriceType[]> => {
    return this.http.get<PriceType[]>(`${this.http_link}/get`);
  }


  uplod = (data: any): Observable<any>   => {
    let formData: FormData = new FormData();
    formData.append("price_type_file",data.price_type_file);
    return this.http.post<any>(`${this.http_link}/upload`,formData);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> =>{
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  } 


}
