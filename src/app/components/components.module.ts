/**
 * 
 * 组件公用模块
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import Wrap from './wrap/wrap.page';

@NgModule({
  declarations: [
    Wrap,
  ],
  imports: [CommonModule],
  exports: [CommonModule, Wrap],
})
class ComponentsCommonModule {}
export default ComponentsCommonModule;