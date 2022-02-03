import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../shared/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() theCategory!: Category ;


  constructor() { }

  ngOnInit(): void {
  }

}
