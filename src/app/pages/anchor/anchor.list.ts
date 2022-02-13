/**
 * 主播列表
 */
import { 
  Component, 
  OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, 
  ViewChild 
} from '@angular/core';
import TableComponent from './components/table.component';

@Component({
  selector: 'anchor-list',
  template: `
    <wrap-page>
      <ng-template>
        <a (click)='toggleLoading()'>loading</a>
        <anchor-table-content
          [loading]='loading'
        ></anchor-table-content>
      </ng-template>
      dkdkdek
    </wrap-page>
  `,
  providers: []
})
class AnchorList implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {
  public loading: boolean = false;
  @ViewChild(TableComponent)
  private viewChild: any;
  constructor () {}
  ngOnInit(): void {
    // console.log('ngOnInit viewChild', this.viewChild)
  }

  ngAfterViewInit(): void {
    const viewContainerRef = this.viewChild.viewContainerRef;
    // console.log(document.getElementById('tableList'))
  }

  ngAfterViewChecked(): void {
    const viewContainerRef = this.viewChild.viewContainerRef;
    // console.log('this.viewChild', this.viewChild)
    // console.log(document.getElementById('tableList'))
  }

  ngAfterContentInit(): void {
    // console.log('this is ngAfterContentInit')
  }

  public toggleLoading (): void {
    this.loading = !this.loading;
    // this.viewChild.showAge();
  }

}
export default AnchorList;
