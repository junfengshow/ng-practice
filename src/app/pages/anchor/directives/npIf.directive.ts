import { 
  Directive, OnInit, TemplateRef, ViewContainerRef, AfterViewInit
} from "@angular/core";

@Directive({
  selector: '[npIf]'
})
class NpIfDirective implements OnInit, AfterViewInit {
  constructor (
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {}
  ngOnInit(): void {
    
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    // this.viewContainerRef.clear();
  }
  ngAfterViewInit(): void {
    // this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
export default NpIfDirective;
