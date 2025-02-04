import { Component, OnInit } from '@angular/core';
import { WorkorderToDoListComponent } from '../../components/workorder-to-do-list/workorder-to-do-list.component';
import $ from 'jquery';

@Component({
  selector: 'app-dashboard-home',
  imports: [
    WorkorderToDoListComponent
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent  implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

}
