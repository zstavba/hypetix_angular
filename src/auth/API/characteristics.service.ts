import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characteristics } from '../Classes/characteristics';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  get = (): Observable<Characteristics[]> => {
    return this.http.get<Characteristics[]>(`${this.http_link}/production/characteristics/get`);
  }

}
