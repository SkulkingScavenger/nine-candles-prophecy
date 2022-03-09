import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, EMPTY, forkJoin } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
		private router: Router,
	){
		this.sub = router.events.subscribe((val:any) => {
			if(val.url && this.isLoaded && val.url != this.urlPrevious){
				this.isLoaded = false;
				this.urlPrevious = val.url;
				var pageName = val.url.split("/");
				pageName = pageName[pageName.length-1];
				if(pageName.indexOf('#') > 0){
					pageName = pageName.split('#')[0];
				}else{
				}
				this.LoadPage(pageName);				
			}
		});
	}

	sub;
	data;
	content;
	isLoaded = false;
	pageNotFound = false;
	allPages = [];
	isCategory = false;
	urlPrevious = "";
	initialized = false;
	allCategories;

	ngOnInit(){
		this.route.paramMap.subscribe(params => {
			this.LoadPage(params.get('page').toLowerCase());
		})
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}


	LoadPage(pageName){
		var path = "assets/data/pages/pages.json";
		this.isCategory = pageName.indexOf("category:") >= 0;
		var pageFound = false;
		var error = false;

		let sub = this.http.get(path).pipe(
			switchMap((response: any) => {
				this.allPages = response;
				if(this.isCategory && false){
					// var category = pageName.split("category:")[1];
					// this.data = [];
					// for(var i=0;i<response.pages.length;i++){
					// 	if(response.pages[i].category == category){
					// 		this.data.push(response.pages[i]);
					// 	}
					// }
					//this.isLoaded = true;			
					return EMPTY;
				}else{
					var pages = response.pages;
					for(var i =0;i<pages.length;i++){
						if(pages[i].url == pageName){
							this.data = pages[i];
							pageFound = true;
						}
					}
					if(!pageFound){
						this.data = {"title": "NO PAGE FOR YOU!!!", "contentPath": "default"}	
					}
					
					var contentPath	= "assets/data/pages/" + this.data.contentPath + ".html";
					return this.http.get(contentPath, {responseType: 'text'});
				}
					
			}),
			map(response => {
				if(response != null && !this.isLoaded){
					this.data.content = response;
				}
			}),
			catchError((err, caught) => {
				error = true;
				this.data = {"title": "NO PAGE FOR YOU!!!", "contentPath": "default"};
				var contentPath	= "assets/data/pages/" + this.data.contentPath + ".html";
					return this.http.get(contentPath, {responseType: 'text'});	
			}),
			
		);
		forkJoin(sub, this.http.get("assets/data/pages/categories.json")).subscribe(result => {
			this.allCategories = result[1]["categories"];
			if (error){
				this.data.content = result[0];
			}
			this.OnLoad();
		});

	}


	OnLoad(){
		this.isLoaded = true;
		if(!this.isCategory){
			//this.data.content = this.InjectHyperlinkPrefixes(this.data.content);
		}else{
			this.pageNotFound = false;
		}
	}

}
