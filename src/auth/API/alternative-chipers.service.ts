import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { AlternativeChipers } from '../Classes/alternative-chipers';

@Injectable({
  providedIn: 'root'
})
export class AlternativeChipersService {

  private http_link: string = environment.api+"/coders";

  constructor(private http: HttpClient) { }
  
  createArticle = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/chipper/create/article`,data);
  }

}
