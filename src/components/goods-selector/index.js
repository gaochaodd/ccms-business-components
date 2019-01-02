
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import gsTabs from './tabs';
import labelChoose from './labelChoose';
import GoodsSelectorService from './GoodsSelectorService';

export default angular
	.module('ccms.components.goodsSelector', ['ccms.components.bindHtml', gsTabs, labelChoose, ngSanitize])
	.value('$ccGoodsSelector', GoodsSelectorService)
	.name;
