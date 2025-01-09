import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationalUnits } from '../Classes/organizational-units';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrganizationalUnitsService {

  private http_link: string = environment.api;

  
  constructor(private http: HttpClient) { }

  get = (): Observable<OrganizationalUnits[]> => {
    return this.http.get<OrganizationalUnits[]>(`${this.http_link}/defaults/organizational/units/get`)
  }

  getInformation = (ID: number): Observable<OrganizationalUnits> => {
    return this.http.get<OrganizationalUnits>(`${this.http_link}/defaults/organizational/units/get/info/${ID}`);
  }


}
