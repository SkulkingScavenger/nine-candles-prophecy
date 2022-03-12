import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { WikiService } from '../services/wiki.service';

@Component({
	selector: 'wiki-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent {
	constructor(
		private route: ActivatedRoute,
		private wiki: WikiService,
	){}
	@Input() data;
	@Input() allPages;
	@Input() allCategories;
	@Input() disambiguations;

	headers = [];
	showTableOfContents = false;
	disambiguation;

	ngOnInit(){
		this.PreprocessHTML();
	}

	ngAfterViewInit(){
		setTimeout(()=>{
			this.AssembleTableOfContents();
			this.GetDisambiguations();
			this.ScrollToFragment();
		});
	}

	AssembleTableOfContents(){
		var headerSizes = {"H3": 3, "H4": 4, "H5": 5}
		var pageElements = document.getElementsByClassName("subsection-title");
		pageElements = Array.prototype.map.call(pageElements, function(el){return el});
		for(var i=0;i<pageElements.length;i++){
			this.headers[i] = {
				"title": pageElements[i]["innerText"],
				"index": (i+1),
				"element": pageElements[i],
				"id": pageElements[i]["id"],
				"size": headerSizes[pageElements[i]["nodeName"]]
			};
		}
		if(this.headers.length > 0){
			this.showTableOfContents = true;
		}
	}

	PreprocessHTML(){
		this.data.content = this.InjectHyperlinkPrefixes(this.data.content);
		var arr;
		if(this.data.content.indexOf("#INFOBOX_END") > 0){
			arr = this.data.content.split("#INFOBOX_END");
			this.data.infoboxContent = arr[0];
			this.data.content = arr[1];
		}
		if(this.data.content.indexOf("#INTRO_END") > 0){
			arr = this.data.content.split("#INTRO_END");
			this.data.introContent = arr[0];
			this.data.content = arr[1];
		}
	}

	ScrollToFragment(){
		var el;
		var fragment = this.route.snapshot.fragment;
		if(fragment){
			for(var i=0;i<this.headers.length;i++){
				if(this.headers[i].id == fragment){
					el = this.headers[i].element;
					el.scrollIntoView();
					break;
				}
			}
			
		}	
	}

	InjectHyperlinkPrefixes(str){
		var prefix;
		prefix = environment.base_url;
		return str.replace(/HYPERLINK_PREFIX/g,prefix);
	}

	GetDisambiguations(){
		for(var i=0;i<this.disambiguations.length;i++){
			if(this.wiki.HasPhraseInTitle(this.data, this.disambiguations[i].phrases)){
				this.disambiguation = this.disambiguations[i];
				break;
			}
		}
		
	}

	// ProcessHyperlinks(){
	// 	var pageElement = document.getElementById("page-container");
	// 	var anchors = Array.prototype.map.call(pageElement.getElementsByTagName("a"), function(el){return el});
	// 	var baseUrl = "http://localhost:4200";
	// 	for(var i=0;i<anchors.length;i++){
	// 		console.log(anchors[i].hash);
	// 		if(anchors[i].hash){
	// 			const hash = anchors[i].hash;
	// 			//anchors[i].setAttribute('href', `/$environment.base_url`)
	// 			anchors[i].setAttribute('fragment', `/${hash}`);
	// 			anchors[i].setAttribute('ng-reflect-fragment', `/${hash}`);
	// 			anchors[i].setAttribute('routerlink', `/${baseUrl}`);
	// 		}else{

	// 		}
	// 	}
	// }

}
