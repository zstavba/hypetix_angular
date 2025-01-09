import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrafficType } from '../Classes/traffic-type';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrafficTypeService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  get = () : Observable<TrafficType[]> => {
    return this.http.get<TrafficType[]>(`${this.http_link}/commercial/traffic/type/get`);
  }


}
