import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RateSheet } from '../Classes/rate-sheet';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RatesheetService {

  private http_link: string = environment.api+"/commercial/rate/sheet";

  constructor(
    private http: HttpClient
  ) { }

  getItems = () : Observable<RateSheet[]> => {
    return this.http.get<RateSheet[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`, data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value)
  }


}
