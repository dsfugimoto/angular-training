import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreenText]'
})
export class GreenTextDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
