import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credits } from '../Classes/credits';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {
   
  private http_link: string = environment.api+"/commercial/credits";

  constructor(
    private http: HttpClient
  ) { }

  get = (): Observable<Credits[]> => {
    return this.http.get<Credits[]>(`${this.http_link}/get`);
  }

  create = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value)
  }

  delete = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  update = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  upload = (data: any): Observable<any> => {
    let d: FormData = new FormData();
    d.append("credits_file",data.file);
    d.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,d);
  }


}
