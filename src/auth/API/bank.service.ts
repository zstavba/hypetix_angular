import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../Classes/country';
import { ZipCode } from '../Classes/zip-code';
import { Language } from '../Classes/language';
import { Areas } from '../Classes/areas';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  // Country START
  getCountry = (): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.http_link}/bank/country`);
  }

  getNumberCuntry = (value: number): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.http_link}/bank/country/${value}`)
  }

  createCountry = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/bank/country/create`,data.value);
  }

  deleteCountry = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/bank/country/delete/${ID}`);
  }

  updateCountry = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/bank/country/update/${ID}`,data.value);
  }

  uploadCountry = (data: any): Observable<any> => {
    let form_data: FormData = new FormData();
    form_data.append('country_file',data.file);
    return this.http.post<any>(`${this.http_link}/bank/country/upload`,form_data);

  }

  // Country END 
  // Language START
  
  getLanguage = (): Observable<Language[]> => {
    return this.http.get<Language[]>(`${this.http_link}/defaults/languages/get`);
  }

  createLanguage = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/languages/create`,data.value);
  }
  
  deleteLanguage = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/defaults/languages/delete/${ID}`);
  }

  updateLanguage = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/languages/update/${ID}`,data.value);
  }

  uploadLanguage = (data: any): Observable<any> => {
    let form_data: FormData = new FormData();
    form_data.append('language_file',data.file);
    return this.http.post<any>(`${this.http_link}/defaults/languages/upload`,form_data)
  }
  
  // Language END
  // ZipCode START


  getZipCode = (): Observable<ZipCode[]> => {
    return this.http.get<ZipCode[]>(`${this.http_link}/bank/zipcode`)
  }

  getZIpCodeNumber = (value: number): Observable<ZipCode[]> => {
    return this.http.get<ZipCode[]>(`${this.http_link}/bank/zipcode/${value}`);
  }

  createZipCode = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/bank/zipcode/create`,data.value);
  }

  deleteZipCode = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/bank/zipcode/delete/${ID}`);
  }

  updateZipCode = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/bank/zipcode/update/${ID}`,data.value)
  }

  uploadZipCode = (data: any): Observable<any> => {
    let form_data: FormData = new FormData();
    form_data.append('zipcode_file',data.file);
    form_data.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/bank/zipcode/upload`,form_data)
  }

  // ZipCode END

  getFlags = (): Observable<any> => {
    return this.http.get<any>('/assets/flags/');
  }


  // Areas START

  getAreas = (): Observable<Areas[]> => {
    return this.http.get<Areas[]>(`${this.http_link}/defaults/areas/get`);
  }


  createArea = (data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/areas/create`,data.value)
  }

  deleteAreaItem = (ID: number): Observable<any> => {
    return this.http.delete(`${this.http_link}/defaults/areas/delete/${ID}`);
  }

  updateArea = (ID: number, data: FormGroup): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/defaults/areas/update/${ID}`,data.value)
  }


  // Areas END 



}
