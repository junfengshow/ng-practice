
import { 
  Directive, ElementRef, OnInit, Renderer2, OnDestroy
} from "@angular/core";

@Directive({
  selector: '[np-button]',
  exportAs: 'buttonDirective'
})
class ButtonDirective implements OnInit, OnDestroy {
  private unLinstenOver: () => void;
  private unLinstenOut: () => void;
  constructor (
    private elementRef: ElementRef,
    private render: Renderer2,
  ) {}
  
  ngOnInit(): void {
    // this.render.destroyNode(this.elementRef.nativeElement)
    const { nativeElement } = this.elementRef;
    this.render.setAttribute(nativeElement, 'class', 'btn');
    this.unLinstenOver = this.render.listen(nativeElement, 'mouseover', () => {
      this.render.setStyle(nativeElement, 'border-color', 'red');
    });
    this.unLinstenOut = this.render.listen(nativeElement, 'mouseout', () => {
      this.render.setStyle(nativeElement, 'border-color', '');
    });
  }

  ngOnDestroy(): void {
    this.unLinstenOver && this.unLinstenOver();
    this.unLinstenOut && this.unLinstenOut();
  }
}
export default ButtonDirective;
