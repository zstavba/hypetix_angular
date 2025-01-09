import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import $ from 'jquery';

@Component({
  standalone: true,
  selector: 'create-workorder-modal',
  imports: [
    NotificationComponent
  ],
  templateUrl: './create-workorder-modal.component.html',
  styleUrl: './create-workorder-modal.component.scss'
})
export class CreateWorkorderModalComponent implements OnInit {

  public systemMessage: string = '';

  constructor(){}

  ngOnInit(): void {
    
  }

  closeWorkOrderModal = () => {
    $('.create_workorder_modal').fadeOut();
  }

}
