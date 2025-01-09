import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Traitor } from '../Classes/traitor';
import { TraitorItem } from '../Classes/traitor-item';
import { WarehouseFabricSaved } from '../Classes/warehouse-fabric-saved';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TraitorService {

  private http_link: string = environment.api;

  
  constructor(
    private http: HttpClient
  ) { }


  getList = () : Observable<Traitor[]> => {
    return this.http.get<Traitor[]>(`${this.http_link}/workorder/traitor/get/list`);
  }

  getInformation = (ID: string) : Observable<Traitor> => {
    return this.http.get<Traitor>(`${this.http_link}/workorder/traitor/get/info/${ID}`);
  }

  createObject = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/workorder/traitor/create/object`,data);
  }

  deleteTraitor = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/workorder/traitor/delete/${ID}`);
  }

  closeTraitor = (ID: number): Observable<any> => {
    return this.http.get(`${this.http_link}/workorder/traitor/close/${ID}`);
  }

  openTraitor = (ID: number): Observable<any> => {
    return this.http.get(`${this.http_link}/workorder/traitor/open/${ID}`);
  }

  getItemsByID = (ID: string): Observable<TraitorItem[]> => {
    return this.http.get<TraitorItem[]>(`${this.http_link}/workorder/traitor/items/${ID}`);
  }

  saveFabricData = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/workorder/traitor/save/fabric`,data);
  }

  getSavedFabric = (): Observable<WarehouseFabricSaved[]> => {
    return this.http.get<WarehouseFabricSaved[]>(`${this.http_link}/workorder/traitor/get/saved/fabric`);
  }



  
}
