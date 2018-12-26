# ccms-business-components
 数据赢家业务组件库
 
### 发布

注意: 发布前确认分支是否正确, 代码是否最新
```
npm run release
```

### 预发布

```
npm run prerelease
```
 
### 开发

```
npm start
```

### 安装

```
npm install --save ccms-business-components ccms-components angular angular-resource angular-ui-router
```

### 使用

```js
import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

import ccmsComponents from 'ccms-components';
import ccmsBusinessComponents from 'ccms-business-components';

angular.module('app', [ngResource, uiRouter, ccmsComponents, ccmsBusinessComponents]);
```
