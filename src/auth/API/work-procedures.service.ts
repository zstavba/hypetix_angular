import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkProcedures } from '../Classes/work-procedures';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WorkProceduresService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  getList = () : Observable<WorkProcedures[]> => {
    return this.http.get<WorkProcedures[]>(`${this.http_link}/production/work/procedures/get`);
  }
}
