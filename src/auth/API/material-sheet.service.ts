import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialSheet } from '../Classes/material-sheet';
import { MaterialSheetItem } from '../Classes/material-sheet-item';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MaterialSheetService {

  private http_link: string = environment.api+"/workorder";

  constructor(private http: HttpClient) { }

  createMaterialSheet = (data: any) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/material/sheet/create`, data);
  } 

  getList = (): Observable<MaterialSheet[]> => {
    return this.http.get<MaterialSheet[]>(`${this.http_link}/material/sheet/get/list`);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/material/sheet/delete/${ID}`);
  }

  getInformation = (ID: string): Observable<MaterialSheet> => {
    return this.http.get<MaterialSheet>(`${this.http_link}/material/sheet/get/info/${ID}`);
  }

  getItemsByID = (ID: string): Observable<MaterialSheetItem[]> => {
    return this.http.get<MaterialSheetItem[]>(`${this.http_link}/material/sheet/items/${ID}`);
  }

  createItem = (ID: string, data: any) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/material/sheet/create/item/${ID}`,data)
  } 

  updateUsage = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/material/sheet/update/usage`,data);
  }

  deleteMaterialSheetItem = (ID: string) : Observable<any> => {
      return this.http.delete<any>(`${this.http_link}/material/sheet/delete/item/${ID}`);
  }

}
