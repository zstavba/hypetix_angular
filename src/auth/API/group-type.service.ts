import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupType } from '../Classes/group-type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GroupTypeService {

  private http_link: string = environment.api;
  
  constructor(private http: HttpClient) { }

  get = (): Observable<GroupType[]> => {
    return this.http.get<GroupType[]>(`${this.http_link}/coders/group/type/get`);
  }

  getByType = (type:string): Observable<GroupType[]> => {
    return this.http.get<GroupType[]>(`${this.http_link}/coders/group/type/get/${type}`);
  }

  createGroupType = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/group/type/create`,data);
  }

  deleteItem = (ID: number): Observable<any | string> => {
    return this.http.delete<any | string>(`${this.http_link}/coders/group/type/delete/${ID}`);
  }

  updateItem = (data: any, ID: number): Observable<any | string> => {
    return this.http.post<any | string>(`${this.http_link}/coders/group/type/update/${ID}`,data);
  }

  uploadItem = (data: any): Observable<any> => {
    let FD: FormData = new FormData();
    FD.append('group_name_file',data.file);
    FD.append('fk_user_id',JSON.stringify(data.fk_user_id));

    return this.http.post<any>(`${this.http_link}/coders/group/type/upload`,FD)
  }

}
