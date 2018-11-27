import { Directive, ElementRef, Input, OnInit, OnChanges, Renderer2, HostBinding, HostListener } from '@angular/core';
// import { $ } from 'protractor';

@Directive({
  selector: '[appHighlight]',
  // host: {
  //   '[style.color]': 'color'
  // }
})
export class HighlightDirective {

  @Input('appHighlight')
  color: string;

  @HostBinding('style.color')
  get currentColor() {
    return this.active ? this.color : '';
  }

  active = false;

  constructor(
    private elem: ElementRef<HTMLDivElement>,
    private renderer: Renderer2) { }

  @HostListener('mouseenter', ['$event.x', '$event.y'])
  activate(x: number, y: number) {
    this.active = true;
  }

  @HostListener('mouseleave')
  deactive() {
    this.active = false;
  }

  // ngOnChanges() {
  //   // this.elem.nativeElement.style.color = this.color;
  //   // powinno działać na serwerze:
  //   this.renderer.setStyle(this.elem.nativeElement, 'color', this.color);
  // }

}
