import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is the title using the string interpolation';
  activateButton = false;
  eventBinding = "Event binding example";
  twoWayBinding='';

  constructor(){
    setTimeout(() => {
      this.activateButton = true;
    },2000);
  }

  onEventCall(){
    this.eventBinding = "Event binding got successful...";
  }

}
