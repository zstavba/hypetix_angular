import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AlternativeChipers } from '../Classes/alternative-chipers';
import { AlternativeChippersPartners } from '../Classes/alternative-chippers-partners';
import { FormGroup } from '@angular/forms';
import { AlternativeChippersShopping } from '../Classes/alternative-chippers-shopping';

@Injectable({
  providedIn: 'root'
})
export class AlternativeChipersService {

  private http_link: string = environment.api+"/coders/chipper";

  constructor(private http: HttpClient) { }
  
  createArticle = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/create/article`,data);
  }

  getItems = (): Observable<AlternativeChipers[]> => {
    return this.http.get<AlternativeChipers[]>(`${this.http_link}/get`);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  getInformation = (ID: string | null): Observable<AlternativeChipers> => {
    return this.http.get<AlternativeChipers>(`${this.http_link}/info/${ID}`);
  }

  getPartners = (ID: string | null): Observable<AlternativeChippersPartners[]> => {
    return this.http.get<AlternativeChippersPartners[]>(`${this.http_link}/partners/${ID}`)
  }

  addPartner = (ID: string | null, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/add/partner/${ID}`,data.value);
  }

  deletePartner = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/partners/delete/${ID}`);
  }

  getShoppingInformation  = (ID: string | null) : Observable<AlternativeChippersShopping> => {
    return this.http.get<AlternativeChippersShopping>(`${this.http_link}/get/shopping/${ID}`);
  }

  updateShopping = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/shopping/${ID}`,data.value)
  }

}
