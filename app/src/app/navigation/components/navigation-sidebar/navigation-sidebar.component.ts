import { Component, HostListener, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent {

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private http: HttpClient,

	){ 
		router.events.subscribe(event => {
			if(event instanceof NavigationEnd){
				this.currentTab = this.location.path().split('/')[1];
			}
		});
	}

	ngOnInit(){
		var path = "assets/data/navigation.json";
		this.http.get(path).subscribe(response => {
			this.navigationTabs = response["tabs"];
		});
	}

	@Input() isShown;

	currentTab = "";
	navigationTabs = [];

}
