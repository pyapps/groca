import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  groceryList = [
    {category: 'spices', name: 'Mustard' },
    {category: 'spices', name: 'Jeera' },
    {category: 'spices', name: 'Pepper' },
    {category: 'bath', name: 'Bathing Soap' },
    {category: 'bath', name: 'Detergent Soap' },
    {category: 'bath', name: 'Detergent Powder' },
    {category: 'bath', name: 'Dishwash Soap' },
  ];

 uniqueCategories = Array.from(new Set(this.groceryList.map(a => a.category))).map(category => {
   return this.groceryList.find(a => a.category === category);
  });
  constructor() { }

  ngOnInit() {
  }


}
