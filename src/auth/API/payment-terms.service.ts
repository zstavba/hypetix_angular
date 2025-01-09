import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PaymentTerms } from '../Classes/payment-terms';

@Injectable({
  providedIn: 'root'
})
export class PaymentTermsService {
  
  private http_link: string = environment.api+"/defaults";

  constructor(private http: HttpClient) { }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/payments/terms/create`,data.value);
  }

  getItems  = (): Observable<PaymentTerms[]> => {
    return this.http.get<PaymentTerms[]>(`${this.http_link}/payments/terms/get`);
  }


  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/payments/terms/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/payments/terms/update/${ID}`,data.value);
  }

}
