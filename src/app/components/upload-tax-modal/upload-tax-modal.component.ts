import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { TaxService } from '../../../auth/API/tax.service';

@Component({
  selector: 'upload-tax-modal',
  imports: [],
  templateUrl: './upload-tax-modal.component.html',
  styleUrl: './upload-tax-modal.component.scss'
})
export class UploadTaxModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _TaxService: TaxService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    console.log(file);
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno naložena !")
  }

  saveData = () => {
    this._TaxService.uploadItem(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      } 
    )
  }

  closeUploadTaxModal = () => {
    $('.upload_tax_modal').fadeOut();
  }


}
