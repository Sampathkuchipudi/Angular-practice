import { Component, Input, OnInit } from '@angular/core';
import { OddOrEvenService } from 'src/app/services/odd-or-even-services/odd-or-even.service';

@Component({
  selector: 'app-odelist',
  templateUrl: './odelist.component.html',
  styleUrls: ['./odelist.component.css'],
})
export class OdelistComponent implements OnInit {
  numberList: number[] = [];

  constructor(private _numsService: OddOrEvenService) {}

  ngOnInit(): void {
    this._numsService.onNumberAdded.subscribe(
      (data: Array<number>) => (this.numberList = data)
    );

    this._numsService.onclear.subscribe(
      (data: Array<number>) => (this.numberList = data)
    );

    this.numberList = this._numsService.getValues();
  }
}
