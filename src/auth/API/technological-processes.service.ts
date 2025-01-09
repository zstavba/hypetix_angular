import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechnologicalProcesses } from '../Classes/technological-processes';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TechnologicalProcessesService {

  private http_link: string = environment.api;

  
  constructor(private http: HttpClient) { }

  get = (): Observable<TechnologicalProcesses[]> => {
    return this.http.get<TechnologicalProcesses[]>(`${this.http_link}/production/technological/processes/get`)
  }
}
