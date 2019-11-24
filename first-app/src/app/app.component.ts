import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interpol = 'String interpolation: {{interpol}}';
  serverName = 'Apollo';
  serverPID = 11;
  serverStatus = 'offline';
  serverStatusFlag = false;
  changeButtonState = true;

  constructor() {
    setTimeout(() => {
      this.changeButtonState = false;
    }, 2500);
  }

  toggleServerStatus() {
    this.serverStatusFlag = !this.serverStatusFlag;
    if (this.serverStatusFlag === true) {
      this.serverStatus = 'online';
    } else {
      this.serverStatus = 'offline';
    }
  }
}
