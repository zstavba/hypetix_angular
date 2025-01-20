import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from 'jquery';
import { TrafficTypeService } from '../../../auth/API/traffic-type.service';
import { SessionService } from '../../../auth/API/session.service';

@Component({
  selector: 'upload-traffic-type-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './upload-traffic-type-modal.component.html',
  styleUrl: './upload-traffic-type-modal.component.scss'
})
export class UploadTrafficTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();


  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _TrafficTypeService: TrafficTypeService
  ){}

  ngOnInit(): void {
      this.FileGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData()
      })
  }

  
  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
  }

  closeUploadTTModal = () => {
    $('.upload_traffic_type_modal').fadeOut();
  }

  saveData = () => {
    this._TrafficTypeService.uploadItems(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },  
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
