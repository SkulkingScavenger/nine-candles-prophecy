import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ){}
  monsterPages = [];
  animalPages = [];
  allPages;

  ngOnInit(){
    var path = "assets/wiki/pages/pages.json";
    this.http.get(path).subscribe(response => {
      this.allPages = response["pages"];
      for(var i=0;i<this.allPages.length;i++){
        if(this.allPages[i].category == "monsters"){
          this.monsterPages.push(this.allPages[i]);
        }else if(this.allPages[i].category == "animals"){
          this.animalPages.push(this.allPages[i]);
        }
      }
    });
  }


}
