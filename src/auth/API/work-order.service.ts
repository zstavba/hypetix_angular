import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkOrder } from '../Classes/work-order';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  private http_link: string = environment.api;

  
  constructor(private http: HttpClient) { }

  createWorkOrder = (data: any) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/workorder/create`,data);
  }

  getList = (): Observable<WorkOrder[]> => {
    return this.http.get<WorkOrder[]>(`${this.http_link}/workorder/get/list`);
  }

  getInformation = (ID: string): Observable<WorkOrder> => {
    return this.http.get<WorkOrder>(`${this.http_link}/workorder/get/info/${ID}`);
  }

  deleteWorkOrder = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/workorder/delete/workorder/${ID}`);
  }

}
