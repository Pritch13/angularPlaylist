import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../filter.pipe';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService, LoggingService]
})
export class DirectoryComponent implements OnInit {
  name:string = '' ;
  stock:string = '';
  price:string = '';
  creator:string = '';

  products = [];

  constructor(private logger: LoggingService, private dataService: DataService) { }

  testLog() {
    this.logger.log();
  }

  ngOnInit() {
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot)=> {
      console.log(snapshot.val());
      this.products.push(snapshot.val())
    })
  }

  clearSearch() {
    this.name = null;
    this.stock = null;
    this.price = null;
    this.creator = null;
  }

  fbPostData(name, stock, price, creator) {
    firebase.database().ref('/').push({name:name, stock:stock, price:price, creator:creator});
    this.clearSearch();
  }
  

}
