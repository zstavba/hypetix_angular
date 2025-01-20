import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrafficType } from '../Classes/traffic-type';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TrafficTypeService {

  private http_link: string = environment.api+"/commercial/traffic/type";
  
  constructor(private http: HttpClient) { }

  get = () : Observable<TrafficType[]> => {
    return this.http.get<TrafficType[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  uploadItems = (data: any): Observable<any> => {
    let fd: FormData = new FormData();
    fd.append("fk_user_id",JSON.stringify(data.fk_user_id));
    fd.append('tt_file',data.file);
    return this.http.post<any>(`${this.http_link}/upload`,fd);

  }


}
