import { Injectable } from '@angular/core'
import { HttpService } from './http.service'
@Injectable()
export class HttpAnimationService {
  constructor (
    private http: HttpService
  ) {}
  public getAnimationList (params: any): any {
    return new Promise((resolve) => {
      resolve({
        code: 'ok',
        data: [],
      });
    });
    // return this.http.getData('/xx', params)
  }
  public disableAnimate (params: any): any {
    return new Promise((resolve) => {
      resolve({
        code: 'ok',
      });
    });
    // return this.http.postData('/xxx', params)
  }
}
