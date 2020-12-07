import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline'
  allowNewServer = false;
  serverName = 'Testserver';
  serverCreated = false;
  serverCreationStatus = 'No Server was created!';
  servers = ['Testserver', 'Testserver 2' ];
  showSecret = false;
  log : any;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);

    this.serverStatus = Math.random() > 0.5  ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onToggleDetails(){
  this.showSecret = !this.showSecret;
  this.log.push(this.log.length + 1);
}

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created! Name is' + this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
