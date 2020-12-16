import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from '../model/userdetails';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberdetailsService {


  private url= 'api/membercreate';
  
  constructor(private http: HttpClient) { }

  getMemberList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  

}
