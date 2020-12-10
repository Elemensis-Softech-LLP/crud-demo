import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective implements OnInit {
@Input() defaultColor : string = 'trasparent';
@Input() highliteColor : string = 'blue'
@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

ngOnInit(){
// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'skyblue');
}
@HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'skyblue', false, false);
this.backgroundColor = this.highliteColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'skyblue', false, false);
this.backgroundColor = this.defaultColor;
}
}