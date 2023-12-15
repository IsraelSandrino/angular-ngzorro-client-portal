import { Component } from '@angular/core';

@Component({
  selector: 'app-chamado-view',
  templateUrl: './chamado-view.component.html',
  styleUrls: ['./chamado-view.component.less']
})
export class ChamadoViewComponent {
  onBack(): void {
    console.log('onBack');
  }
}
