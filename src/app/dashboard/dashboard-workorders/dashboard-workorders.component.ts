import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../../components/notification/notification.component';
import { WorkOrderService } from '../../../auth/API/work-order.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateWorkorderModalComponent } from '../../components/create-workorder-modal/create-workorder-modal.component';
import $ from 'jquery';
import { User } from '../../../auth/Classes/user';
import { SessionService } from '../../../auth/API/session.service';


@Component({
  standalone: true,
  selector: 'app-dashboard-workorders',
  imports: [
    NotificationComponent,
    RouterOutlet,
    RouterLink,
    CreateWorkorderModalComponent
  ],
  templateUrl: './dashboard-workorders.component.html',
  styleUrl: './dashboard-workorders.component.scss'
})
export class DashboardWorkordersComponent implements OnInit {

  public systemMessage: string = ''; 
  public UserInformation: User | null = new User();

  constructor(
    private _SessionService: SessionService,
    private _WorkOrderService: WorkOrderService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
  }


  toggleCreateWorkOrderModal = () => {
    $('.create_workorder_modal').fadeIn();
  }


}
