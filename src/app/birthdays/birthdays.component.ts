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
  birthdays: Birthday [];

  private subscription: Subscription;

  constructor(private birthdayService: BirthdayService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.birthdays = this.birthdayService.getBirthdays();
    this.subscription = this.birthdayService.birthdaysChanges.subscribe(
      (birthdays: Birthday []) => {
        this.birthdays = birthdays;
      }
    );
  }

  onNew() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSelectRow() {
    console.log("onSelectRow");
  }

  deleteItem(id: number) {
    this.birthdayService.deleteBirthday(id);
    this.birthdays = this.birthdayService.getBirthdays();
  }
}
