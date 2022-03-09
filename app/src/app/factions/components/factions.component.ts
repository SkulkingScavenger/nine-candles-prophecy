import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './factions.component.html',
	styleUrls: ['./factions.component.scss']
})
export class FactionsComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute
	){}
	majorPages = [];
	minorPages = [];
	allPages;

	ngOnInit(){
		var path = "assets/data/pages/pages.json";
		this.http.get(path).subscribe(response => {
			this.allPages = response["pages"];
			for(var i=0;i<this.allPages.length;i++){
				if(this.allPages[i].category == "factions"){
					this.majorPages.push(this.allPages[i]);
				}
			}
		});
	}

	HasTag(page, tagName){
		var hasTag = false;
		if(page && page.tags){
			for(var i=0;i<page.tags.length;i++){
				if(page.tags[i] == tagName){
					hasTag = true;
					break;
				}
			}
		}
		 return hasTag;
	}


}
