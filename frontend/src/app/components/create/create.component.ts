import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private router: Router, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      serverity: ''
    });
   }

  addIssue(title, responsible, description, serverity) {
    this.issueService.addIssue(title, responsible, description, serverity).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
