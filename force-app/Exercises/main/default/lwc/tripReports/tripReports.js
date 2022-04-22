import ContentLocation from '@salesforce/schema/ContentVersion.ContentLocation';
import { LightningElement } from 'lwc';

export default class TripReports extends LightningElement {
	selectedTripReportId = 0;
	mode = 'browse';

	get browseMode() {
		return (this.mode==='browse');
	}
	get addOrEditMode() {
		return (this.mode==='add' || this.mode==='edit');
	}

	handleTripReportModeChange(event) {
		console.log('Inside handleTripReportModeChange ',event);
		this.mode = event.detail.mode;
		this.selectedTripReportId = event.detail.Id;
	}

}