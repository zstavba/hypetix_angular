import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { SupplierOrdersService } from '../../../auth/API/supplier-orders.service';
import $ from 'jquery';
@Component({
  selector: 'upload-supplier-order-modal',
  imports: [],
  templateUrl: './upload-supplier-order-modal.component.html',
  styleUrl: './upload-supplier-order-modal.component.scss'
})
export class UploadSupplierOrderModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _SupplierOrderService: SupplierOrdersService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
    
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je biula uspešno naložena !");
  }

  closeUploadModal = () => {
    $('.upload_supplier_order_modal').fadeOut();
  }

  saveData = () => {
    this._SupplierOrderService.uploadItem(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
