import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { BankService } from '../../../auth/API/bank.service';
import { response } from 'express';
@Component({
  selector: 'upload-zip-code-modal',
  imports: [],
  templateUrl: './upload-zip-code-modal.component.html',
  styleUrl: './upload-zip-code-modal.component.scss'
})
export class UploadZipCodeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  
  public FileGroupo: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionServie: SessionService,
    private _Bankservice: BankService
  ){}

  ngOnInit(): void {
    this.FileGroupo.patchValue({
      fk_user_id: this._SessionServie.getSessionData()
    })
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    console.log(file);
    this.FileGroupo.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno izbrana !")
  }

  closeZipCodeModal = () => {
    $('.upload_zipcode_modal').fadeOut();
  }

  saveData = () => {
    this._Bankservice.uploadZipCode(this.FileGroupo.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
