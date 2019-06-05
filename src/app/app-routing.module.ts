import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { BirthdayEditComponent } from './birthdays/birthday-edit/birthday-edit.component';
import { BirthdaysListComponent } from './birthdays/birthdays-list/birthdays-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'birthdays-register', pathMatch: 'full'},
  { path: 'birthdays-register', component: BirthdaysComponent, data: { breadcrumb: 'Birthdays'}, children: [
    { path: '', component: BirthdaysListComponent, data: { breadcrumb: 'List'}},
    { path: 'new', component: BirthdayEditComponent, data: { breadcrumb: 'New'}},
    { path: ':id/:mode', component: BirthdayEditComponent, data: { breadcrumb: 'View/Edit'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
