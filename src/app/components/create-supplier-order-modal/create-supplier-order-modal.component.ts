import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../../auth/API/session.service';
import { SupplierOrdersService } from '../../../auth/API/supplier-orders.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import $ from 'jquery';
import { EditorModule } from '@tinymce/tinymce-angular';


@Component({
  selector: 'create-supplier-order-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './create-supplier-order-modal.component.html',
  styleUrl: './create-supplier-order-modal.component.scss'
})
export class CreateSupplierOrderModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public item_description: string = '';
  public generator: Generator = new Generator();

  public SOGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    description: new FormControl(''),
  })

  constructor(
    private _SessionService: SessionService,
    private _SupplierOrderService: SupplierOrdersService
  ){}

  ngOnInit(): void {
    this.SOGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeCreateSOModal = () => {
    $('.create_supplier_order_modal').fadeOut();
  }

  saveData = () => {
    this.SOGroup.patchValue({
      description: this.item_description
    });
    this._SupplierOrderService.createItem(this.SOGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }


}
