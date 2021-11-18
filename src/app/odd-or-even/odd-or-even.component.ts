import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OddOrEvenService } from '../services/odd-or-even-services/odd-or-even.service';

@Component({
  selector: 'app-odd-or-even',
  templateUrl: './odd-or-even.component.html',
  styleUrls: ['./odd-or-even.component.css'],
  providers: [OddOrEvenService],
})
export class OddOrEvenComponent implements OnInit {
  value = '';
  constructor(private _oddOrEvenService: OddOrEvenService) {}

  ngOnInit(): void {}

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') this.addNumberToList();
  }

  addNumberToList() {
    if (this.value === '') {
      alert('Please enter a value');
      return;
    }
    this._oddOrEvenService.add(+this.value);
    this.value = '';
  }

  clear() {
    this._oddOrEvenService.deleteAllValues();
  }
}
