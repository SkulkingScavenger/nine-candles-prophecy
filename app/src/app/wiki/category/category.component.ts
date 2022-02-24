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

	@Input() data: any;

	alphabeticalPageList = {};
	letterList = [];

	subcategoryData = [];

	contentHTML;
	isLoaded = false;


	ngOnInit(){
		console.log(this.data);
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


		if(this.data.content){
			this.http.get(this.data.content, {responseType: 'text'})
			.subscribe(content => {
				this.contentHTML = content;
				this.isLoaded = true;
				if(content == null){
					// this.pageNotFound = true;
				}
			});
		}

		if(this.data.subcategories){
			var requests = [];
			for(var i=0;i<this.data.subcategories.length;i++){
				this.data.subcategories[i].data = {};
				var path = "assets/wiki/categories/" + this.data.subcategories[i].url + ".json";
				requests[i] = this.http.get(path, {responseType: 'json'});
			}
			forkJoin(requests).subscribe(responses =>{
				for(var i=0;i<responses.length;i++){
					this.data.subcategories[i].data = responses[i];
				}
			});
		}
	}

}
