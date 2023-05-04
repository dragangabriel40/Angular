import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-refacut',
  templateUrl: './ex-refacut.component.html',
  styleUrls: ['./ex-refacut.component.css']
})
export class ExRefacutComponent {

  isDisplayed = false;
  list = [];

  onToggle() {
    this.isDisplayed = !this.isDisplayed;
    this.list.push(this.list.length + 1)
  }

}
