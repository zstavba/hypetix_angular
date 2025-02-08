import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import $ from 'jquery';
import { NotificationComponent } from '../notification/notification.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';


@Component({
  standalone: true,
  selector: 'create-group-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './create-group-modal.component.html',
  styleUrl: './create-group-modal.component.scss'
})
export class CreateGroupModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public GTGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl('', Validators.required),
    title: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
  })
  public UserInformation: User | null = new User();


  constructor(
    private _SessionService: SessionService,
    private _GroupService: GroupTypeService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.GTGroup.patchValue({
      fk_user_id: this.UserInformation
    });

  }

  saveData = () => {
    this._GroupService.createGroupType(this.GTGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {       
        if(error.status === 404){
          	this.systemMessage.emit("Povezava ni bila najdena !")
        }
        this.systemMessage.emit(error.error.message);
        
      }
    )
  }

  closeModal = () => {
    $('.create_group_modal').fadeOut();
  }
}
