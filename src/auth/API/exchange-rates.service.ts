import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRates } from '../Classes/exchange-rates';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  private http_link: string = environment.api+"/commercial/exchange/rates";
  
  constructor(private http: HttpClient) { }

  get = (): Observable<ExchangeRates[]> => {
    return this.http.get<ExchangeRates[]>(`${this.http_link}/get`)
  }

  getInformation = (ID: number): Observable<ExchangeRates> => {
    return this.http.get<ExchangeRates>(`${this.http_link}/get/info/${ID}`)
  }

  upload = (data: any): Observable<any> => {
    let formData: FormData = new FormData();
    formData.append('exchange_rates_file',data.exchange_rates_file);
    return this.http.post<any>(`${this.http_link}/upload`,formData);
  }

  createItem = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

}
