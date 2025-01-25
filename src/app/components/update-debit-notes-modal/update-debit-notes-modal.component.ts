import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DebitNotes } from '../../../auth/Classes/debit-notes';
import { Generator } from '../../../auth/functions/generator';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery';
import { EditorModule } from '@tinymce/tinymce-angular';
import { DebitNotesService } from '../../../auth/API/debit-notes.service';
@Component({
  selector: 'update-debit-notes-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './update-debit-notes-modal.component.html',
  styleUrl: './update-debit-notes-modal.component.scss'
})
export class UpdateDebitNotesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: DebitNotes = new DebitNotes();

  public generator: Generator = new Generator();
  public item_description: string = '';

  public DNGroup : FormGroup | any;

  constructor(
    private _DebitNoteService: DebitNotesService
  ){}

  ngOnInit(): void {
      this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
    
  }

  closeUpdateDebitNoteModal = () => {
    $('.update_debit_notes_modal').fadeOut();
  }

  initializeForm = () => {
    this.DNGroup  = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident),
      title: new FormControl(this.Info.title,Validators.required),
      document_type: new FormControl(this.Info.document_type),
      description: new FormControl(this.Info.description,Validators.required)
    });
    this.item_description =  this.Info.description;
  }

  saveData = () => {
    this._DebitNoteService.updateItem(this.Info.id, this.DNGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => { 
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
