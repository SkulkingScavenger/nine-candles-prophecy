import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'wiki-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
	){}

	@Input() allPages;
  @Input() allCategories;

  data = [];
	alphabeticalPageList = {};
	letterList = [];

	category;
	subcategoryData = [];

	contentHTML;
	isLoaded = false;

	ngOnInit(){
		this.route.paramMap.subscribe(params => {
			let categoryId = params.get('page').toLowerCase().split("category:")[1];
			if(categoryId){
				this.LoadPage(categoryId);	
			}
		})
	}

	LoadPage(categoryId){

		
		this.category = this.GetCategory(categoryId);
		
		this.data = this.GetPages(this.category, this.allPages.pages);
		for(var i=0;i<this.data.length;i++){
			var page = this.data[i];
			var firstLetter = page.title.charAt(0).toUpperCase();
			if(this.alphabeticalPageList[firstLetter] == null){
				this.alphabeticalPageList[firstLetter] = [];
			}
			this.alphabeticalPageList[firstLetter].push(page);
		}
		this.letterList = Object.keys(this.alphabeticalPageList);
		this.letterList = this.letterList.sort();

	}

	GetCategory(categoryId){
		let category = {};
		for(var i=0; i<this.allCategories.length;i++){
			if(this.allCategories[i].id == categoryId){
				category = this.allCategories[i];
				break;
			}
		}
		return category;
	}

	GetPages(category, allPages){
		var pages = [];
		for(var i=0;i<allPages.length;i++){
			if(category.selector == "tag"){
				if(allPages[i].tags){
					for(var j=0;j<allPages[i].tags.length;j++){
						if(category.id == allPages[i].tags[j]){
							pages.push(allPages[i]);
							break;
						}
					}
				}
			}else if(category.selector == "category"){
				if(allPages[i].category == category.id){
					pages.push(allPages[i]);
				}
			}
		}
		return pages;
	}

}
