import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {

	@Input() data;
	@Input() allPages;
	@Input() allCategories;

	headers = [];
	showTableOfContents = false;

	ngAfterViewInit(){
		setTimeout(()=>{
			this.AssembleTableOfContents();
		});
	}

	AssembleTableOfContents(){
		var headerSizes = {"H3": 3, "H4": 4, "H5": 5}
		var pageElements = document.getElementsByClassName("subsection-title");
		pageElements = Array.prototype.map.call(pageElements, function(el){return el});
		for(var i=0;i<pageElements.length;i++){
			this.headers[i] = {
				"title": pageElements[i]["innerText"],
				"index": (i+1),
				"element": pageElements[i],
				"size": headerSizes[pageElements[i]["nodeName"]]
			};
		}
		if(this.headers.length > 0){
			this.showTableOfContents = true;
		}
	}

}
