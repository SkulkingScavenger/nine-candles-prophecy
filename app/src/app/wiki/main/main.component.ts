import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute,
	){}
	data;
	isLoaded = false;
	pageNotFound = false;
	isCategory = false;
	ngOnInit(){
		this.route.paramMap.subscribe(params => {
			console.log(params.get('page'))
			this.LoadPage(params.get('page').toLowerCase());
		})
	}

	LoadPage(pageName){
		var path = ""
		if(pageName.indexOf("category:") >= 0){

			path = "assets/wiki/categories/" + pageName.split("category:")[1] + ".json"
			this.isCategory = true;
		}else{
			path = "assets/wiki/pages/" + pageName + ".json"
			this.isCategory = false;
		}
		console.log(this.isCategory);
		this.http.get(path)
		.subscribe(data => {
			this.data = data;
			this.isLoaded = true;
			if(data == null){
				this.pageNotFound = true;
			}
		});
	}
}
