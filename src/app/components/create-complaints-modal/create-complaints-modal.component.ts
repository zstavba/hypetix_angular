import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { ComplaintsService } from '../../../auth/API/complaints.service';
import { Generator } from '../../../auth/functions/generator';
@Component({
  selector: 'create-complaints-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-complaints-modal.component.html',
  styleUrl: './create-complaints-modal.component.scss'
})
export class CreateComplaintsModalComponent implements OnInit  {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public  generator: Generator = new Generator();


  public ComplaintsGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionServie: SessionService,
    private _ComplaintsService: ComplaintsService
  ){}

  ngOnInit(): void {
    this.ComplaintsGroup.patchValue({
      fk_user_id: this._SessionServie.getSessionData()
    });
  }

  closeCreateModal = () => {
    $('.create_complaints_modal').fadeOut();
  }

  saveData = () => {
    this._ComplaintsService.createItem(this.ComplaintsGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      } 
    )

  }

}
