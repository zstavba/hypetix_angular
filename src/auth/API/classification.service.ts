import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classification } from '../Classes/classification';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<Classification[]> => {
    return this.http.get<Classification[]>(`${this.http_link}/coders/classifications/get`)
  }

}
