import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './races.component.html',
	styleUrls: ['./races.component.scss']
})
export class RacesComponent {
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
				if(this.allPages[i].category == "races"){
					if(this.HasTag(this.allPages[i], "major race")){
						this.majorPages.push(this.allPages[i]);
					}else if(this.HasTag(this.allPages[i], "minor race")){
						this.minorPages.push(this.allPages[i]);
					}
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
