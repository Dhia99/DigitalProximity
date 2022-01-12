import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index9',
  templateUrl: './index9.component.html',
  styleUrls: ['./index9.component.scss']
})
/**
 * Index-9 component
 */
export class Index9Component implements OnInit {

  constructor() { }

  currentSection = 'home';

  ngOnInit(): void {
    let i = 1;
    setInterval(() => {
      if (i === 1) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/slide-1.jpg'; }
      else if (i === 2) { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/slide-2.jpg'; }
      else { (<HTMLImageElement>document.querySelector("#isSlideImage")).src = 'assets/images/slide-3.jpg'; }
      if (i >= 3) { i = 0; }
      i++;
    }, 2500);
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#1a1a1a';
      navbar.style.padding = '15px 0px';
    }
    else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
