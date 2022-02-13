import { Component } from '@angular/core';

@Component({
  selector: 'app-global',
  template: `
    <div class='global-wrap'>根组件二</div>
  `,
  styles: [`
    .global-wrap {
      position: fixed;
      top: 10px;
      right: 10px;
      left: unset;
      width: 200px;
      background: #fff;
      box-shadow: 0 0 4px 4px rgba(0, 0, 0, .1);
      padding: 10px;
      border-radius: 4px;
    }
  `]
})
class GlobalComponent {
  constructor () {}
}
export default GlobalComponent;
