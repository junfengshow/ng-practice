import { NgModule } from '@angular/core'
import { NzPageHeaderModule, NzBreadCrumbModule } from 'ng-zorro-antd'
import { CommonModule } from '@angular/common'
import { PageHeader } from './page.header.component'
@NgModule({
  declarations: [PageHeader],
  imports: [CommonModule, NzPageHeaderModule, NzBreadCrumbModule],
  exports: [PageHeader]
})
export class PageHeaderModule {}
