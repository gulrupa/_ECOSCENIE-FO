import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public mobile: boolean = false;

  constructor() { }

  ngOnInit() {
    if (window.screen.width < 450) { // 768px portrait
      this.mobile = true;
    }
  }
}
