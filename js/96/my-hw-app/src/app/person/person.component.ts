import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { Address } from '../shared/address';
import { AddressComponent } from '../address/address.component';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  address: Address = {
    street: "102 main", zip: 25658
  }

  @Input() person: Person = {
    firstName: "moshe",
    lastName: "mandel",
    age: 50,
    address:  this.address
  };

  
  constructor() { }

  ngOnInit(): void {
  }

}
