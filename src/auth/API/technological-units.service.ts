import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechnologicalUnits } from '../Classes/technological-units';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TechnologicalUnitsService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  get = () : Observable<TechnologicalUnits[]> => {
    return this.http.get<TechnologicalUnits[]>(`${this.http_link}/production/technological/units/get`)
  }

  getInformation = (ID: number) : Observable<TechnologicalUnits> => {
    return this.http.get<TechnologicalUnits>(`${this.http_link}/production/technological/units/get/info/${ID}`);
  }

}
