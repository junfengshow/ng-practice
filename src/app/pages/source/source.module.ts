/**
 * 资源模块
 */

import { NgModule } from '@angular/core';
import SourceAnimation from './source.animation';
import ComponentsCommonModule from '@@/components.module';

@NgModule({
  declarations: [
    SourceAnimation,
  ],
  imports: [ComponentsCommonModule],
})
class SouceModule {};
export default SouceModule;