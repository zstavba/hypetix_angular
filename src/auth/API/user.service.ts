import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { User } from '../Classes/user';
import { environment } from '../../environments/environment.development';
import { UserInformation } from '../Classes/user-information';
import { UserTheme } from '../Classes/user-theme';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http_link: string = environment.api;
  private userCache = new Map<number, UserInformation>();
  
  constructor(private http: HttpClient) { }

  getList = (): Observable<User[]> => {
    return this.http.get<User[]>(`${this.http_link}/user/list`);
  }

  getByType = (type: string | null) : Observable<User[]> => {
      return this.http.get<User[]>(`${this.http_link}/user/get/type/${type}`);
  }

  getInformation = (ID: number): Observable<UserInformation> => {
    if (this.userCache.has(ID)) {
      // Return cached data as an observable
      return of(this.userCache.get(ID)!);
    }

    // Fetch data from the backend and cache it
    return this.http.get<UserInformation>(`${this.http_link}/user/info/${ID}`).pipe(
      tap((data) => {
        this.userCache.set(ID, data);
      })
    );  }


  login = (userData: any): Observable<any> => {

      return this.http.post<any>(`${this.http_link}/user/login`,userData);
  }

  createUser = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/user/create`,data);
  }

  setUserTheme = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/user/set/theme`,data);
  }
  
  getTheme = (ID: number): Observable<UserTheme> => {
    return this.http.get<UserTheme>(`${this.http_link}/user/get/theme/${ID}`);
  }

  uploadUserProfile = (ID:Number, data:any): Observable<any> => {
    let formData: FormData = new FormData();
    formData.append('path',data.path);
    formData.append('profile_image',data.file);
    return this.http.post<any>(`${this.http_link}/user/profile/upload/${ID}`,formData);
  }

  updateFirstAndLastName = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/user/update/name`,data);
  }

  updateUsernameAndEmail = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/user/update/username/email`,data);
  }

  saveUserInformation = (data: any): Observable<User> => {
    return this.http.post<User>(`${this.http_link}/user/login/google`,data);
  }

  uploadUsers = (data: FormGroup): Observable<any> => {
    let form_data: FormData = new FormData();
    form_data.append('user_file',data.get('file')?.value);
    
    return this.http.post<any>(`${this.http_link}/user/upload`,form_data)
  }


}
