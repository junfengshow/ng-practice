/**
 * 
 * http 基础服务
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Base64 } from "js-base64";
import md5 from 'js-md5'
import { stringify } from 'querystring';
import Cookie from '../utils/Cookie'

const getHeader = () => {
  const commonParams = {
    a: 21,
    av: '1.0.0',
    c: 1,
    ci: '',
    di: '',
    lat: '',
    lng: '',
    pm: '',
    t: Cookie.get('tk_ng_demo', { path: '/' }) || '',
    ts: new Date().getTime(), // + window.timeDiff
    s: ''
  }

  let toSign = ''
  Object.keys(commonParams).map((key) => {
    if (key !== 's') {
      toSign += '&' + key + '=' + commonParams[key];
    }
  })
  toSign = toSign.substr(1);
  var sign = md5(toSign + "pq1");
  commonParams.s = sign
  var pkg = Base64.encode(JSON.stringify(commonParams));
  return { pkg }
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded; charset=utf-8',
    'Accept': 'application/json',
    ...getHeader()
  })
}

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  // 获取数据的方法
  public getData (url: string, params?:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(url + `?${stringify(params)}`, httpOptions)
      .subscribe((res) => {
        if (!res) {
          reject('网络出错')
        } else if (res['code'] === 'OK') {
          resolve(res)
        } else if (res['code'] === 'TOKEN_INVALID') {
          reject(res['msg'])
          // Cookie.remove('tk_ng_demo', { path: '/' })
          // 跳转
          this.router.navigate(['login'])
        } else {
          reject(res['msg'])
        }
      }, reject)
    }) 
  }
  // 上传数据的方法
  public postData (url: string, params?:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(url, stringify(params), httpOptions)
      .subscribe((res) => {
        if (!res) {
          reject('网络出错')
        } else if (res['code'] === 'OK') {
          resolve(res)
        } else if (res['code'] === 'TOKEN_INVALID') {
          // Cookie.remove('tk_ng_demo', { path: '/' })
          reject(res['msg'])
          // 跳转
          this.router.navigate(['login'])
        } else {
          reject(res['msg'])
        }
      }, reject)
    })
  }

  // 登录
  public login (params) {
    return new Promise((resolve) => {
      resolve({
        code: 'ok',
      });
    });
    // return this.postData('/', params)
  }
  // 获取主播列表
  public getAnchorPageList (params) {
    return new Promise((resolve) => {
      resolve({
        code: 'ok',
      });
    });
    // return this.getData('/', params)
  }
}
