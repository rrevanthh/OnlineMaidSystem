import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberdetailsService {

  private url= 'api/memberlist';
  ;
  constructor(private http: HttpClient) { }

  getMemberList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
