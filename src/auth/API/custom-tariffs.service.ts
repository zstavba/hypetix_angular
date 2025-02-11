import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomTariffs } from '../Classes/custom-tariffs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomTariffsService {

  private http_link: string = environment.api+"/coders/custom/tariffs";
  
  constructor(private http: HttpClient) { }

  get = (): Observable<CustomTariffs[]> => {
    return this.http.get<CustomTariffs[]>(`${this.http_link}`);
  }

  getNumber = (value: number): Observable<CustomTariffs[]> => {
    return this.http.get<CustomTariffs[]>(`${this.http_link}/${value}`);
  }


  getInormation = (ID: number): Observable<CustomTariffs> => {
    return this.http.get<CustomTariffs>(`${this.http_link}/info/${ID}`);
  }

  uploadFile = (formData: any): Observable<any> => {
    const data: FormData = new FormData();
    data.append("custom_tariffs_file",formData.file);
    data.append("fk_user_id",JSON.stringify(formData.fk_user_id))
    return this.http.post<any>(`${this.http_link}/upload/file`,data);

  }

  create = (data: any) : Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data);
  }

  delete = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value)
  }


}
