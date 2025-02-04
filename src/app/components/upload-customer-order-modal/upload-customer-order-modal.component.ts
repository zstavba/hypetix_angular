import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { CustomerOrderService } from '../../../auth/API/customer-order.service';
import $ from 'jquery';

@Component({
  selector: 'upload-customer-order-modal',
  imports: [],
  templateUrl: './upload-customer-order-modal.component.html',
  styleUrl: './upload-customer-order-modal.component.scss'
})
export class UploadCustomerOrderModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    file: new FormControl(''),
    fk_user_id: new FormControl('')
  }) 

  constructor(
    private _SessionService: SessionService,
    private _CustomerOrderService: CustomerOrderService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getSelctedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila izbrana ! ")
  }

  closeUploadModal = () => {
    $('.upload-customer-order-modal').fadeOut();
  }

  saveData = () => {
    this._CustomerOrderService.uploadData(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }




}
