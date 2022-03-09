import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-subcategory',
	templateUrl: './subcategory.component.html',
	styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent {

	@Input() data;
	@Input() allPages;
	@Input() allCategories;

	ngOnInit(){
		if(this.data.subcategories){
			for(var i=0;i<this.data.subcategories.length;i++){
				this.data.subcategories[i].cards = this.FindMatches(this.data.subcategories[i]);
			}	
		}		
	}

	FindMatches(subcategory){
		var hasAllRequiredTags;
		var hasNoExcludedTags;
		var hasRequiredCategory;
		var matches = [];
		for(var i=0;i<this.allPages.length;i++){
			hasAllRequiredTags = this.HasAllRequiredTags(this.allPages[i], subcategory.requiredTags);
			hasNoExcludedTags = this.HasNoExcludedTags(this.allPages[i], subcategory.excludeTags);
			hasRequiredCategory = this.HasRequiredCategory(this.allPages[i], subcategory.requiredTags);
			if(hasAllRequiredTags && hasNoExcludedTags && hasRequiredCategory){
				matches.push(this.allPages[i]);
			}
		}
		return matches;
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
