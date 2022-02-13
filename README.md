# angularjs

## 目录
```bash
|—— angular.json 配置文件
|—— src
    |—— app
        |—— app.module.ts 主模块入口
        |—— app.component.ts 根组件一
        |—— global.component.ts 根组件二
        |—— components 公用组件
        |—— directives 公用指令
        |—— layouts 页面布局
        |—— pages 页面
        |—— services 公用服务
        |—— utils 公用函数
    |—— assets 静态资源 
    |—— environments 环境区分 
    |—— typings 公用的类型约束 
```


## 主入口 src/main
如何在一个页面注入多个根组建。

在app.module中bootstrap注入多个组件，同时组件的selector分别对应index.html中的标签。
