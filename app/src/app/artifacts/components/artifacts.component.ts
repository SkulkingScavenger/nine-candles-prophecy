import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './artifacts.component.html',
	styleUrls: ['./artifacts.component.scss']
})
export class ArtifactsComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute
	){}
	pages = [];
	allPages;

	ngOnInit(){
		var path = "assets/data/pages/pages.json";
		this.http.get(path).subscribe(response => {
			this.allPages = response["pages"];
			for(var i=0;i<this.allPages.length;i++){
				if(this.allPages[i].category == "artifacts"){
					this.pages.push(this.allPages[i]);
				}
			}
		});
	}

}
