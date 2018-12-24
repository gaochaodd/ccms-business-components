/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-01-04
 */

import angular from 'angular';

import areaSelector from './area-selector';
import customerProfileBoard from './customer-profile-board';


export default angular
	.module('ccms.components.business', [
		areaSelector,
		customerProfileBoard
	])
	.name;

