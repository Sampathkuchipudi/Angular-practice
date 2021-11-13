import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  toDos: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  enterValueToToDo(event: KeyboardEvent) {
    if (event.key === 'Enter') this.addToDo(event.target as HTMLInputElement);
  }

  addToDo(inputElement: HTMLInputElement) {
    if (!inputElement) return;
    this.toDos.push(inputElement.value);
    inputElement.value = '';
  }
}
