import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../shared/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() theadress: Address = {
    street: "102 main", zip: 25658
  };
  constructor() { }

  ngOnInit(): void {
  }

}
