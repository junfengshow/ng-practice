import { 
  Directive, Input, TemplateRef, ViewContainerRef,
  ElementRef, Renderer2,
  OnInit, OnDestroy
} from '@angular/core'

@Directive({
  selector: '[div-color],div-color',
  exportAs: 'divColor'
})
export class InputDirective implements OnInit, OnDestroy {
  constructor (
    private elementRef: ElementRef,
    private renderer: Renderer2,
    // private templateRef: TemplateRef<any>,
    // private viewContainerRef: ViewContainerRef
  ) {}
  
  // @Input() set divColor (condition: any) {
  //   console.log(this.templateRef.elementRef)
  //   this.viewContainerRef.createEmbeddedView(this.templateRef)
  // }
  ngOnInit () {
    // console.log(this.renderer.addClass)
    // console.log(this.templateRef)
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    // this.renderer.destroy()
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
    this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
    })
    const unsub = this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    })
  }
  ngOnDestroy () {
    // this.renderer.destroy
  }
}
