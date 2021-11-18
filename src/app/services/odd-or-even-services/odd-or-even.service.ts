import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export class OddOrEvenService {
  private _numberArray: Array<number> = [];
  onNumberAdded = new EventEmitter<Array<number>>();
  onclear = new EventEmitter<Array<number>>();

  getValues() {
    return this._numberArray.slice();
  }
  add(value: number) {
    this._numberArray.push(value);
    this.onNumberAdded.emit(this._numberArray.slice());
  }

  deleteAllValues() {
    this._numberArray = [];
    this.onclear.emit(this._numberArray.slice());
  }
}
