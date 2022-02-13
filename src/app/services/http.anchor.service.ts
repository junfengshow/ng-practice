import { Injectable } from '@angular/core'
import { HttpService } from './http.service'

interface AnchorListSearchInterface {}

@Injectable()
export class HttpAnchorService {
  constructor (
    private http: HttpService
  ) {}
  public getAnchorList (params: AnchorListSearchInterface): any {
    return new Promise((resolve) => {
      resolve({
        code: 'ok',
        data: [],
      });
    });
    // return this.http.getData('/api-manage/v1/anchor/getAnchorPageList', params)
  }
}