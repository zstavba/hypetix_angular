import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from '../Classes/locations';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<Locations[]> => {
    return this.http.get<Locations[]>(`${this.http_link}/defaults/locations/get`);
  }

}
