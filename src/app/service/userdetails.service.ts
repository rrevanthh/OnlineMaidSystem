import { Injectable } from '@angular/core';
import { UserDetails } from '../model/userdetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  
  constructor(private  http: HttpClient) { }

  register(userDetails: UserDetails) : Observable<Object>{
    return this.http.post(`api/usercreate`,userDetails);
  }

  
}
