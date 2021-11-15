import { Component } from '@angular/core';
import { NavItemOptions } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = NavItemOptions;
  
  intialMenuItem: string = this.options.ODDOREVEN;
  constructor() {}
}
