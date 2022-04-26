import { Component } from '@angular/core';

import { Email } from '../services/email.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  powers = ['Faire un don', 'Soumetre un projet',
            'Adhérer', 'Autre'];

  model = new Email('test@test.fr', 'Dtest@test.fr', 'Don de lumière Alesia',  this.powers[0],
    '....');

  submitted = false;

  onSubmit() { this.submitted = true; }

}
