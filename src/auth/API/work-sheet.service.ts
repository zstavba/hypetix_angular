import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkSheet } from '../Classes/work-sheet';
import { WorkSheetItem } from '../Classes/work-sheet-item';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WorkSheetService {

  private http_link: string = environment.api+"/workorder";

  constructor(private http: HttpClient) { }

  getWorkSheets = () : Observable<WorkSheet[]> => {
    return this.http.get<WorkSheet[]>(`${this.http_link}/work/sheet/get`);
  }

  createWorkSheet = (data: any) : Observable<any> => {
      return this.http.post<any>(`${this.http_link}/work/sheet/create`,data);
  }

  getInformation = (ID: string) : Observable<WorkSheet> => {
    return this.http.get<WorkSheet>(`${this.http_link}/work/sheet/info/${ID}`);
  }

  getItemsByID = (ID: string): Observable<WorkSheetItem[]> => {
    return this.http.get<WorkSheetItem[]>(`${this.http_link}/work/sheet/get/items/${ID}`);
  }

  deleteItemByID = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/work/sheet/delete/item/${ID}`);
  }

  createWorkSHeetItem = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/work/sheet/create/item`,data);
  }

  updateWorkSheetItem = (ID: number, data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/work/sheet/item/update/${ID}`, data);
  }

  updateWorkSheet = (ID: number, data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/work/sheet/update/data/${ID}`,data);
  }

  deleteWorkSheet = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/work/sheet/delete/${ID}`);
  }

}
