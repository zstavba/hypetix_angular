import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { CustomerOrderService } from '../../../auth/API/customer-order.service';
@Component({
  selector: 'create-customer-order-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './create-customer-order-modal.component.html',
  styleUrl: './create-customer-order-modal.component.scss'
})
export class CreateCustomerOrderModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();
  public item_description: string = '';

  public COGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    description: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _CustomerOrderService: CustomerOrderService
  ){}

  ngOnInit(): void {
    this.COGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    })
  }

  closeCOModal = () => {
    $('.create-customer-order-modal').fadeOut();
  }

  saveData = () => {
    this.COGroup.patchValue({
      description: this.item_description
    });
    this._CustomerOrderService.createItem(this.COGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
