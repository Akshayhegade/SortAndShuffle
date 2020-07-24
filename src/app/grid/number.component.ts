import { Component } from '@angular/core';


@Component({
  selector: 'app-shuffle-sort',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  private numbers: number[] = [];

  public constructor() {
    this.numbers = [1, 8, 3, 4, 5, 6, 7, 2, 9];
  }

  public sort() {
    this.numbers.sort();
  }

  public shuffle() {
    this.numbers.sort(() => Math.random() - 0.5);
  }
  public getRowCss(rowIndex: number): string {
    return "row-num-" + ++rowIndex; 
  }

}

