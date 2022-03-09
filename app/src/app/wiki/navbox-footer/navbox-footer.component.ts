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
	mainCategory = null;

	ngOnInit(){
		this.mainCategory = this.data.mainCategory;
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
		var hasAllRequiredTags = this.HasAllRequiredTags(page, category.requiredTags);
		var hasNoExcludedTags = this.HasNoExcludedTags(page, category.excludeTags);;
		var hasRequiredCategory = this.HasRequiredCategory(page, category.category);;


		return hasAllRequiredTags && hasNoExcludedTags && hasRequiredCategory;
	}

	ToggleVisibility(){
		this.isVisible = !this.isVisible;
	}

	HasAllRequiredTags(page, requiredTags){
		var isRequired = true;
		var allMatch = true;
		var hasTag;
		if(requiredTags && Array.isArray(requiredTags) && requiredTags.length > 0){
			if(page.tags){
				for(var i=0;i<requiredTags.length;i++){
					hasTag = false;
					for(var j=0;j<page.tags.length;j++){
						if(page.tags[j] == requiredTags[i]){
							hasTag = true;
							break;
						}
					}
					if(!hasTag){
						allMatch = false;
						break;
					}
				}
			}else{
				allMatch = false;
			}
		}else{
			isRequired = false;
		}

		return !isRequired || allMatch;
	}

	HasNoExcludedTags(page, excludeTags){
		var hasAnyExcludedTag = false;
		if(excludeTags && Array.isArray(excludeTags) && excludeTags.length > 0){
			if(page.tags){
				for(var i=0;i<excludeTags.length;i++){
					for(var j=0;j<page.tags.length;j++){
						if(page.tags[j] == excludeTags[i]){
							hasAnyExcludedTag = true;
							break;
						}
					}
					if(hasAnyExcludedTag){
						break;
					}
				}
			}
		}

		return !hasAnyExcludedTag;
	}

	HasRequiredCategory(page, category){
		var flag = true;
		if(typeof(category) === "string" && category){
			flag = page.category == category;
		}
		return flag;
	}

}
