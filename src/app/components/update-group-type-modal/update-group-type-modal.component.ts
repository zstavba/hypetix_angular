import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupType } from '../../../auth/Classes/group-type';
import $ from 'jquery';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationComponent } from '../notification/notification.component';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';


@Component({
  standalone: true,
  selector: 'update-group-type-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './update-group-type-modal.component.html',
  styleUrl: './update-group-type-modal.component.scss'
})
export class UpdateGroupTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Information: GroupType = new GroupType();
  public UserInformation: User | null = new User();

  public GTUpdateGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(''),
    title: new FormControl(''),
    type: new FormControl('')
  });



  constructor(
    private _SessionService: SessionService,
    private _GroupTypeService: GroupTypeService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.GTUpdateGroup.patchValue({
      fk_user_id: this.UserInformation
    });
  }

  toggleCloseModal = () => {
    $('.update_group_type_modal').fadeOut();
  }

  saveData = () => {
    this._GroupTypeService.updateItem(this.GTUpdateGroup.value,this.Information.id).subscribe(
      (response: any | string) => {
        this.systemMessage.emit(response.message)
      },
      (error: any | string) => {
        if(error.status == 404){
          this.systemMessage.emit("Povezava ni bila najdena !")
        }
        this.systemMessage.emit(error.error.message)
     
      }
    )
  }

}
