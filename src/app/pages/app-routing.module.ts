/**
 * 路由模块
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 页面
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeModule } from './welcome/welcome.module';
import { HttpAnchorService } from '../services/http.anchor.service';

import AnchorModule from './anchor/anchor.module';
import AnchorList from './anchor/anchor.list';
import AnchorApprove from './anchor/anchor.approve';
import SourceModule from './source/source.module';
import SourceAnimation from './source/source.animation';
import { LoginModule } from './login/login.module'

// 布局
import { LayoutsModule } from '../layouts/layouts.module'
// 服务
import { HttpService } from '../services/http.service'

const routes: Routes = [
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { 
    path: '', component: LayoutsModule.layoutsComponent, 
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'anchor/list', component: AnchorList },
      { path: 'anchor/approve', component: AnchorApprove },
      { path: 'animation/list', component: SourceAnimation },
    ]
  },
  { path: 'login', component: LoginModule.loginComponent }
]

@NgModule({
  imports: [
    // 导入路由模块
    RouterModule.forRoot(routes), 
    // 其它模块
    WelcomeModule,
    LayoutsModule,
    LoginModule,
    AnchorModule,
    SourceModule,
  ],
  exports: [RouterModule],
  // 标记组件等
  declarations: [
  ],
  // 注入服务
  providers: [HttpService, HttpAnchorService]
})
export class AppRoutingModule { }
