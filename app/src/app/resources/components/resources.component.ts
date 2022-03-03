import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, EMPTY, forkJoin } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { NoSanitizePipe } from '../../wiki/pipes/nosanitizerpipe';

@Component({
	selector: 'app-root',
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
	constructor(
		private http: HttpClient,
	){}
	pages = [];
	allPages;
	allCategories;

	ngOnInit(){

		var requests = [];
		requests.push(this.http.get("assets/data/pages/pages.json"));
		requests.push(this.http.get("assets/data/pages/categories.json"));
		forkJoin(requests).subscribe(results => {
			this.allPages = results[0]["pages"];
			this.allCategories = results[1]["categories"];
			var pageRequests = [];
			for(var i=0;i<this.allPages.length;i++){
				if(this.allPages[i].category == "resources"){
					this.pages.push(this.allPages[i]);
					pageRequests.push(this.http.get("assets/data/pages/" + this.allPages[i].contentPath + ".html", {responseType: 'text'}));
				}
			}
			forkJoin(pageRequests).subscribe(results => {
				for(var i=0; i<results.length;i++){
					this.pages[i].content = results[i];
				}
			});
		});
	}
}
