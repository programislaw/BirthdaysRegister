import { Component, OnInit } from '@angular/core';
import { Birthday } from '../model/birthday.model';
import { BirthdayService } from '../services/birthday.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.css']
})
export class BirthdaysComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor() { }

}
