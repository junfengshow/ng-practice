/**
 * 
 * wrap
 */
import { Component, ViewChild, AfterContentInit, TemplateRef, ContentChild } from "@angular/core";

@Component({
  selector: 'wrap-page',
  template: `
    <div class='wrap-page'>
      <ng-container [ngTemplateOutlet]='template'></ng-container>
    </div>
  `,
  styleUrls: ['./wrap.page.less'],
})
class WrapPage implements AfterContentInit {
  @ViewChild(TemplateRef)
  public ngContentRef: any;

  @ContentChild(TemplateRef)
  public template: TemplateRef<any>;

  ngAfterContentInit(): void {
    console.log('template', this.template)
    console.log('ngContentRef', this.ngContentRef)
  }
}
export default WrapPage;
