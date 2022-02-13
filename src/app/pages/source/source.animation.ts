/**
 * 主播列表
 */
import { Component } from '@angular/core';

@Component({
  selector: 'source-animation',
  template: `
    <div>
      <h1>this is source animation</h1>
      <a (click)='toggleShow()'>toggle show: </a> <span *ngIf='isShow'>{{isShow}}</span>
    </div>
  `
})
class SourceAnimation {
  public isShow: boolean = true;

  public toggleShow (): void {
    this.isShow = !this.isShow;
  }
}
export default SourceAnimation;
