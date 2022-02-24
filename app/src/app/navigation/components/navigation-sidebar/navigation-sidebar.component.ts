import { Component, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';

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

	){ 
		router.events.subscribe(event => {
			if(event instanceof NavigationEnd){
				this.currentTab = this.location.path().split('/')[1];
			}
		});
	}
	currentTab = "";

	navigationTabs = [
		{
			"id": "home",
			"link": "/home",
			"title": "Home"
		},{
			"id": "mechanics",
			"link": "/mechanics",
			"title": "The World"
		},{
			"id": "locations",
			"link": "/locations",
			"title": "Geography"
		},{
			"id": "characters",
			"link": "/characters",
			"title": "Characters"
		},{
			"id": "races",
			"link": "/races",
			"title": "Races"
		},{
			"id": "monsters",
			"link": "/monsters",
			"title": "Monsters"
		},{
			"id": "resources",
			"link": "/resources",
			"title": "Resources"
		},{
			"id": "artifacts",
			"link": "/artifacts",
			"title": "Artifacts"
		},{
			"id": "stories",
			"link": "/stories",
			"title": "Stories"
		},{
			"id": "wiki",
			"link": "/wiki",
			"title": "Wiki"
		}
	];

}
