import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addremove',
  templateUrl: './addremove.component.html',
  styleUrls: ['./addremove.component.css'],
})
export class AddremoveComponent {
  @Output()
  add = new EventEmitter<void>();

  @Output()
  clearData = new EventEmitter<void>();

  addNumberToList() {
    this.add.emit();
  }

  removeAll() {
    this.clearData.emit();
  }
}
