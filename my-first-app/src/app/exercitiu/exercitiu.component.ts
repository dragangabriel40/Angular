import { Component } from '@angular/core';

@Component({
  selector: 'app-exercitiu',
  templateUrl: './exercitiu.component.html',
  styleUrls: ['./exercitiu.component.css']
})
export class ExercitiuComponent {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
