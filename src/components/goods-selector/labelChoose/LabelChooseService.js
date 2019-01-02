import './_label-choose.scss';
import controller from './LabelChooseController';
import template from './label-choose.tpl.html';
import injector from 'angular-es-utils/injector';

const LabelChooseService = {
	labelChoose(title, labelList, { selectedLabels, mapping, placeholderText }) {

		const $ccModal = injector.get('$ccModal');

		return $ccModal.modal(
			{
				title: title,
				fullscreen: false,
				hasFooter: true,
				style: {
					'max-height': '250px',
					width: '520px',
					'min-width': '520px'
				},
				__body: template,
				locals: {
					labelList: labelList,
					selectedLabels: selectedLabels,
					mapping: mapping,
					placeholderText: placeholderText
				},
				controller: controller,
				controllerAs: '$ctrl'
			}
		);
	}
};

export default LabelChooseService;
