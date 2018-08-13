import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  products = [{
    name: "Books",
    stock: 200,
    price: 10,
    creator: "Sam P"
  },
  {
    name: "Candle",
    stock: 50,
    price: 3,
    creator: "Emma C"
  },
  {
    name: "Hat",
    stock: 3,
    price: 15,
    creator: "Mike L"
  },
  {
    name: "Laptop",
    stock: 12,
    price: 90,
    creator: "Jake R"
  },
  
  
];





  constructor() { 
   }

  ngOnInit() {
  }

}
