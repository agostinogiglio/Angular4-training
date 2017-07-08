import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = "test";

  buttonIsDisabled():boolean{
      if(this.username) return false;
      else return true;
  }

  onResetUsername():void{
    this.username = "";
  }

}
