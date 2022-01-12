import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

/**
 * Pricing component
 */
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pricingData = [
    {
      price: '$29',
      bandwidth: '1GB',
      space: '50MB',
      support: 'No',
      domain : 1
    },
    {
      price: '$59',
      bandwidth: '2GB',
      space: '500MB',
      support: 'Yes',
      domain : 5,
      isActive: true
    },
    {
      price: '$79',
      bandwidth: '4GB',
      space: '1 GB',
      support: 'Yes',
      domain : 10
    }
  ]

}
