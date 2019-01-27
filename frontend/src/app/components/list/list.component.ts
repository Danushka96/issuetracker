import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
  }

}
