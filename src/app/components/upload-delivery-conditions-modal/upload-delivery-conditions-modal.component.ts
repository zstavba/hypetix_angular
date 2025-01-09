import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { DeliveryConditionsService } from '../../../auth/API/delivery-conditions.service';
@Component({
  selector: 'upload-delivery-conditions-modal',
  imports: [],
  templateUrl: './upload-delivery-conditions-modal.component.html',
  styleUrl: './upload-delivery-conditions-modal.component.scss'
})
export class UploadDeliveryConditionsModalComponent implements OnInit {

 @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>(); 

 public FileGroup: FormGroup = new FormGroup({
    file: new FormControl('')
 });

 constructor(
  private _DCService: DeliveryConditionsService
 ){}

  ngOnInit(): void {
    
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
  }

  closeDCUploadModal = () => {
    $('.upload_delivery_conditions_modal').fadeOut();
  }

  saveData = () => {
    this._DCService.uploadSelectedFile(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
