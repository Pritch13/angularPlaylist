import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  products = [{
    name: "Books",
    stock: 200,
    price: 10
  },
  {
    name: "Candle",
    stock: 50,
    price: 3
  },
  {
    name: "Hat",
    stock: 3,
    price: 15
  },
  {
    name: "Laptop",
    stock: 12,
    price: 90
  },
  
  
];





  constructor() { 
   }

  ngOnInit() {
  }

}
