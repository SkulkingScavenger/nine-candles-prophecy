import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	@Input() data;
	@Input() allPages;
	@Input() allCategories;

	ngOnInit(){
		this.InsertTagBoxes();
		this.InsertCategoryBox();
	}

	InsertCategoryBox(){
		for(var i=0;i<this.allCategories.length;i++){
			
			if(this.allCategories[i].id == this.data.category && this.allCategories[i].selector == "category"){
				if(!this.data["navigation-footers"]){
					this.data["navigation-footers"] = [];
				}
				this.data["navigation-footers"].push(this.allCategories[i]["navigation-footers"][0]);
			}
		}
	}

	InsertTagBoxes(){
		for(var i=0;i<this.allCategories.length;i++){
			if(this.allCategories[i].appliesTo){

				if(this.IsApplicableToPage(this.allCategories[i].appliesTo, this.data)){
					if(!this.data["navigation-footers"]){
						this.data["navigation-footers"] = [];
					}
					this.data["navigation-footers"].push(this.allCategories[i]["navigation-footers"][0]);
				}
			}
		}
	}

	IsApplicableToPage(criteria, page){
		var matchFound = false;
		for(var i=0;i<criteria.length;i++){
			var hasRequiredCategory = this.HasRequiredCategory(page, criteria[i].category);
			var hasAllRequiredTags = this.HasAllRequiredTags(page, criteria[i].requiredTags);
			var hasNoExcludedTags = this.HasNoExcludedTags(page, criteria[i].excludeTags);
			if(hasRequiredCategory && hasAllRequiredTags && hasNoExcludedTags){
				matchFound = true;
				break;
			}
		}
		return matchFound;
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
