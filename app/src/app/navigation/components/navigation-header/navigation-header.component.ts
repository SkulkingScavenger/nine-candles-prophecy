import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {

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
}
