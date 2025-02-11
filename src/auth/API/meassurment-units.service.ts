import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeassurmentUnits } from '../Classes/meassurment-units';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MeassurmentUnitsService {

  private http_link: string = environment.api+"/coders/meassurment/units";

  constructor(private http: HttpClient) { }

  get = (): Observable<MeassurmentUnits[]> => {
    return this.http.get<MeassurmentUnits[]>(`${this.http_link}`)
  }

  getNumber = (value: number): Observable<MeassurmentUnits[]> => {
    return this.http.get<MeassurmentUnits[]>(`${this.http_link}/${value}`);
  }

  getInformation = (ID: number) : Observable<MeassurmentUnits> => {
    return this.http.get<MeassurmentUnits>(`${this.http_link}/info/${ID}`);
  }

  uploadFile = (data: any): Observable<any> => {
    let fData: FormData = new FormData();
    fData.append("fk_user_id",JSON.stringify(data.fk_user_id));
    fData.append('em_file',data.file);
    return this.http.post<any>(`${this.http_link}/upload`,fData);
  }

  createUnit = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data);
  }

  deleteUnit = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }



}


