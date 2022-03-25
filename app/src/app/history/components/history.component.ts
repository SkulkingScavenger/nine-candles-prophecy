import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
	constructor(
		private http: HttpClient,
		private route: ActivatedRoute
	){}
	pages = [];
	allPages;

	showSpoilers

	ngOnInit(){
		var path = "assets/data/pages/pages.json";
		this.http.get(path).subscribe(response => {
			this.allPages = response["pages"];
			for(var i=0;i<this.allPages.length;i++){
				if(this.allPages[i].category == "history"){
					this.pages.push(this.allPages[i]);
				}
			}
		});
	}

}
