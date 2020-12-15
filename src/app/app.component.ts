import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  loadedFeature = 'recipe';
  // serverElements = [{type : 'sevrer', name : 'Test Server', content : 'Just a test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }

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
