import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tax } from '../Classes/tax';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<Tax[]> => {
      return this.http.get<Tax[]>(`${this.http_link}/coders/tax`);
  }


  getNumber = (value: number): Observable<Tax[]> => {
    return this.http.get<Tax[]>(`${this.http_link}/coders/tax/${value}`);
  }  

  getInformation = (ID: number): Observable<Tax> => {
    return this.http.get<Tax>(`${this.http_link}/coders/tax/info/${ID}`);
  }

  createTax = (data: FormGroup) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/tax/create`,data.value);
  }

  deleteTax = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/coders/tax/delete/${ID}`);
  }

  updateTax = (ID: number, data: FormGroup) :  Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/tax/update/${ID}`,data.value);
  }

}
