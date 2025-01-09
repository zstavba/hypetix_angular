import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeassurmentUnits } from '../Classes/meassurment-units';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MeassurmentUnitsService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<MeassurmentUnits[]> => {
    return this.http.get<MeassurmentUnits[]>(`${this.http_link}/coders/meassurment/units`)
  }

  getNumber = (value: number): Observable<MeassurmentUnits[]> => {
    return this.http.get<MeassurmentUnits[]>(`${this.http_link}/coders/meassurment/units/${value}`);
  }

  getInformation = (ID: number) : Observable<MeassurmentUnits> => {
    return this.http.get<MeassurmentUnits>(`${this.http_link}/coders/meassurment/units/info/${ID}`);
  }

  uploadFile = (formData: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/meassurment/units/upload`,formData);
  }

  createUnit = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/unit/create`,data);
  }

  deleteUnit = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/coders/meassurment/units/delete/${ID}`);
  }




}


