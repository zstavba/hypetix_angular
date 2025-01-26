import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { DebitNotes } from '../../../auth/Classes/debit-notes';
import { DebitNotesService } from '../../../auth/API/debit-notes.service';
import { response } from 'express';
@Component({
  selector: 'upload-debit-notes-modal',
  imports: [],
  templateUrl: './upload-debit-notes-modal.component.html',
  styleUrl: './upload-debit-notes-modal.component.scss'
})
export class UploadDebitNotesModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _DebitNotesService: DebitNotesService
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
    this.systemMessage.emit("Datoteka je bila uspešno shranjena !")
  }

  closeDebitNotesModal = () => {
    $('.upload_debit_notes_modal').fadeOut();
  }

  saveData = () => {
    this._DebitNotesService.upload(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
       (error: any) => {  
        this.systemMessage.emit(error.error.message);
       }
    )
  }

}
