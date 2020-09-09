import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
	){

	}

	currentPage = 0;
	mostRecentPage = 2;
	imageUrl = "";

	ngOnInit(){
		this.activatedRoute.paramMap.subscribe(
			(params) => {
				let pageNumber = params.get('page-number');
				console.log(pageNumber);
				if(pageNumber == "" || pageNumber == null){
					this.router.navigate(['comics/dominion-of-dregs', this.stringify(this.mostRecentPage)]);
				}else{
					this.currentPage = parseInt(pageNumber);	
					this.loadImageUrl();
				}
			}
		);
	}

	goToNextPage(){
		if(this.currentPage < this.mostRecentPage){
			this.router.navigate(['comics/dominion-of-dregs', this.stringify(this.currentPage + 1)]);
		}
	}

	goToPreviousPage(){
		if(this.currentPage > 0){
			this.router.navigate(['comics/dominion-of-dregs', this.stringify(this.currentPage - 1)]);
		}
	}

	goToFirstPage(){
		this.router.navigate(['comics/dominion-of-dregs/000']);
	}

	goToLastPage(){
		this.router.navigate(['comics/dominion-of-dregs', this.stringify(this.mostRecentPage)]);
	}

	goToIndex(){
		this.router.navigate(['comics/dominion-of-dregs/index']);
	}

	stringify(number){
		if(number < 10){
			number = "00" + number;
		}else if(number < 100){
			number = "0" + number;
		}else{
			number = "" + number;
		}
		return number
	}

	loadImageUrl(){
		this.imageUrl = 
		"assets/images/dominion-of-dregs/page" + 
		 this.stringify(this.currentPage) +
		".png";
	}

	getWindowWidth(){
		return window.innerWidth;
	}
}
