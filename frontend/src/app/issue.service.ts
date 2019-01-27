import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, serverity) {
    const issue = {
      title : title,
      responsible: responsible,
      description: description,
      serverity: serverity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, title, responsible, description, serverity, status) {
    const issue = {
      title : title,
      responsible : responsible,
      description : description,
      serverity : serverity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
