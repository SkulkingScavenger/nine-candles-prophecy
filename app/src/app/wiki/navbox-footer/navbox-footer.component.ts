import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-navbox-footer',
	templateUrl: './navbox-footer.component.html',
	styleUrls: ['./navbox-footer.component.scss']
})
export class NavboxFooterComponent {

	@Input() data;
	@Input() allPages;
	@Input() allCategories;

	title = "";
	categories = [];
	isVisible = true;

	ngOnInit(){
		for(var i=0;i<this.data.categories.length;i++){
			this.categories[i] = {"title": this.data.categories[i].title,"url": this.data.categories[i].url, "items": []};

			for(var j=0;j<this.allPages.pages.length;j++){
				
				if(this.PageMatchesCriteria(this.allPages.pages[j], this.data.categories[i])){
					this.categories[i].items.push(this.allPages.pages[j]);
				}
			}
		}
	}

	PageMatchesCriteria(page, category){
		var matchFound = true;
		
		if(category.category && !page.category.includes(category.category)){
			matchFound = false;

		}else if(category.tag){
			var tagMatched = false;
			if(page.tags){
				for(var i=0;i<page.tags.length;i++){
					if(page.tags[i] == category.tag){
						tagMatched = true;
						break;
					}
				}
			}
			if(!tagMatched){
				matchFound = false;
			}
		}
		if(category.excludeTags){
			for(var i=0;i<category.excludeTags.length;i++){
				if(page.tags){
					for(var j=0;j<page.tags.length;j++){
						if(page.tags[j] == category.excludeTags[i]){
							matchFound = false;
							break;
						}
					}
				}
			}
		}

		return matchFound;
	}

	ToggleVisibility(){
		this.isVisible = !this.isVisible;
	}

}
