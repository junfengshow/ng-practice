import { Injectable } from  '@angular/core';

@Injectable()
export class WelcomeService {
  public items: any = [{
    value: 'zhangsan'
  }];
  constructor () {}
  public getItems () {
    return this.items;
  }
  public addItems (item: any) {
    return this.items.push(item);
  }
}
