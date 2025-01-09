import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostCenters } from '../Classes/cost-centers';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CostCentersService {

  private http_link: string = environment.api;
  
  constructor( private http: HttpClient ) { }


  get = (): Observable<CostCenters[]> => {
    return this.http.get<CostCenters[]>(`${this.http_link}/defaults/cost/centers/get`)
  }

  getInformation = (ID: number): Observable<CostCenters> => {
    return this.http.get<CostCenters>(`${this.http_link}/defaults/cost/centers/get/info/${ID}`);
  }


}
