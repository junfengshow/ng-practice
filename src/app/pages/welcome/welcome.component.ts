/**
 * 
 * 欢迎页面
 */
import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { InputDirective } from '../../directives/input.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'welcome-component',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  public userNameControl = new FormControl('')
  public userName: string;

  @ViewChild(InputDirective)
  public divColor: InputDirective;

  public userInfoGroup: FormGroup = new FormGroup({
    userName: new FormControl(''),
    userAge: new FormControl(''),
  })
  public testBuildGroup: FormGroup

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
  ) {}

  ngOnInit () {
    this.testBuildGroup = this.fb.group({
      userName: [''],
      userAge: [''],
    });
    // this.userNameControl.valueChanges.subscribe((value) => {
    //   console.log(value)
    // })
    // console.log(this.divColor)
  }
  onClick (e) {
    e.preventDefault();
    console.log('userInfoGroup: ', this.userInfoGroup.value);
    console.log('testBuildGroup: ', this.testBuildGroup.value);
  }

  ngAfterViewInit () {
    // console.log(this.divColor)
  }
  // ngAfterViewChecked () {
  //   console.log('ngAfterViewChecked: ', this.divColor)
  // }
}
