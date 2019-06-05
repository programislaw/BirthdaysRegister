import { Birthday } from '../model/birthday.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class BirthdayService {
    apiURL: string = '/birthdays';
    private birthdays: Birthday [] = new Array<Birthday>();
    public firstPage: String = '';
    public prevPage: String = '';
    public nextPage: String = '';
    public lastPage: String = '';
    birthdaysChanges = new Subject<Birthday[]>();

    constructor(private httpClient: HttpClient ) {
        this.loadBirthdays();
    }

    loadBirthdays() {
        console.log('getBirthdays');
        this.httpClient.get<Birthday[]>(this.apiURL).subscribe(birthdays => {
            console.log(birthdays);
            birthdays.forEach( birthday => {
                this.birthdays.push(birthday);
            });
        });
    }

    getBirthdays() {
        return this.birthdays.slice();
    }

    public getBirthday(index: number): Birthday {
        return this.birthdays[index];
    }

    addBirthday(birthday: Birthday) {
        this.birthdays.push(birthday);
        this.birthdaysChanges.next(this.getBirthdays());
    }

    editBirthday(index: number, birthday: Birthday) {
        const bd = this.birthdays[index];
        bd.firstname = birthday.firstname;
        bd.lastname = birthday.lastname;
        bd.date = birthday.date;
        this.birthdaysChanges.next(this.getBirthdays());
    }

    deleteBirthday(index: number) {
        this.birthdays.splice(index, 1);
    }
}
