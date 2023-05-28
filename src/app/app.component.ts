import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string = '';
  email: string = '';
  address: string = '';

  userArray: Array<any> = [];

  constructor() {

  }

  onClick() {
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    });
  }

  onDelete(i:number) {
    this.userArray.splice(i, 1);
  }

}
