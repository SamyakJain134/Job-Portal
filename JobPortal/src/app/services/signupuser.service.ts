import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addUser } from '../models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class SignupuserService {
  apiUrl = 'https://localhost:44320/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private hc: HttpClient) { }
  addUser(user: addUser):Observable<any>{
    return this.hc.post(this.apiUrl + '/signUp',user);
  }
}
