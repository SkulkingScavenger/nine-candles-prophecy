import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	contentWidth = "400px";


	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.CheckScreenWidth()
	}

	ngOnInit(){
		this.CheckScreenWidth()
	}

	CheckScreenWidth(){
		this.contentWidth = (window.innerWidth - 16)+"px";
	}
}
