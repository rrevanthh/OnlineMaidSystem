import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './model/userdetails';

@Injectable({
  providedIn: 'root'
})
export class MemberdetailsService {

  private url= 'api/usercreate';
  ;
  constructor(private http: HttpClient) { }

  getMemberList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  register(userDetails: UserDetails) : Observable<Object>{
    return this.http.post(`${this.url}`,userDetails);
  }
}
