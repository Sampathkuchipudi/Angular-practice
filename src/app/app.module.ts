import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OddOrEvenComponent } from './odd-or-even/odd-or-even.component';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { OdelistComponent } from './odd-or-even/odelist/odelist.component';
import { AddremoveComponent } from './odd-or-even/addremove/addremove.component';

@NgModule({
  declarations: [AppComponent, OddOrEvenComponent, TodoComponent, NavbarComponent, TodolistComponent, OdelistComponent, AddremoveComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
