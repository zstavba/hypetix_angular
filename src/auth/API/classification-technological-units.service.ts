import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassificationTechnologicalUnits } from '../Classes/classification-technological-units';

@Injectable({
  providedIn: 'root'
})
export class ClassificationTechnologicalUnitsService {

  private http_link: string = environment.api+"/production/classification/technological/units"

  constructor(
    private http: HttpClient
  ) { }


  getItems = (): Observable<ClassificationTechnologicalUnits[]> => {
    return this.http.get<ClassificationTechnologicalUnits[]>(`${this.http_link}/get`);
  }
}
