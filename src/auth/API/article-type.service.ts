import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleType } from '../Classes/article-type';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleTypeService {

  private http_link: string = environment.api;

  constructor(private http: HttpClient) { }

  get = (): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/coders/article/type`);
  }

  getNumber= (value: number): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/coders/article/type/${value}`);
  }

  getInformation = (ID: number): Observable<ArticleType> => {
    return this.http.get<ArticleType>(`${this.http_link}/coders/article/type/info/${ID}`);
  }

  getGroupType = (type: string): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/coders/article/type/group/type/${type}`);
  }

  getGroupName = (name: string): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/coders/article/type/group/name/${name}`);
  }

  upload = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/article/type/upload/file`,data);
  }

  createData = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/article/type/post/data`,data);
  }

  deleteData = (ID:number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/coders/article/type/delete/${ID}`);
  }

  updateItem = (data: any, ID: number | undefined): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/coders/article/type/update/${ID}`,data);
  }


}
