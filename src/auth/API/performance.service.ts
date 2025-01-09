import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PerformanceWork } from '../Classes/performance-work';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  private http_link: string = environment.api;

  
  constructor(private http: HttpClient) { }

  get = (): Observable<PerformanceWork[]> => {
    return this.http.get<PerformanceWork[]>(`${this.http_link}/coders/performance`);
  }

  getInformation = (ID: number): Observable<PerformanceWork> => {
    return this.http.get<PerformanceWork>(`${this.http_link}/coders/performance/info/${ID}`);
  }



}
