/**
 * 主播列表
 */
import { Component, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'anchor-approve',
  template: `
    <div>
      <button 
        nz-button 
        [nzType]="'primary'" 
        (click)="showModal()"
        [nzLoading]='false'
      >
        <span>Show Modal</span>
      </button>
      <nz-modal [(nzVisible)]="isVisible" nzTitle="The first Modal" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
        <p>Content one</p>
        <p>Content two</p>
        <p>Content three</p>
      </nz-modal>
      <div div-color>颜色</div>
      <div>
        <button np-button>按钮</button>
        <button 
          nz-button 
          [nzType]="'primary'" 
          (click)="showConfirm()"
          [nzLoading]='false'
        >
          <span>confirm</span>
        </button>
      </div>
      <div *npIf>this is npIf {{isVisible}}</div>
    </div>
  `,
  styleUrls: ['./anchor.approve.less'],
  providers: [NzModalService],
})
class AnchorApprove {
  isVisible = false;

  // @ViewChild(ButtonDirective) public buttonDirective: ButtonDirective;

  constructor(
    private modal: NzModalService,
  ) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  showConfirm (): void {
    this.modal.confirm({
      nzTitle: '提示',
      nzContent: 'kddlldllleldldl'
    })
  }
}
export default AnchorApprove;
