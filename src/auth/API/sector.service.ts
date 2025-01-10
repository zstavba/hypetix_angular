import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../Classes/sector';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private http_link: string = environment.api+"/defaults/sector";

  constructor(
    private http: HttpClient
  ) { }

  getItems = (): Observable<Sector[]> => {
    return this.http.get<Sector[]>(`${this.http_link}/get`);
  }

  deleteItem = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }


}
