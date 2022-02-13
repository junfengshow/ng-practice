
import { NgModule } from '@angular/core';
import ComponentsCommonModule from '@@/components.module';
import AnchorList from './anchor.list';
import AnchorApprove from './anchor.approve';
import TableComponent from './components/table.component';
import ButtonDirective from './directives/button.directive';  
import NpIfDirective from './directives/npIf.directive';
import { InputDirective } from 'src/app/directives/input.directive';

import { NzModalModule, NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    AnchorList, 
    AnchorApprove,
    TableComponent,
    ButtonDirective,
    InputDirective,
    NpIfDirective,
  ],
  imports: [
    ComponentsCommonModule,
    NzModalModule,
    NzButtonModule,
  ],
  providers: [],
})
class AnchorModule {};
export default AnchorModule;