import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { CreditsService } from '../../../auth/API/credits.service';

@Component({
  selector: 'upload-credits-modal',
  imports: [],
  templateUrl: './upload-credits-modal.component.html',
  styleUrl: './upload-credits-modal.component.scss'
})
export class UploadCreditsModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl(''),
  })

  constructor(
    private _SessionService: SessionService,
    private _CreditsService: CreditsService
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
    this.systemMessage.emit("Datoteka je bila uspešno izbrana !")
  }

  closeUploadCreditsModal = () => {
    $('.upload_credits_modal').fadeOut();
  }

  saveData = () => {
    this._CreditsService.upload(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
