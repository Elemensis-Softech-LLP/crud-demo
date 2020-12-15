import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
// import { count } from 'console';
import { take, timeout, filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  private firstObsSubscription: Subscription = new Subscription;
  constructor() { }

  ngOnInit(): void {
    // const numbers = interval(1000);

    // const takeFourNumbers = numbers.pipe(take(10));

    // takeFourNumbers.subscribe(x => console.log('Next: ', x));

    const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; complete: () => void; error: (arg0: Error) => void; }) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });


    this.firstObsSubscription = customIntervalObservable.pipe(filter((data: number) => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe((data: any) => {
      console.log(data);
    }, (error: { message: any; }) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
