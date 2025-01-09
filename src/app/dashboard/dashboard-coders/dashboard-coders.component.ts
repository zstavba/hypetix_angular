import { Component } from '@angular/core';
import { TableItemsComponent } from '../../components/table-items/table-items.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard-coders',
  imports: [
    TableItemsComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard-coders.component.html',
  styleUrl: './dashboard-coders.component.scss'
})
export class DashboardCodersComponent {

}
