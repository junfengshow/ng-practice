/**
 * 
 * 欢迎页面
 */
import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { InputDirective } from '../../directives/input.directive';
import { Observable } from 'rxjs';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  public userNameControl = new FormControl('')
  public userName: string;
  public list: any = this.wcService.getItems();

  // @ViewChild(InputDirective)
  // public divColor: InputDirective;

  public userInfoGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userAge: new FormControl(0),
  })
  public testBuildGroup: FormGroup;

  private testObserver = new Observable((observer) => {
    window.addEventListener('click', () => {
      console.log('-------', observer)
      observer.next('aaaa')
    })
    return  {
      unsubscribe: () => {

      }
    }
  })
  constructor(
    private http: HttpService,
    private fb: FormBuilder,
    private wcService: WelcomeService,
  ) {}

  ngOnInit () {
    this.testBuildGroup = this.fb.group({
      userName: [''],
      userAge: [''],
    });
    // this.userNameControl.valueChanges.subscribe((value) => {
    //   console.log(value)
    // })
    console.log(this.userInfoGroup)
    this.userInfoGroup.controls.userName.valueChanges.subscribe((a) => {
      this.userInfoGroup.controls.userAge.setValue(this.userInfoGroup.value.userAge + 1);
    });
    // this.userInfoGroup.valueChanges.subscribe((a) => {
    //   console.log('a: ', a)
    //   console.log(a.userName !== this.userInfoGroup.value.userName)
    //   if (a.userName !== this.userInfoGroup.value.userName) {
    //     this.userInfoGroup.setValue({ userAge: a.userAge + 1 });
    //   } 
    //   // console.log('b: ', b)
    // });
  }
  onClick (e) {
    e.preventDefault();
    console.log('userInfoGroup: ', this.userInfoGroup.value);
    console.log('testBuildGroup: ', this.testBuildGroup.value);
    this.addItems();
  }

  ngAfterViewInit () {
    // console.log(this.divColor)
  }
  // ngAfterViewChecked () {
  //   console.log('ngAfterViewChecked: ', this.divColor)
  // }

  onUserInfoSubmit () {
    console.log(this.userInfoGroup)
  }

  addItems () {
    this.wcService.addItems({ value: '11111' })
  }
}
