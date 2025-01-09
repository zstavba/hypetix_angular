import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import $ from 'jquery';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'upload-groups-modal',
  imports: [
    NotificationComponent
  ],
  templateUrl: './upload-groups-modal.component.html',
  styleUrl: './upload-groups-modal.component.scss'
})
export class UploadGroupsModalComponent implements OnInit {

  public systemMessage: string = '';

  public UGNForm: FormGroup = new FormGroup({
    file: new FormControl('')
  });

  constructor(
    private _GroupTypeService: GroupTypeService
  ){}

  ngOnInit(): void {
    
  }

  getSelectedFile = (event: any) => {
    const files: FileList = event.tagert.files;

    console.log(files);
  }




  uploadData = () => {
    //$('.upload_group_name_notification').fadeIn();
    
  
  }

  closeUploadModal = () => {
    $('.upload_groups_modal').fadeOut();
  }

}
