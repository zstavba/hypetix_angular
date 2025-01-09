import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceType } from '../Classes/price-type';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PriceTypeService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<PriceType[]> => {
    return this.http.get<PriceType[]>(`${this.http_link}/commercial/price/type/get`);
  }


  uplod = (data: any): Observable<any>   => {
    let formData: FormData = new FormData();
    formData.append("price_type_file",data.price_type_file);
    return this.http.post<any>(`${this.http_link}/commercial/price/type/upload`,formData);


  }


}
