import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {


  @Input() picture: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
