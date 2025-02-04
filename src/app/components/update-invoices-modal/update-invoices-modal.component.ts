import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Invoices } from '../../../auth/Classes/invoices';
import { Generator } from '../../../auth/functions/generator';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { InvoicesService } from '../../../auth/API/invoices.service';
@Component({
  selector: 'update-invoices-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './update-invoices-modal.component.html',
  styleUrl: './update-invoices-modal.component.scss'
})
export class UpdateInvoicesModalComponent implements OnInit {
  
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Invoices = new Invoices();

  public generator: Generator =new Generator();
  public item_description: string = '';

  public InvoicesGroup: FormGroup | any;

  constructor(
    private _InvoicesService: InvoicesService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
    
  }

  initializeForm = () => {
    this.InvoicesGroup =  new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      description: new FormControl()
    })
    this.item_description = this.Info.description;
  }

  closeUpdateModal = () => {
    $('.update_invoices_modal').fadeOut();
  }

  saveData = () => {
    this.InvoicesGroup.patchValue({
      description: this.item_description
    });
    this._InvoicesService.updateItem(this.Info.id,this.InvoicesGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => { 
        this.systemMessage.emit(error.error.message);
      }
    )


  }


}
