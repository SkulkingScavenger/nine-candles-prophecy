import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
		private http: HttpClient,
		private renderer: Renderer2,

	){ 
		router.events.subscribe(event => {
			if(event instanceof NavigationEnd){
				this.currentTab = this.location.path().split('/')[1];
			}
		});

		this.renderer.listen('window', 'click', (e:Event)=>{
			if(e["clientX"] > 260 || e["clientY"] < 80){
				this.showSidebar = false;
			}
		})
	}
	screenSize = 3;
	currentTab = "";
	navigationTabs = [];
	showSidebar = false;

	ngOnInit(){
		this.CheckScreenWidth();
		
		var path = "assets/data/navigation.json";
		this.http.get(path).subscribe(response => {
			this.navigationTabs = response["tabs"];
		});
	}


	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.CheckScreenWidth()
	}

	CheckScreenWidth(){
		if(window.innerWidth > 800){
			this.screenSize = 3;
		}else if(window.innerWidth > 500){
			this.screenSize = 2;
		}else{
			this.screenSize = 1;
		}
		if(this.screenSize == 3){
			this.showSidebar = false;
		}
	}

	ToggleSidebar(event){
		this.CreateRipple(event);
		this.showSidebar = !this.showSidebar;
	}

	CreateRipple(event){
		const button = event.currentTarget;
		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter/2;

		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
		circle.style.top =  `${event.clientY - (button.offsetTop + radius)}px`;
		circle.classList.add("ripple");

		const ripple = button.getElementsByClassName("ripple")[0];
		if(ripple){
			ripple.remove();
		}

		button.appendChild(circle);
	}

}
