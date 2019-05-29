import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { BirthdayEditComponent } from './birthday-edit/birthday-edit.component';
import { BirthdayDetailComponent } from './birthday-detail/birthday-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/birthdays', pathMatch: 'full'},
  { path: 'birthdays', component: BirthdaysComponent},
  { path: 'birthdays/new', component: BirthdayEditComponent},
  { path: 'birthdays/:id/:mode', component: BirthdayEditComponent},
  { path: 'birthdays/:id/:mode', component: BirthdayEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
