import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ){}
  dominionPages = [];
  regionPages = [];
  villagePages = [];
  locationPages = [];
  allPages;

  ngOnInit(){
    var path = "assets/wiki/pages/pages.json";
    this.http.get(path).subscribe(response => {
      this.allPages = response["pages"];
      for(var i=0;i<this.allPages.length;i++){
        if(this.allPages[i].category == "dominions"){
          this.dominionPages.push(this.allPages[i]);
        }else if(this.allPages[i].category == "regions"){
          this.regionPages.push(this.allPages[i]);
        }else if(this.allPages[i].category == "villages"){
          this.villagePages.push(this.allPages[i]);
        }else if(this.allPages[i].category == "locations"){
          this.locationPages.push(this.allPages[i]);
        }
      }
    });
  }


}
