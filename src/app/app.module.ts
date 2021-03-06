import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { BirthdayEditComponent } from './birthdays/birthday-edit/birthday-edit.component';
import { BirthdayItemComponent } from './birthdays/birthday-item/birthday-item.component';
import { BirthdayService } from './services/birthday.service';
import { MatNativeDateModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BirthdaysListComponent } from './birthdays/birthdays-list/birthdays-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BirthdaysComponent,
    BirthdayEditComponent,
    BirthdayItemComponent,
    NavbarComponent,
    BreadcrumbComponent,
    BirthdaysListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [BirthdayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
