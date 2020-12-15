import { Component } from '@angular/core';
import { UserService } from './testing/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userActivated = false;
  title = 'angular-demo';
  loadedFeature = 'recipe';
  // serverElements = [{type : 'sevrer', name : 'Test Server', content : 'Just a test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor(private userService: UserService){}
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }

  }

ngOnInit(){
  this.userService.activatedEmitter.subscribe((didActivate: boolean) => {
    this.userActivated = didActivate;
  });
}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },{
      name: 'Test Account',
      status: 'inactive'
    },{
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

onAccountAdded(newAccount: {name: string,status: string}){
this.accounts.push(newAccount);
}

onStatusChange(updateInfo: {id: number,newStatus:string}){
  this.accounts[updateInfo.id].status = updateInfo.newStatus;
}

onNavigate(feature: string){
  this.loadedFeature = feature;
}

}
