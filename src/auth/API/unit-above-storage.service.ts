import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitAboveStorage } from '../Classes/unit-above-storage';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UnitAboveStorageService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }


  get = (): Observable<UnitAboveStorage[]> => {
    return this.http.get<UnitAboveStorage[]>(`${this.http_link}/defaults/units/above/storage/get`);
  }


}

