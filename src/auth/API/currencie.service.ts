import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currencie } from '../Classes/currencie';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CurrencieService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  get = (): Observable<Currencie[]> => {
    return this.http.get<Currencie[]>(`${this.http_link}/commercial/currencie/get`);
  }

  getInformation = (ID: number): Observable<Currencie> => {
    return this.http.get<Currencie>(`${this.http_link}/commercial/currencie/get/info/${ID}`)
  }

  upload = (data: any) : Observable<any> => {
    let formData: FormData = new FormData();
    formData.append('currencie_file',data.currencie_file);
    return this.http.post<any>(`$${this.http_link}/commercial/currencie/upload`,formData);
  }
}
