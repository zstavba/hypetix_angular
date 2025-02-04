import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { InvoicesService } from '../../../auth/API/invoices.service';
import { response } from 'express';

@Component({
  selector: 'create-invoices-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './create-invoices-modal.component.html',
  styleUrl: './create-invoices-modal.component.scss'
})
export class CreateInvoicesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public generator: Generator =new Generator();
  public item_description: string = '';

  public InvoicesGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    description: new FormControl()
  })


  constructor(
    private _SessionService: SessionService,
    private _InvoicesService: InvoicesService
  ){}

  ngOnInit(): void {
    this.InvoicesGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeCreateModal = () => {
    $('.create_invoices_modal').fadeOut();
  }


  saveData = () => {
    this.InvoicesGroup.patchValue({
      description: this.item_description
    });
   this._InvoicesService.create(this.InvoicesGroup).subscribe(
    (response: any) => {
      this.systemMessage.emit(response.message);
    },
    (error: any) => {
      this.systemMessage.emit(error.error.message);
    }
   )
  }

}
