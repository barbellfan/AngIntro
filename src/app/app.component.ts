import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  form: any;

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      addres: new FormControl()
    });
  }
  onSubmit(f: NgForm) {
    console.log(f);

  }

  getValue(ff: NgModel) {
    console.log(ff);

  }
}
