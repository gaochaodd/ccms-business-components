/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-01-04
 */

import angular from 'angular';

import areaSelector from './area-selector';
import customerProfileBoard from './customer-profile-board';
import smsEditor from './sms-editor';
import smsPreview from './sms-preview';
import shopSelector from './shop-selector';
import goodsSelector from './goods-selector';


export default angular
	.module('ccms.business.components.ui', [
		areaSelector,
		customerProfileBoard,
		smsEditor,
		smsPreview,
		shopSelector,
		goodsSelector
	])
	.name;

