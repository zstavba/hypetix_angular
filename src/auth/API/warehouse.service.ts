import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../Classes/warehouse';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  getList = (): Observable<Warehouse[]> => {
    return this.http.get<Warehouse[]>(`${this.http_link}/coders/warehouse`)
  }

  upload = (data: any): Observable<any> => {
    let WF: FormData = new FormData();
    WF.append('warehouse_file',data.warehouse_file);
    return this.http.post<any>(`${this.http_link}/coders/warehouse/upload/file`,WF);
  }

}
