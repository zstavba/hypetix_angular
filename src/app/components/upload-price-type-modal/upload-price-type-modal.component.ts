import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { PriceTypeService } from '../../../auth/API/price-type.service';
import $ from 'jquery';


@Component({
  selector: 'upload-price-type-modal',
  imports: [],
  templateUrl: './upload-price-type-modal.component.html',
  styleUrl: './upload-price-type-modal.component.scss'
})
export class UploadPriceTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    file: new FormControl(''),
    fk_user_id: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _PriceTypeService: PriceTypeService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    })
  }

  getSelectedFile = (event: any) => {
    let file : File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila naložena!");
  }

  saveData = () => {
    this._PriceTypeService.upload(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },  
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeUploadModal = () => {
    $('.upload_price_type_modal').fadeOut();
  }


}
