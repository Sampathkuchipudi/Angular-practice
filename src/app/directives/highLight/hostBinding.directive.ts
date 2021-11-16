import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

// Using for the styles in TO-DO add Button

@Directive({
  selector: '[appButtonClass]',
})
export class HostBindingButton {
  @HostBinding(`class.btn-outline-dark`)
  enteredValue = true;

  @HostBinding(`class.btn-success`)
  clicked = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.enteredValue = false;
  }

  @HostListener('focus')
  @HostListener('pointerenter')
  onMouseClicked() {
    this.enteredValue = false;
    this.clicked = true;
  }

  @HostListener('blur')
  @HostListener('mouseleave')
  onMouseLeave() {
    this.enteredValue = true;
    this.clicked = false;
  }
}
