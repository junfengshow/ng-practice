/**
 * 
 * 登录页面
 */
import  { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// import Swiper from 'Swiper'
import { HttpService } from '../../services/http.service'
import md5 from 'js-md5'
import { Router } from '@angular/router'

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private router: Router
  ) {}
  ngOnInit () {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }
  async onFormSubmit (e) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty()
      this.validateForm.controls[i].updateValueAndValidity()
    }
    let { status, value } = this.validateForm
    if (status) {
      status = status.toLocaleLowerCase()
    }
    if (status === 'valid') {
      const { userName, password } = value
      const res = await this.http.login({
        account: userName, password: md5(password)
      })
      this.router.navigate(['welcome']);
    }
  }
  onSubmit () {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty()
      this.validateForm.controls[i].updateValueAndValidity()
    }
  }
}
