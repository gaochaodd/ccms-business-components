# ccms-business-components
 数据赢家业务组件库
 
 [![npm version](https://img.shields.io/npm/v/ccms-business-components.svg?style=flat-square)](https://www.npmjs.com/package/ccms-business-components)
 [![npm downloads](https://img.shields.io/npm/dt/ccms-business-components.svg?style=flat-square)](https://www.npmjs.com/package/ccms-business-components)
 
### 发布

注意: 发布前确认分支是否正确, 代码是否最新
```
npm run release
```

### 预发布

```
npm run test-release
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

## 贡献代码

### 开发步骤

1. 组内的人员直接 **clone** 本项目；其它人员请 **fork** 本项目。
2. 基于 master 分支创建你的分支，例如 feature/abc, bugfix/abc, docs/abc
3. 开发完成之后，在 github 网页中创建一个 pull request，base 为 master，compare 为你的分支名
4. 等待上游 review，merge pull request
5. 在开始另一个功能开发创建新分支之前，应当先将 master 分支同步为最新的状态。
6. 重复 2~5 的操作，创建新分支继续其它功能的开发
