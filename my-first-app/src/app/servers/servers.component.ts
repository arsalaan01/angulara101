import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // for using app-servers as an attribute with some html tag
  // selector: '.app-servers',  // for using app-servers as a class with some html tag
  selector: 'app-servers',      // for using app-servers as a tag in itself
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver-1','Testserver-2'];
  constructor() {
    setTimeout(()=>{this.allowNewServer=true},2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! '+ this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
