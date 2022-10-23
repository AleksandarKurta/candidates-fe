import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getCandidatesList() {
    return this.http.get('http://127.0.0.1:8000/api/candidates');
  }

  exportCandidates() {
    return this.http.get('http://127.0.0.1:8000/api/candidates/export');
  }
}
