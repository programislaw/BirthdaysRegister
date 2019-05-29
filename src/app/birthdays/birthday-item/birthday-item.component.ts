import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Birthday } from 'src/app/model/birthday.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BirthdayService } from 'src/app/services/birthday.service';

@Component({
  selector: 'app-birthday-item',
  templateUrl: './birthday-item.component.html',
  styleUrls: ['./birthday-item.component.css']
})
export class BirthdayItemComponent implements OnInit {

  @Input() birthday: Birthday;
  @Input() id: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor(private birthdayService: BirthdayService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate([this.id + '/edit'], {relativeTo: this.route});
  }

  onView() {
    this.router.navigate( [this.id + '/view'], {relativeTo: this.route});
  }

  onDelete() {
    this.delete.emit(this.id);
  }
}
