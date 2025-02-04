import { Component, OnInit } from '@angular/core';
import { User } from '../../../../auth/Classes/user';
import { SessionService } from '../../../../auth/API/session.service';
import { CreateWorkorderModalComponent } from '../../../components/create-workorder-modal/create-workorder-modal.component';
import $ from 'jquery';

@Component({
  selector: 'app-dw-home',
  imports: [
    CreateWorkorderModalComponent
  ],
  templateUrl: './dw-home.component.html',
  styleUrl: './dw-home.component.scss'
})
export class DwHomeComponent  implements OnInit {

  public UserInformation: User | null = new User();

  constructor(
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
      this.UserInformation = this._SessionService.getSessionData();
  }

  toggleCreateWorkOrderModal = () => {
    $('.create_workorder_modal').fadeIn();
  }


}
