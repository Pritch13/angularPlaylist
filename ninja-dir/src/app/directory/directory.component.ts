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

  products = [];

  constructor(private logger: LoggingService, private dataService: DataService) { }

  testLog() {
    this.logger.log();
  }

  ngOnInit() {
   /* this.dataService.fetchData().subscribe(
      (data) => this.products = data
    );*/
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot)=> {
      console.log(snapshot.val());
      this.products.push(snapshot.val())
    })
  }

  fbPostData(name, stock, price, creator) {
    firebase.database().ref('/').push({name:name, stock:stock, price:price, creator:creator});
    name.val("");
  }
  

}
