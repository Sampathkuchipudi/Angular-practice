import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odelist',
  templateUrl: './odelist.component.html',
  styleUrls: ['./odelist.component.css'],
})
export class OdelistComponent implements OnInit {
  @Input()
  numberList: number[] = [];

  constructor() {}

  ngOnInit(): void {}
}
