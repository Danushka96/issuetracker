import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
  }

}
