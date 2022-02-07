import { Component } from '@angular/core';
import { Category } from './shared/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW 97 Categories Practice';
  
  selectedCategory: Category = {name:"",items:[]};

  onSelect (val: any){
    console.log(val);
    this.selectedCategory= this.categories[val];
  }

  categories: Category[] = [
    {

      name: 'phones',
      items: [
        {
          name: 'iphone',
          price: 1000
        },
        {
          name: 'android',
          price: 900
        },
        {
          name: 'samsung',
          price: 850
        }

      ]
    },
    {
      name: 'cars',
      items: [
        {
          name: 'toyota',
          price: 25000
        },
        {
          name: 'lexus',
          price: 45000
        },
        {
          name: 'honda',
          price: 30000
        }
      ]
    }
    ,
    {
      name: 'food',
      items: [
        {
          name: 'bread',
          price: 5
        },
        {
          name: 'vegetables',
          price: 10
        },
        {
          name: 'fruit',
          price: 7
        },
        {
          name: 'cereal',
          price: 12
        }]
    }
  ];

}


/*

phoneCategory = {
  name: 'phones,
  items: [
    {
      name: iphone,
      price: 1000
    },
    {
      name: android,
      price: 900
    },
    {
      name: samsung,
      price: 850
    }
  ]
}


carCategory = {
  name: cars,
  items: [
    {
      name: toyota,
      price: 25000
    },
    {
      name: lexus,
      price: 45000
    },
    {
      name: honda,
      price: 30000
    }
  ]
}


foodCategory = {
  name: food,
  items: [
    {
      name: bread,
      price: 5
    },
    {
      name: vegetables,
      price: 10
    },
    {
      name: fruit,
      price: 7
    },
    {
      name: cereal,
      price: 12
    }
  ]
}
*/