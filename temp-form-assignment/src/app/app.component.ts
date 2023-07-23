import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('signupForm') signupForm: NgForm;
  selectedSubscription: string = 'Advanced';
  subscriptions = ['Basic','Advanced','Pro'];


  onSubmit(){
    console.log(this.signupForm);
  }


}
