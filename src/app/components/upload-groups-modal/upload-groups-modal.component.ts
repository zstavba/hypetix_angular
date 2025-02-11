import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import $ from 'jquery';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';


@Component({
  standalone: true,
  selector: 'upload-groups-modal',
  imports: [
  ],
  templateUrl: './upload-groups-modal.component.html',
  styleUrl: './upload-groups-modal.component.scss'
})
export class UploadGroupsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public UGNForm: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _GroupTypeService: GroupTypeService
  ){}

  ngOnInit(): void {
    this.UGNForm.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getSelectedFile = (event: any) => {
    const file: File = event.target.files[0];
    this.UGNForm.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
  }




  uploadData = () => {
    this._GroupTypeService.uploadItem(this.UGNForm.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )  
  }

  closeUploadModal = () => {
    $('.upload_groups_modal').fadeOut();
  }

}
