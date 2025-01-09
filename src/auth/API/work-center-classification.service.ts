import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkCenterClassification } from '../Classes/work-center-classification';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class WorkCenterClassificationService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = () : Observable<WorkCenterClassification[]> => {
    return this.http.get<WorkCenterClassification[]>(`${this.http_link}/defaults/work/center/classification/get`)
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/work/center/classification/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/defaults/work/center/classification/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/work/center/classification/update/${ID}`,data.value);
  }


}
