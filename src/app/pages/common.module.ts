
import { NgModule } from '@angular/core';
// 指令
import { InputDirective } from '../directives/input.directive';

@NgModule({
  declarations: [
    InputDirective
  ],
  exports: [
    InputDirective
  ]
})
export class MineCommonModule {
  
}
