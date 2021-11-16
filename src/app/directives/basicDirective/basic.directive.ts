import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicDirective]',
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.cursor = 'pointer';
  }
}
