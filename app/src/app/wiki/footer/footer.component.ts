import { Component, Input } from '@angular/core';

@Component({
	selector: 'wiki-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	@Input() data;
	@Input() allPages;
	@Input() allCategories;

	ngOnInit(){
		this.InsertCategoryBox();
	}

	InsertCategoryBox(){
		for(var i=0;i<this.allCategories.length;i++){
			
			if(this.allCategories[i].id == this.data.category){
				if(!this.data["navigation-footers"]){
					this.data["navigation-footers"] = [];
				}
				this.data["navigation-footers"].push(this.allCategories[i]["navigation-footers"][0]);
			}
		}
	}
}
