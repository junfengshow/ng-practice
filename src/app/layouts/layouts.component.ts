import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'layouts-component',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.less']
})
export class LayoutsComponent implements OnInit{
  public isCollapsed: boolean = false;
  public initOk: boolean = true;
  private timer?: number;
  
  constructor(
    private router: Router
  ) {}
  ngOnInit () {
    // 发请求 初始化导航等信息
  }
  public getSelected (pathname: string): boolean {
    return this.router.url.indexOf(pathname) !== -1
  }
  public onMenuClick (e) {
    // console.log(e)
  }
}
