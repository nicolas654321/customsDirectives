import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSurvol]'
})
export class SurvolDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'maClass');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'maClass');
  }

}
