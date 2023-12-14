import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent {
  panels = [
    {
      active: true,
      name: 'Recuperação de senha de acesso Premium'
    },
    {
      active: false,
      name: 'Recuperação de senha de acesso ao site Wikidados'
    }
  ];
}
