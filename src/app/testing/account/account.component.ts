import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
@Output() statusChange = new EventEmitter<{id: number, newStatus: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onSetTo(status: string){
this.statusChange.emit({id: this.id, newStatus: status});
console.log('A server status changed, new status: ' + status);

  }

}
