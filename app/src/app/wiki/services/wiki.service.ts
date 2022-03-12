import { Injectable } from '@angular/core';
import { Observable, Subscription, EMPTY, forkJoin } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WikiService {
	constructor(private http: HttpClient,){

	}

	isLoaded = false;
	allPages = [];
	categories = [];
	disambiguations = [];


	LoadData(){
		var observables = [];
		observables[0] = this.http.get("assets/data/pages/pages.json");
		observables[1] = this.http.get("assets/data/pages/categories.json");
		observables[2] = this.http.get("assets/data/pages/disambiguations.json");
		return forkJoin(observables).pipe(
			map(results => {
				this.allPages = results[0]["pages"];
				this.categories = results[1]["categories"];
				this.disambiguations = results[2]["disambiguations"];
				this.isLoaded = true;
				return true;
			}),
			catchError((err, caught) => {
				return new Observable(subscriber =>{
					console.log(err);
					subscriber.next(false);
					subscriber.complete();
				});
			}),
		);
	}

	IsLoaded(){
		return this.isLoaded;
	}

	GetAllPages(){
		return this.allPages;
	}

	GetCategories(){
		return this.categories;
	}

	GetDisambiguations(){
		return this.disambiguations;
	}

	HasPhraseInTitle(page, phrases){
		var matchesAnyPhrase = false;
		var str = page.title.toLowerCase();
		for(var i=0;i<phrases.length;i++){
			if(str.indexOf(phrases[i]) >= 0){
				matchesAnyPhrase = true;
				break;
			}
		}
		return matchesAnyPhrase;
	}
}