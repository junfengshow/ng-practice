import { NgModule } from '@angular/core'
// import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzCardModule, NzInputModule, NzGridModule } from 'ng-zorro-antd'
import { WelcomeComponent } from './welcome.component'
// import { InputDirective } from '../../directives/input.directive'
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
  ],
  exports: [
    WelcomeComponent, 
    // InputDirective,
  ],
  providers: []
})
export class WelcomeModule {}
