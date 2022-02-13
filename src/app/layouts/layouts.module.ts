/**
 * 
 * 登录模块
 */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NzLayoutModule, NzIconModule, NzMenuModule } from 'ng-zorro-antd'
import { RouterModule } from '@angular/router'
import { LayoutsComponent } from './layouts.component'
@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule
  ],
  exports: [LayoutsComponent]
})
export class LayoutsModule {
  public static layoutsComponent = LayoutsComponent
}
