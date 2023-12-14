import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent {
  radioValue = 'all-tickets';

  @Input() showTicketsOptions: boolean = true;
  @Input() showModalButton: boolean = false;
  @Input() showSelectOptions: boolean = false;
  @Input() showExportButton: boolean = false;

  @Input() modalButtonName = 'Button Name'
  @Input() modalTitle = 'Modal Title'
}
