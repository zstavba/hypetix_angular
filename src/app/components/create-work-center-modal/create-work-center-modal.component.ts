import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { WorkCenterClassificationService } from '../../../auth/API/work-center-classification.service';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';
import { User } from '../../../auth/Classes/user';
import { SessionService } from '../../../auth/API/session.service';

@Component({
  standalone: true,
  selector: 'create-work-center-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-work-center-modal.component.html',
  styleUrl: './create-work-center-modal.component.scss'
})
export class CreateWorkCenterModalComponent implements OnInit {

  public generator: Generator = new Generator();
  public UserInformation: User | null = new User();


  public WCCGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    group_id: new FormControl(this.generator.generateIdent(),Validators.required),
    group_type: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    extra_1: new FormControl('',Validators.required),
    extra_2: new FormControl('',Validators.required),
    extra_3: new FormControl('',Validators.required),
    status: new FormControl('', Validators.required),
  })

  public systemMessage: string = '';


  constructor(
    private _SessionService: SessionService,
    private _WorkCenterService: WorkCenterClassificationService
  ){}


  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.WCCGroup.patchValue({
      fk_user_id: this.UserInformation
    });
  }

  saveData = () => {
    this._WorkCenterService.createItem(this.WCCGroup).subscribe(
      (response: any) => {
        $('.workcetner_create_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.workcetner_create_notification').fadeOut();
          this.systemMessage = "";     
        },4000);

      },
      (error: any) => {
        $('.workcetner_create_notification').fadeIn();
        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.workcetner_create_notification').fadeOut();
          this.systemMessage = "";     
        },4000);
      }
    )
  }

  closeWorkCenterModal = () => {
      $('.create_work_center_modal').fadeOut();    
  }

}
