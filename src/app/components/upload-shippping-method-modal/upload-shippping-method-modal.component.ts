import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { ShippingMethodService } from '../../../auth/API/shipping-method.service';

@Component({
  selector: 'upload-shippping-method-modal',
  imports: [],
  templateUrl: './upload-shippping-method-modal.component.html',
  styleUrl: './upload-shippping-method-modal.component.scss'
})
export class UploadShipppingMethodModalComponent implements OnInit {
  
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _ShippingMethodService: ShippingMethodService
  ){}

  ngOnInit(): void {
      this.FileGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData()
      });
  }

  closeUploadModal = () => {
    $('.upload_shipping_method_modal').fadeOut();
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno izbrana !");
  }

  saveData = () => {
    this._ShippingMethodService.upload(this.FileGroup.value).subscribe(
      (response:any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
 
      }
    )
  }

}
