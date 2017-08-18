import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from '../services/screen.service';

@Directive({selector: '[screenBelowLarge]'})
export class ScreenBelowLarge {
  private hasView = false;

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<Object>,
              private screenService: ScreenService) {
    screenService.resize$.subscribe(() => this.onResize());
  };

  @Input()
  set screenBelowLarge(condition) {
    // ignore passed in condition and set based on screen size¨
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
    if(condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if(!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }
}
