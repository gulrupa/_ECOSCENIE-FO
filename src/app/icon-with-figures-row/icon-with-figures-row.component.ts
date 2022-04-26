import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-with-figures-row',
  templateUrl: './icon-with-figures-row.component.html',
  styleUrls: ['./icon-with-figures-row.component.scss'],
})
export class IconWithFiguresRowComponent implements OnInit {
  public mobile = false;
  public item = [
    { title: 'Entreprise', description: '', number: 3, picture: '../assets/batiment.svg' },
    { title: 'Particulier', description: '', number: 9, picture: '../assets/house.svg' },
    { title: 'Réparé', description: '', number: 17, picture: '../assets/marteau.svg' },
    { title: 'Produits', description: '', number: 134, picture: '../assets/des-boites.svg' },
    { title: 'Utilisé', description: '', number: 7, picture: '../assets/recycler.svg' },
  ];

  constructor() { }

  ngOnInit() {
    if (window.screen.width < 450) { // 768px portrait
      this.mobile = true;
    }

  }

}
