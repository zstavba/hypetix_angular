import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'table-items',
  imports: [
    RouterLink
  ],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss'
})
export class TableItemsComponent {


}
