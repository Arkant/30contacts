import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from './models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseUrl = 'http://5b2a862d3a8ea3001418d7bb.mockapi.io/contacts'
  constructor(private http: HttpClient) { }

  list(): Observable<Contacts> {
    return this.http.get<Contacts>(this.baseUrl);
  }
}
