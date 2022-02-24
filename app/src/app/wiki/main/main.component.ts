import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, EMPTY } from 'rxjs';
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
			//console.log(val);
			if(val.url && this.isLoaded && val.url != this.urlPrevious){
				this.isLoaded = false;
				this.urlPrevious = val.url;
				this.Init();
			}
		});
	}

	sub;
	data;
	content;
	isLoaded = false;
	pageNotFound = false;
	isCategory = false;
	urlPrevious = "";

	ngOnInit(){
		this.Init();
	}

	ngOnDestroy(){
		this.sub.unsubscribe();
	}

	Init(){
		this.route.paramMap.subscribe(params => {
			this.LoadPage(params.get('page').toLowerCase());
		})
	}

	LoadPage(pageName){
		var path = path = "assets/wiki/pages/pages.json";
		this.isCategory = pageName.indexOf("category:") >= 0;

		var pageFound = false;
		var error = false;

		let sub = this.http.get(path).pipe(
			switchMap((response: any) => {
				if(this.isCategory){
					var category = pageName.split("category:")[1];
					console.log(category);
					this.data = [];
					for(var i=0;i<response.pages.length;i++){
						if(response.pages[i].category == category){
							this.data.push(response.pages[i]);
						}
					}
					this.isLoaded = true;					
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
					
					var contentPath	= "assets/wiki/pages/" + this.data.contentPath + ".html";
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
				var contentPath	= "assets/wiki/pages/" + this.data.contentPath + ".html";
					return this.http.get(contentPath, {responseType: 'text'});	
			})
		);
		sub.subscribe(result => {
			if (error){
				this.data.content = result;
			}
			this.isLoaded = true;
		});

	}
}
