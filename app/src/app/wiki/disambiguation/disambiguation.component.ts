import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-disambiguation',
	templateUrl: './disambiguation.component.html',
	styleUrls: ['./disambiguation.component.scss']
})
export class DisambiguationComponent {

	@Input() data;
	@Input() allPages;
	@Input() allCategories;

	ngOnInit(){
		
	}

}
