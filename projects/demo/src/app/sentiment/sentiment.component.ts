import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Horizontal gauge illustrating the current stock market sentiment (bearish, bullish);
 */
@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html'
})
export class SentimentComponent implements OnInit {

  public value$: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.value$ = interval(3000).pipe(
      map(() => Math.random() * 2 - 1)
    );
  }
}
