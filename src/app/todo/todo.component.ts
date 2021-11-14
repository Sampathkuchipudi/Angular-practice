import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  toDos: string[] = [];
  todoItem: string = '';

  // Using Element Ref for Practice
  @ViewChild('toDoEle', { static: true })
  inputRef!: ElementRef;

  onEnterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') this.addToDo();
  }

  addToDo() {
    console.log(this.inputRef.nativeElement);

    if (this.todoItem === '') return;
    this.toDos.push(this.todoItem);
    /**
     * Using this Ref element for practice only
     * Directly set the value to empty -> '' by using [this.todoItem = '']
     * below clearing way only clears the value in the input filed but not the this.todoItem 😂😂
     * [Bug**] -> so Adding [this.todoItem = ''] also because of the IF condition.
     * or add this to if condition to work properly or and using ref clear method any one should be fine
     *if (this.todoItem === '' || this.inputRef.nativeElement.value === '') return;
     *
     */
    // this.inputRef.nativeElement.value = '';
    this.todoItem = '';
  }
}
