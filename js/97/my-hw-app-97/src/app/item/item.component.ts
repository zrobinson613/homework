import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() myItem!: Item ;

  constructor() { }

  ngOnInit(): void {
  }

}
