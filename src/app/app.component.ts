import { Component } from '@angular/core';
import { NavItemOptions as navOptions } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = navOptions;

  intialMenuItem: string = this.options.ODDOREVEN;
  constructor() {}
}
