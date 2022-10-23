import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateCreateService {

  constructor(private http: HttpClient) { }

  createCandidate(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/candidate/create', data);
  }
}
