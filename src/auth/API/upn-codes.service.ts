import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpnCodes } from '../Classes/upn-codes';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpnCodesService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<UpnCodes[]> => {
    return this.http.get<UpnCodes[]>(`${this.http_link}/defaults/upn/codes/get`);
  }
  getInformation = (ID: number): Observable<UpnCodes> => {
    return this.http.get<UpnCodes>(`${this.http_link}/defaults/upn/codes/get/info/${ID}`);
  }

}
