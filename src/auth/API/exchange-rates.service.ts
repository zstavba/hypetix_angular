import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRates } from '../Classes/exchange-rates';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  get = (): Observable<ExchangeRates[]> => {
    return this.http.get<ExchangeRates[]>(`${this.http_link}/commercial/exchange/rates/get`)
  }

  getInformation = (ID: number): Observable<ExchangeRates> => {
    return this.http.get<ExchangeRates>(`${this.http_link}/commercial/exchange/rates/get/info/${ID}`)
  }

  upload = (data: any): Observable<any> => {
    
    let formData: FormData = new FormData();
    formData.append('exchange_rates_file',data.exchange_rates_file);
    return this.http.post<any>(`${this.http_link}/commercial/exchange/rates/upload`,formData);


  }

}
