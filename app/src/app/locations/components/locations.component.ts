import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './locations.component.html',
	styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute
	){}
	dominionPages = [];
	regionPages = [];
	villagePages = [];
	locationPages = [];
	biomePages = [];
	allPages;

	ngOnInit(){
		var path = "assets/data/pages/pages.json";
		this.http.get(path).subscribe(response => {
			this.allPages = response["pages"];
			for(var i=0;i<this.allPages.length;i++){
				if(this.allPages[i].category == "locations"){
					if(this.HasTag(this.allPages[i], "dominion")){
						this.dominionPages.push(this.allPages[i]);
					}else if(this.HasTag(this.allPages[i], "village")){
						this.villagePages.push(this.allPages[i]);
					}else if(this.HasTag(this.allPages[i], "region")){
						this.regionPages.push(this.allPages[i]);
					}else{
						this.locationPages.push(this.allPages[i]);
					}
				}else if(this.allPages[i].category == "biomes"){
					this.biomePages.push(this.allPages[i]);
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

	UpperOnClick(){
		console.log("beep!");
	}


}
