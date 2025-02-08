import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PerformanceWork } from '../Classes/performance-work';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';
import { fdatasync } from 'fs';
@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private http_link: string = environment.api+'/coders/performance';

  
  constructor(private http: HttpClient) { }

  get = (): Observable<PerformanceWork[]> => {
    return this.http.get<PerformanceWork[]>(`${this.http_link}/get`);
  }

  getInformation = (ID: number): Observable<PerformanceWork> => {
    return this.http.get<PerformanceWork>(`${this.http_link}/info/${ID}`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number,data: FormGroup):Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  uploadItems = (data: any): Observable<any> => {
    let fData: FormData = new FormData();
    fData.append("performance_file",data.file);
    fData.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,fData);
  }



}
