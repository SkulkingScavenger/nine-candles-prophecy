import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ){}
  majorPages = [];
  minorPages = [];
  allPages;

  ngOnInit(){
    var path = "assets/wiki/pages/pages.json";
    this.http.get(path).subscribe(response => {
      this.allPages = response["pages"];
      for(var i=0;i<this.allPages.length;i++){
        if(this.allPages[i].category == "major races"){
          this.majorPages.push(this.allPages[i]);
        }else if(this.allPages[i].category == "minor races"){
          this.minorPages.push(this.allPages[i]);
        }
      }
    });
  }


}
