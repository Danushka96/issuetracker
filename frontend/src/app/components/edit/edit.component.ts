import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
  }

}
