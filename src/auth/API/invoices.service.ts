import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Invoices } from '../Classes/invoices';
import { FormGroup } from '@angular/forms';
import { fdatasync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private http_link: string = environment.api+"/commercial/invoices"

  constructor(
    private http: HttpClient
  ) { }

  get = (): Observable<Invoices[]> => {
    return this.http.get<Invoices[]>(`${this.http_link}/get`);
  }

  create = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }
 
  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  uploadItems = (data: any): Observable<any> => {
    let Fdata: FormData = new FormData();
    Fdata.append("invoices_file",data.file);
    Fdata.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,Fdata);

  }

}