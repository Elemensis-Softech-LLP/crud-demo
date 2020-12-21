import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
servers = [
  {
    instanceType: 'medium',
    name: 'Production Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
];

  constructor() { }

  ngOnInit(): void {
  }
getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date})
{
  return{
    'list-group-item-success': server.status === 'stable',
    'list-group-item-warning': server.status === 'offline',
    'list-group-item-danger': server.status === 'critical',
  }
}
}
