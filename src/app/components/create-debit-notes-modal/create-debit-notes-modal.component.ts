import { Component, OnInit, Output, EventEmitter, PLATFORM_ID, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';
import { SessionService } from '../../../auth/API/session.service';
import { isPlatformBrowser } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DebitNotesService } from '../../../auth/API/debit-notes.service';

@Component({
  selector: 'create-debit-notes-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './create-debit-notes-modal.component.html',
  styleUrl: './create-debit-notes-modal.component.scss'
})
export class CreateDebitNotesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  
  public generator: Generator = new Generator();
  public item_description: string = '';

  public DNGroup : FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent()),
    title: new FormControl('',Validators.required),
    document_type: new FormControl('BK'),
    description: new FormControl('',Validators.required)
  })

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _SessionService: SessionService,
    private _DebitNotesService: DebitNotesService
  ){}

  ngOnInit(): void {
      this.DNGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData()
      });
  }


  closeDebitNoteModal = () => {
    $('.create_debit_notes_modal').fadeOut();
  }

  saveData = () => {
    this.DNGroup.patchValue({
      description: this.item_description
    })
    this._DebitNotesService.createItem(this.DNGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
    
  }

}
