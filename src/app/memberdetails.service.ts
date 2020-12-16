import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetails } from './model/userdetails';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberdetailsService {
 

  private currentUserSubject: BehaviorSubject<UserDetails>;

  private url= 'api/usercreate';
  
  constructor(private http: HttpClient) { }

  getMemberList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
  register(userDetails: UserDetails) : Observable<Object>{
    return this.http.post(`${this.url}`,userDetails);
  }

  login(loginForm: FormGroup) {
    return this.http.post<UserDetails>(`api/userverify`, loginForm.value)
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

}
