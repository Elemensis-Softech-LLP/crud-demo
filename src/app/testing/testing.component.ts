import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
oddNumbers = [1,3,5];
evenNumbers = [2,4];
onlyOdd = false;
  constructor() { }

  ngOnInit(): void {
  }

}
