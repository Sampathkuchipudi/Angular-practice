import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-odd-or-even',
  templateUrl: './odd-or-even.component.html',
  styleUrls: ['./odd-or-even.component.css'],
})
export class OddOrEvenComponent implements OnInit {
  numberArray: Array<number> = [];
  value = '';
  constructor() {}

  ngOnInit(): void {}

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') this.addNumberToList();
  }

  addNumberToList() {
    if (this.value === '') return;
    this.numberArray.push(+this.value);
    this.value = '';
  }

  clear() {
    this.numberArray = [];
  }
}
