import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Using for the styles in TO-DO-List component

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    // this._elementRef.nativeElement.classList.add('bg-dark'); //  --> Working but old way of doing it
    this._renderer.addClass(this._elementRef.nativeElement, 'bg-dark');
    this._renderer.addClass(this._elementRef.nativeElement, 'text-white');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this._renderer.removeClass(this._elementRef.nativeElement, 'bg-dark');
    this._renderer.removeClass(this._elementRef.nativeElement, 'text-white');
  }
}
