import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { WorkCenterClassificationService } from '../../../auth/API/work-center-classification.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component';
import { GenerateBaseOptions } from 'rxjs/internal/observable/generate';
import { Generator } from '../../../auth/functions/generator';
import { WorkCenterClassification } from '../../../auth/Classes/work-center-classification';
import $ from 'jquery';

@Component({
  selector: 'update-work-center-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-work-center-modal.component.html',
  styleUrl: './update-work-center-modal.component.scss'
})
export class UpdateWorkCenterModalComponent implements OnInit {

  @Input() Info: WorkCenterClassification = new WorkCenterClassification();
  public systemMessage: string = '';


  public WCCGroup: FormGroup | any; 
  


  constructor(
    private _WorkCenterService: WorkCenterClassificationService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
  }

  initializeForm = () : void => {
    this.WCCGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      group_id: new FormControl(this.Info.group_id,Validators.required),
      group_type: new FormControl(this.Info.group_type,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      extra_1: new FormControl(this.Info.extra_1,Validators.required),
      extra_2: new FormControl(this.Info.extra_2,Validators.required),
      extra_3: new FormControl(this.Info.extra_3,Validators.required),
      status: new FormControl(this.Info.status, Validators.required),
  })
  }

  closeWCModal = () => {
    $('.update_work_center_modal').fadeOut();
  }

  saveData = () => {
    this._WorkCenterService.updateItem(this.Info.id,this.WCCGroup).subscribe(
      (response: any) => {
        $('.update_wc_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.update_wc_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.update_wc_notification').fadeIn();
        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.update_wc_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

}
