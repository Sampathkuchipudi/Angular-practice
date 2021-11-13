import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-or-even',
  templateUrl: './odd-or-even.component.html',
  styleUrls: ['./odd-or-even.component.css'],
})
export class OddOrEvenComponent implements OnInit {
  numberArray: Array<number> = [];

  constructor() {}

  ngOnInit(): void {}

  enterNumber(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addNumberToList(
        +(event.target as HTMLInputElement).value,
        event.target as HTMLInputElement
      );
    }
  }

  addNumberToList(num: number, input: HTMLInputElement) {
    if (input.value === '') return;
    this.numberArray.push(num);
    input.value = '';
  }

  clear() {
    this.numberArray = [];
  }
}
