import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WikiService } from '../services/wiki.service';

@Component({
	selector: 'wiki-disambiguation',
	templateUrl: './disambiguation.component.html',
	styleUrls: ['./disambiguation.component.scss']
})
export class DisambiguationComponent {
	constructor(
		private route: ActivatedRoute,
		private wiki: WikiService,
	){

	}

	isLoaded = false;

	data;
	pages = [];
	allPages;
	allCategories;

	disambiguations = [];

	ngOnInit(){
		var page = this.route.snapshot.params["page"];
		this.wiki.LoadData().subscribe(result => {
			this.disambiguations = this.wiki.GetDisambiguations();
			this.allPages = this.wiki.GetAllPages();
			for(var i=0;i<this.disambiguations.length;i++){
				if(this.disambiguations[i]["id"] == page){
					this.data = this.disambiguations[i];
					break;
				}
			}
			if(this.data){
				for(var i=0;i<this.allPages.length;i++){
					if(this.wiki.HasPhraseInTitle(this.allPages[i], this.data.phrases)){
						this.pages.push(this.allPages[i]);
					}
				}
			}
			this.isLoaded = true;
		})
	}

	

}
