import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute
	){}
	pages = [];
	allPages;
	monsterPages = [];
	wardenPages = [];

	ngOnInit(){
		var path = "assets/data/pages/pages.json";
		this.http.get(path).subscribe(response => {
			this.allPages = response["pages"];
			for(var i=0;i<this.allPages.length;i++){
				if(this.allPages[i].category == "characters"){
					this.pages.push(this.allPages[i]);
				}else if(this.allPages[i].category == "wardens"){
					this.pages.push(this.allPages[i]);
				}else if(this.allPages[i].category == "monsters" && this.HasTag(this.allPages[i], "character")){
					this.pages.push(this.allPages[i]);
				}/*else if(this.allPages[i].category == "monsters" && this.HasTag(this.allPages[i], "character")){
					this.monsterPages.push(this.allPages[i]);
				}else if(this.allPages[i].category == "wardens" && this.HasTag(this.allPages[i], "character")){
					this.wardenPages.push(this.allPages[i]);
				}*/
			}
		});
	}

	HasTag(page, tag){
		var hasTag = false;
		if(page.tags){
			for(var i=0;i<page.tags.length;i++){
				if(page.tags[i] == tag){
					hasTag = true;
					break;
				}
			}
		}
		return hasTag;
	}

}
