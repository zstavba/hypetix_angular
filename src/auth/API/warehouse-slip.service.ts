import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseSlip } from '../Classes/warehouse-slip';
import { WarehouseSlipSaved } from '../Classes/warehouse-slip-saved';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WarehouseSlipService {
  
  private http_link: string = environment.api;

  
  constructor(private http: HttpClient) { }

  createSlip = (data: any) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/workorder/create/slip`,data);
  }

  getSlips = () : Observable<WarehouseSlip[]> => {
    return this.http.get<WarehouseSlip[]>(`${this.http_link}/workorder/list/slips`);
  }

  getSlipsByID = (ID:string) : Observable<WarehouseSlip[]> => {
    return this.http.get<WarehouseSlip[]>(`${this.http_link}/workorder/list/slips/by/${ID}`);
  }

  deleteSlipByID = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/workorder/delete/slip/${ID}`);
  }

  saveSlipItems = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/workorder/slip/save/slips`,data);
  }

  getSavedItems = (): Observable<WarehouseSlipSaved[]> => {
    return this.http.get<WarehouseSlipSaved[]>(`${this.http_link}/workorder/slip/get/saved`);
  }

  disableSavedItems = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/workorder/slip/disabled/saved`,data);
  }

}
