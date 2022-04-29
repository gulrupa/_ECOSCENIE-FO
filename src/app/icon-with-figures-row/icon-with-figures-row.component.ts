import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-with-figures-row',
  templateUrl: './icon-with-figures-row.component.html',
  styleUrls: ['./icon-with-figures-row.component.scss'],
})
export class IconWithFiguresRowComponent implements OnInit {
  public mobile = false;
  public item = [
    { title: 'Don Entreprise', description: '', number: 3, picture: '../assets/batiment.svg' },
    { title: 'Don Particulier', description: '', number: 9, picture: '../assets/house.svg' },
    { title: 'Valorisé', description: '', number: 17, picture: '../assets/marteau.svg' },
    { title: 'Références', description: '', number: 134, picture: '../assets/des-boites.svg' },
    { title: 'Projets soutenues', description: '', number: 7, picture: '../assets/recycler.svg' },
  ];

  constructor() { }

  ngOnInit() {
    if (window.screen.width < 450) { // 768px portrait
      this.mobile = true;
    }

  }

}
