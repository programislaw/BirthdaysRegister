import { Component, OnInit, ViewChild } from '@angular/core';
import { BirthdayService } from '../services/birthday.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Birthday } from '../model/birthday.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NoopAnimationStyleNormalizer } from '@angular/animations/browser/src/dsl/style_normalization/animation_style_normalizer';

@Component({
  selector: 'app-birthday-edit',
  templateUrl: './birthday-edit.component.html',
  styleUrls: ['./birthday-edit.component.css']
})
export class BirthdayEditComponent implements OnInit {

  constructor(private birthdayService: BirthdayService, private route: ActivatedRoute, private router: Router) { }

  id: number;
  isEdit: boolean;
  isView: boolean;
  isNew: boolean;
  birthdayForm: FormGroup;
  subscription: Subscription;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEdit = params['mode'] === 'edit';
        this.isView = params['mode'] === 'view';
        this.isNew = !this.isEdit && !this.isView;
        this.initForm();
      }
    );
  }

  initForm() {
    if (this.isEdit || this.isView) {
      const birthday = this.birthdayService.getBirthday(this.id);
      this.birthdayForm = new FormGroup({
        'firstname': new FormControl(birthday.firstname, Validators.required),
        'lastname': new FormControl(birthday.lastname, Validators.required),
        'date': new FormControl(birthday.date, Validators.required)
      });
    } else {
      this.birthdayForm = new FormGroup({
        'firstname': new FormControl('', Validators.required),
        'lastname': new FormControl('', Validators.required),
        'date': new FormControl('', Validators.required)
      });
    }
  }

  onSubmit() {
    const birthday = new Birthday(
      this.birthdayForm.value['date'],
      this.birthdayForm.value['firstname'],
      this.birthdayForm.value['lastname']
    );
    if (this.isNew) {
      this.birthdayService.addBirthday(birthday);
    } else if (this.isEdit) {
      this.birthdayService.editBirthday(this.id, birthday);
    } else {
    }
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/birthdays'], { relativeTo: this.route });
  }
}
