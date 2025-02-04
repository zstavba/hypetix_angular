import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'workorder-to-do-list',
  imports: [],
  templateUrl: './workorder-to-do-list.component.html',
  styleUrl: './workorder-to-do-list.component.scss'
})
export class WorkorderToDoListComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

  toggleFilterModule =() => {
    $('.filter_drop_down_menu').fadeToggle();
  }

}
