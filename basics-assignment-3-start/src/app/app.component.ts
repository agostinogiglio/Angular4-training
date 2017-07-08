import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = "1234";
  showPassword: boolean = false;
  clickArray: string[] = [];

  onTogglePasswordDisplay(): void {
    this.showPassword = !this.showPassword;
    this.onAddClickIntoArray();
    console.log(this.clickArray);
  }

  onAddClickIntoArray(): void {
    var item:number = this.clickArray.length + 1;
    this.clickArray.push("click # " + item);
  }


}
