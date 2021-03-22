import { Component, Input } from '@angular/core';

@Component({
  selector: 'wiki-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
	constructor(
	){}

	@Input() data: any;

	alphabeticalPageList = {};
	letterList = [];

	ngOnInit(){
		for(var i=0;i<this.data.pages.length;i++){
			var page = this.data.pages[i];
			var firstLetter = this.data.pages[i].charAt(0).toUpperCase();
			if(this.alphabeticalPageList[firstLetter] == null){
				this.alphabeticalPageList[firstLetter] = [];
			}
			this.alphabeticalPageList[firstLetter].push(page);
		}
		this.letterList = Object.keys(this.alphabeticalPageList);
		this.letterList = this.letterList.sort();
	}

}
