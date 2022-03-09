import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {
	@Input() source;

	isVisible = false;

	ngOnInit(){
		
	}

	ToggleVisibility(){

	}

}
