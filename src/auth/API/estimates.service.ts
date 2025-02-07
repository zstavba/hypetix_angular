import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estimates } from '../Classes/estimates';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EstimatesService {

  private http_link: string = environment.api+"/commercial/estimates";

  constructor(
    private http: HttpClient
  ) { }

  getItems = (): Observable<Estimates[]> => {
    return this.http.get<Estimates[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value)
  }
  
  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  uploadItems = (data: any): Observable<any> => {
    let fdata: FormData = new FormData();
    fdata.append("estimates_file",data.file);
    fdata.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,fdata);
  }


}
