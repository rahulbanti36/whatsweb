import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 headercolor:string="rgba(12, 183, 87,0.5)";
  constructor(){

   console.log(navigator.onLine)
  }
  title = 'webwhats';
  goBack(){
    window.history.back();
  }
}
