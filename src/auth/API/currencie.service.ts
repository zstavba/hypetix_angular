import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currencie } from '../Classes/currencie';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CurrencieService {

  private http_link: string = environment.api+"/commercial/currencie";
  
  constructor(private http: HttpClient) { }

  get = (): Observable<Currencie[]> => {
    return this.http.get<Currencie[]>(`${this.http_link}/get`);
  }

  getInformation = (ID: number): Observable<Currencie> => {
    return this.http.get<Currencie>(`${this.http_link}/get/info/${ID}`)
  }



  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value)
  }

  deleteItem = (ID: number) : Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value);
  }

  uploadItem = (data: any): Observable<any> => {
    let formData: FormData = new FormData();
    formData.append('currencie_file',data.file);
    formData.append("fk_user_id", JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload`,formData);


  }

  

}
