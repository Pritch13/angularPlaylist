import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ninja = {
    name: 'Ryu',
    belt: 'Red'
  }

  yell(e) {
    alert('Yelling happening!');
  }
}
