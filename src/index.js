/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-01-19
 */
import '@babel/polyfill'; // 参见 .babelrc useBuiltIns 参数
import 'core-js/modules/es6.regexp.constructor.js';


import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import ccmsComponents from 'ccms-components';
import BusinessComponents from './components';

const ccmsBusinessComponents = angular.module('ccms.business.components', [
	ngResource,
	uiRouter,
	ccmsComponents,
	BusinessComponents
]);

ccmsBusinessComponents.version = process.env.VERSION;

export default ccmsBusinessComponents.name;

