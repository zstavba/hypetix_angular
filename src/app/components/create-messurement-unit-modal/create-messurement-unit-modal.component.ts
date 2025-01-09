import { Component, OnInit } from '@angular/core';
import { MeassurmentUnitsService } from '../../../auth/API/meassurment-units.service';
import { MeassurmentUnits } from '../../../auth/Classes/meassurment-units';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import $ from 'jquery';
import { NotificationComponent } from '../notification/notification.component';


@Component({
  standalone: true,
  selector: 'create-messurement-unit-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent
  ],
  templateUrl: './create-messurement-unit-modal.component.html',
  styleUrl: './create-messurement-unit-modal.component.scss'
})
export class CreateMessurementUnitModalComponent implements OnInit {

  public MeassurementUnitsList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';

  public MUGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    code: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionService: SessionService,
    private _MeassurementUnistService: MeassurmentUnitsService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.MUGroup.patchValue({
      fk_user_id: this.UserInformation
    });
  }


  saveData = () => {
    this._MeassurementUnistService.createUnit(this.MUGroup.value).subscribe(
      (response: any) => {
        $('.create_mu_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.create_mu_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.create_mu_notification').fadeIn();
        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.create_mu_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

  closeModal = () => {
    $('.create_mu_modal').fadeOut();
  }




}
