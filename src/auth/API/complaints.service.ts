import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaints } from '../Classes/complaints';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  private http_link: string = environment.api+"/commercial/complaints";

  constructor(
    private http: HttpClient
  ) { }

  get = (): Observable<Complaints[]> => {
    return this.http.get<Complaints[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return  this.http.delete<any>(`${this.http_link}/delete/${ID}`)
  }

  updateItem = (ID:number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }
 

}
