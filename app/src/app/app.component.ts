import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  contentWidth = "400px";
  isWideScreen = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.CheckScreenWidth()
  }

  ngOnInit(){
    this.CheckScreenWidth()
  }

  CheckScreenWidth(){
    
    this.isWideScreen = window.innerWidth > 1000;
    if(this.isWideScreen){
      this.contentWidth = (window.innerWidth)+"px";
    }else{
       this.contentWidth = (window.innerWidth - 170 - 16)+"px";
    }
  }
}
