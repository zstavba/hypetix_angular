import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'upload-debit-notes-modal',
  imports: [],
  templateUrl: './upload-debit-notes-modal.component.html',
  styleUrl: './upload-debit-notes-modal.component.scss'
})
export class UploadDebitNotesModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
    
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    console.log(file);
    this.systemMessage.emit("Datoteka je bila uspešno shranjena !")
  }

  closeDebitNotesModal = () => {
    $('.upload_debit_notes_modal').fadeOut();
  }

}
