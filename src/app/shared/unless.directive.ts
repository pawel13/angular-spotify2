import { Directive, TemplateRef, ViewContainerRef, Input, ViewRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  viewCache: ViewRef | null;

  @Input()
  set appUnless(hide: boolean) {
    if (!hide) {
      if (this.viewCache) {
        this.vcr.insert(this.viewCache);
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    } else {
      this.vcr.detach(0);
    }
  }

  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {
  }

}
