import { Component, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private http: HttpClient,

	){ 

	}
	searchResults = [];
	data;
	searchString = "";
	inputElement;
	dropdownElement;
	showDropdown = false;

	ngOnInit(){
		this.inputElement = (<HTMLInputElement>document.getElementById("searchbar"));

		var path = "assets/data/pages/pages.json";
		this.http.get(path).subscribe(response => {
			this.data = response["pages"];
		});
	}

	OnTypeCharacter(){
		var page;
		this.searchResults = [];
		if(this.searchString.length > 2){
			this.showDropdown = true;
			for(var i=0;i<this.data.length;i++){
				if(this.MatchesSearchString(this.data[i], this.searchString)){
					this.searchResults.push(this.data[i]);
				}
			}
		}else if(this.searchString.length <= 2){
			this.showDropdown = false;
		}
	}

	MatchesSearchString(page, str){
		var matchFound = false;
		if(page.title.toLowerCase().includes(this.searchString.toLowerCase())){
			matchFound = true;
		}else if(page.aliases){
			for(var i=0;i<page.aliases.length;i++){
				if(page.page.aliases[i].includes(this.searchString.toLowerCase())){
					matchFound = true;
					break;
				}
			}
		}
		return matchFound;
	}

	OnBlur(event){
		this.dropdownElement = (<HTMLInputElement>document.getElementById("dropdown"));
		if(this.dropdownElement && !this.dropdownElement.contains(event.relatedTarget)){
			this.HideDropdown();
			this.searchString = "";
		}
	}

	HideDropdown(){
		this.showDropdown = false;
	}

}
