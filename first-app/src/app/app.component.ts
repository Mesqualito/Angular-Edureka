import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentRoster = ['Marina', 'Jochen', 'Suse'];
  currentName = '';

  add() {
    if (this.currentName !== '') {
      this.studentRoster.push(this.currentName);
    }
  }

}
