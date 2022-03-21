import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routeLinks: any = [];
  activeLinkIndex = -1;
  
  constructor(private readonly router: Router) {
    this.routeLinks = [
      {
        label: 'A',
        link: './KomponenteA', 
        index: 0
      }, 
      {
        label: 'B',
        link: './KomponenteB', 
        index: 1
      }, 
      {
        label: 'C',
        link: './KomponenteC', 
        index: 2
      },
      {
        label: 'D',
        link: './KomponenteD', 
        index: 3
      }
    ];
  }

  public ngOnInit(): void {
    // Die Komponente, welche beim aktualisieren ausgewählt war, wird wieder ausgewählt (User bleibt beim Aktualisieren der Seite bei der gleichen Komponente).
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });



}
public next(): void {

  if (this.activeLinkIndex == 0) {
    this.router.navigate(['./KomponenteB'])
  }
  else if (this.activeLinkIndex == 1) {
    this.router.navigate(['./KomponenteC'])
  }
  else if (this.activeLinkIndex == 2) {
    this.router.navigate(['./KomponenteD'])
  }

}



public prev(): void {
  console.log(this.activeLinkIndex)

  if (this.activeLinkIndex == 1) {
    this.router.navigate(['./KomponenteA'])
  }
  else if (this.activeLinkIndex == 2) {
    this.router.navigate(['./KomponenteB'])
  }
  else if (this.activeLinkIndex == 3) {
    this.router.navigate(['./KomponenteC'])
  }
}

 
 }


  export interface Link {
  title: string;
  route: string;

}
