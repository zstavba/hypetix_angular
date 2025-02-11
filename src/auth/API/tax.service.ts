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

  private http_link: string = environment.api+"/coders/tax";

  constructor(private http: HttpClient) { }

  get = (): Observable<Tax[]> => {
      return this.http.get<Tax[]>(`${this.http_link}/get`);
  }


  getNumber = (value: number): Observable<Tax[]> => {
    return this.http.get<Tax[]>(`${this.http_link}/get/${value}`);
  }  

  getInformation = (ID: number): Observable<Tax> => {
    return this.http.get<Tax>(`${this.http_link}/info/${ID}`);
  }

  createTax = (data: FormGroup) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteTax = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateTax = (ID: number, data: FormGroup) :  Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  uploadItem = (data: any): Observable<any> => {
    let fData: FormData = new FormData();
    fData.append('tax_file',data.file);
    fData.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,fData);
  }
}
