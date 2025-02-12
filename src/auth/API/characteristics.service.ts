import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characteristics } from '../Classes/characteristics';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private http_link: string = environment.api+"/production/characteristics";
  
  constructor(private http: HttpClient) { }

  get = (): Observable<Characteristics[]> => {
    return this.http.get<Characteristics[]>(`${this.http_link}/get`);
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

  uploadItem = (data: any): Observable<any> => {
    let fData: FormData = new FormData();
    fData.append("c_file",data.file);
    fData.append("fk_user_id", JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,fData);
  }


}
