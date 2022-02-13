/**
 * 
 * 主播列表
 */
import { Component, Input, ViewContainerRef } from "@angular/core";

@Component({
  selector: 'anchor-table-content',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [],
})
class TableComponent {
  @Input() loading: boolean;
  public age: number = 0;
  // 依赖注入
  constructor (
    public viewContainerRef: ViewContainerRef,
  ) {}
  public showAge () {
    this.age++;
  }
}
export default TableComponent;
