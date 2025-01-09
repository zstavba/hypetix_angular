import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeliveryConditions } from '../Classes/delivery-conditions';

@Injectable({
  providedIn: 'root'
})
export class DeliveryConditionsService {

  private http_link = environment.api;

  constructor(private http: HttpClient) { }

  getItems = (): Observable<DeliveryConditions[]> => {
    return this.http.get<DeliveryConditions[]>(`${this.http_link}/defaults/delivery/conditions/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/delivery/conditions/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/defaults/delivery/conditions/delete/${ID}`);
  }

  updateSelectedItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/delivery/conditions/update/${ID}`,data.value);
  }

  uploadSelectedFile = (data: any): Observable<any> => {
    let form_data: FormData = new FormData();
    form_data.append('dc_file',data.file);  
    return this.http.post<any>(`${this.http_link}/defaults/delivery/conditions/upload`,form_data);

  }

}
