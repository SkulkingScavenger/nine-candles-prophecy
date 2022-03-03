import { Component, Input } from '@angular/core';

@Component({
	selector: 'table-of-contents',
	templateUrl: './table-of-contents.component.html',
	styleUrls: ['./table-of-contents.component.scss']
})
export class TableOfContentsComponent {
	@Input() headers;

	isVisible = true;

	ScrollToHeader(el){
		el.scrollIntoView();
	}

	ToggleVisibility(){
		this.isVisible = !this.isVisible;
	}
	
}
