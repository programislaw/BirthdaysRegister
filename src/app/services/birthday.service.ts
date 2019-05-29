import { Birthday } from '../model/birthday.model';
import { BirthdaysComponent } from '../birthdays/birthdays.component';
import { Subject } from 'rxjs';

export class BirthdayService {
    private birthdays: Birthday [];

    birthdaysChanges = new Subject<Birthday[]>();


    constructor() {
        this.birthdays = new Array<Birthday>();
        this.birthdays.push(new Birthday( new Date('1980-02-21'), 'Sławomir', 'Bąk'));
        this.birthdays.push(new Birthday( new Date('1983-10-10'), 'Katarzyna', 'Bąk'));
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
