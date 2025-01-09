import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackToProduction } from '../Classes/back-to-production';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BackToProductionService {
  private http_link: string = environment.api+"/workorder";




  constructor( private http: HttpClient ) { }

  getList = (): Observable<BackToProduction[]> => {
    return this.http.get<BackToProduction[]>(`${this.http_link}/back/to/production/get/list`);
  }

  create = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/back/to/production/create`, data);
  }

  getInformation = (ID: string) : Observable<BackToProduction> => {
    return this.http.get<BackToProduction>(`${this.http_link}/back/to/production/get/info/${ID}`);
  }

}
