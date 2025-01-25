import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DebitNotes } from '../Classes/debit-notes';
import { Form, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DebitNotesService {

  private http_link: string = environment.api+"/commercial/debit/notes"

  constructor(
    private http: HttpClient
  ) { }

  get = (): Observable<DebitNotes[]> => {
    return this.http.get<DebitNotes[]>(`${this.http_link}/get`);
  }

  createItem = (data: FormGroup): Observable<any> => {
      return this.http.post<any>(`${this.http_link}/create`,data.value);
  }

  deleteItem = (ID: number): Observable<any> => {
    return this.http.delete<any>(`${this.http_link}/delete/${ID}`);
  }

  updateItem = (ID: number, data: FormGroup) => {
    return this.http.post<any>(`${this.http_link}/update/${ID}`,data.value)
  }

  upload = (data: any): Observable<any> => {
    let fd: FormData = new FormData();
    fd.append('debit_note_file',data.file),
    fd.append('fk_user_id',JSON.stringify(data.fk_user_id));

    return this.http.post<any>(`${this.http_link}/upload`,fd);

  }


}
