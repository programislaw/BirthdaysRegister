import { Component, OnInit } from '@angular/core';
import { Birthday } from 'src/app/model/birthday.model';
import { Subscription } from 'rxjs';
import { BirthdayService } from 'src/app/services/birthday.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-birthdays-list',
  templateUrl: './birthdays-list.component.html',
  styleUrls: ['./birthdays-list.component.css']
})
export class BirthdaysListComponent implements OnInit {
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
    console.log('onSelectRow');
  }

  deleteItem(id: number) {
    this.birthdayService.deleteBirthday(id);
    this.birthdays = this.birthdayService.getBirthdays();
  }

}
