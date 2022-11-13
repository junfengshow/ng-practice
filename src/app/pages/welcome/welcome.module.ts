import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzCardModule, NzInputModule, NzGridModule } from 'ng-zorro-antd'
import { MineCommonModule } from '../common.module'
import { WelcomeComponent } from './welcome.component'
import { WelcomeService } from './welcome.service';
@NgModule({
  declarations: [
    WelcomeComponent, 
    // InputDirective,
  ],
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    NzCardModule, 
    NzInputModule, 
    NzGridModule,
    CommonModule,
    MineCommonModule,
  ],
  exports: [
    WelcomeComponent, 
    // InputDirective,
  ],
  providers: [WelcomeService]
})
export class WelcomeModule {}
