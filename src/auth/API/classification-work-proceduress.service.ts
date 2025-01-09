import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassificationWorkProceduress } from '../Classes/classification-work-proceduress';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClassificationWorkProceduressService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = () : Observable<ClassificationWorkProceduress[]> => {
    return this.http.get<ClassificationWorkProceduress[]>(`${this.http_link}/production/classification/work/proceduress/get`)
  }

}
