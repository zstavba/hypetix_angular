import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommercialStates } from '../Classes/commercial-states';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommercialStatesService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  getByType = (type: string): Observable<CommercialStates[]> => {
    return this.http.get<CommercialStates[]>(`${this.http_link}/commercial/states/get/type/${type}`);
  }

  deleteManyByType = (type: string): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/commercial/states/delete/${type}`);
  }

  deleteByID = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/commercial/states/delete/by/${ID}`);
  }


}
