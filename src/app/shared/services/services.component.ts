import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

/**
 * Services component
 */
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   servicesData = [
    {
      icon: 'ti-settings',
      title: 'Digital Design'
    },
    {
      icon: 'ti-palette',
      title: 'Unlimited Colors'
    },
    {
      icon: 'ti-stats-up',
      title: 'Strategy Solutions'
    },
    {
      icon: 'ti-package',
      title: 'Awesome Support'
    },
    {
      icon: 'ti-dashboard',
      title: 'Truly Multipurpose'
    },
    {
      icon: 'ti-headphone',
      title: 'Easy to customize'
    } 
  ]

}
