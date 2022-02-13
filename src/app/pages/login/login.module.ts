/**
 * 
 * 登录模块
 */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'

import { LoginComponent } from './login.component'
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule, 
    NzButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {
  public static loginComponent = LoginComponent
}
