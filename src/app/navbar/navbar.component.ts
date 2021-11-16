import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavItemOptions } from '../models/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output()
  onNavSelect: EventEmitter<string> = new EventEmitter<string>();

  options = NavItemOptions;

  constructor() {}

  ngOnInit(): void {}

  navPage(pageName: string) {
    this.onNavSelect.emit(pageName);
  }
}
