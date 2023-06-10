import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  form: any;

  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl("", [Validators.required, Validators.minLength(5)]),
      email: new FormControl(),
      address: new FormControl()
    });
  }
  onSubmit(f: NgForm) {
    console.log(f);

  }

  getValue(ff: NgModel) {
    console.log(ff);

  }
}
