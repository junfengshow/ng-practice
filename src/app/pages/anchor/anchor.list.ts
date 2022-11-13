/**
 * 主播列表
 */
import { 
  Component, 
  OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, 
  ViewChild 
} from '@angular/core';
import TableComponent from './components/table.component';
import { Observable } from 'rxjs';
import { WelcomeService } from '../welcome/welcome.service';

@Component({
  selector: 'anchor-list',
  template: `
    <wrap-page>
      <ng-template>
        <a (click)='toggleLoading()'>loading</a>
        <anchor-table-content
          [loading]='loading'
        ></anchor-table-content>
        <div div-color>div color</div>
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
  constructor (
    private wcService: WelcomeService
  ) {}
  ngOnInit(): void {
    // console.log('ngOnInit viewChild', this.viewChild)
    const l = new Observable((observer) => {
      observer.next();
    });
    
    l.subscribe({
      next: () => {
        console.log('subscribe 1111111')
      }
    });
    l.subscribe({
      next: () => {
        console.log('subscribe 2222222')
      }
    });
    console.log(this.wcService.getItems())
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
