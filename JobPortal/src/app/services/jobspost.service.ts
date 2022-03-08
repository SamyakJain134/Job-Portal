import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobspostService {
  apiUrl = 'https://localhost:44320/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private hc: HttpClient) { }
  getAllJobs(): Observable<any> {
    return this.hc.get(this.apiUrl + 'jobs', { responseType: 'json' });
  }
  // getJobById(jid): Observable<any> {
  //   return this.hc.get(this.apiUrl + 'jobs/' + jid, { responseType: 'json' })
  // }
  addJob(jobj: Job): Observable<any> {
    return this.hc.post(this.apiUrl + 'jobs', jobj, this.httpOptions);
  }
  // deleteJob(jid: string): Observable<any> {
  //   return this.hc.delete(this.apiUrl + 'jobs/' + jid, { responseType: 'json' });
  // }
  // updateJob(jobj: Job) {
  //   return this.hc.put(this.apiUrl + 'jobs', jobj, this.httpOptions);
  // }
}
