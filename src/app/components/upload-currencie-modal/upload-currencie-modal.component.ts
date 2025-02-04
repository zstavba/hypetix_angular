import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { CurrencieService } from '../../../auth/API/currencie.service';

@Component({
  selector: 'upload-currencie-modal',
  imports: [],
  templateUrl: './upload-currencie-modal.component.html',
  styleUrl: './upload-currencie-modal.component.scss'
})
export class UploadCurrencieModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public fileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _CurrencieService: CurrencieService
  ){}

  ngOnInit(): void {
    this.fileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0]; 
    this.fileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
  }

  saveData = () => {
    this._CurrencieService.uploadItem(this.fileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      });
  }

  closeUploadModal = () => {
    $('.upload_currencie_modal').fadeOut();
  }

}
