import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Server wasn't created"
  serverName = "";
  userName = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() { }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created!" + this.serverName;
  }

  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
