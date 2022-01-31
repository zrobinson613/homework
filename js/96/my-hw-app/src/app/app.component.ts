import { Component } from '@angular/core';
import { Person } from './shared/person';
import { Address } from './shared/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hw-app';
  person: Person = {
    firstName: "bob",
    lastName: "builder",
    age: 50,
    address:{ street: "101 main", zip: 25658 }
  };
}
