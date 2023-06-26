import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      password: ['', Validators.required]
    })
  }

  get fc() {
    return this.form.controls;
  }
}
