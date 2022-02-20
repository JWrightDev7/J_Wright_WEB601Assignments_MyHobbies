import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() styleType?: string;

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.cursor = "pointer";
  }

  @HostListener('mouseover') onHover(typeElem: any) {
    this.elem.nativeElement.style.textDecoration = this.styleType ?? "none";
    this.elem.nativeElement.style.fontWeight = this.styleType ?? "normal";
  }

  @HostListener('mouseout') offHover(typeElel: any) {
    this.elem.nativeElement.style.textDecoration = "none";
    this.elem.nativeElement.style.fontWeight = "normal";
  }

}
