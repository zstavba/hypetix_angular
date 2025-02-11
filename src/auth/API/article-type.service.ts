import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleType } from '../Classes/article-type';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleTypeService {

  private http_link: string = environment.api+"/coders/article/type";

  constructor(private http: HttpClient) { }

  get = (): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}`);
  }

  getNumber= (value: number): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/${value}`);
  }

  getInformation = (ID: number): Observable<ArticleType> => {
    return this.http.get<ArticleType>(`${this.http_link}/info/${ID}`);
  }

  getGroupType = (type: string): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/group/type/${type}`);
  }

  getGroupName = (name: string): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/group/name/${name}`);
  }

  upload = (data: any): Observable<any> => {
    let fData: FormData = new FormData();
    fData.append("at_file",data.file);
    fData.append("fk_user_id",JSON.stringify(data.fk_user_id));
    return this.http.post<any>(`${this.http_link}/upload/file`,fData);
  }

  createData = (data: any): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/post/data`,data);
  }

  deleteData = (ID:number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (data: any, ID: number | undefined): Observable<any> => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data);
  }


}
