import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

type BreadCrumbItem = {
  name: string
}

@Component({
  selector: 'cmp-page-header',
  template: `
    <div>
      <nz-page-header 
        class="site-page-header" 
        [nzTitle]='title' 
        [nzSubtitle]='subTitle'
      >
        <nz-breadcrumb 
          nz-page-header-breadcrumb
        >
          <nz-breadcrumb-item *ngFor='let item of breadCrumbArray'>{{item.name}}</nz-breadcrumb-item>
        </nz-breadcrumb>
      </nz-page-header> 
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./page.header.component.less'],
})
export class PageHeader implements OnInit {
  @Input() breadCrumbArray: Array<BreadCrumbItem> = [];
  @Input() title: string = '默认标题';
  @Input() subTitle: string = '';
  ngOnInit () {
    // console.log(this)
  }
}
