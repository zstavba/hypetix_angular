import { Component, EventEmitter, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { SupplierOrders } from '../../../auth/Classes/supplier-orders';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { SupplierOrdersService } from '../../../auth/API/supplier-orders.service';
@Component({
  selector: 'update-supplier-order-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './update-supplier-order-modal.component.html',
  styleUrl: './update-supplier-order-modal.component.scss'
})
export class UpdateSupplierOrderModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: SupplierOrders = new SupplierOrders();
  public item_description: string = '';
  public SOGroup: FormGroup | any;

  constructor(
    private _SupplierOrdersService: SupplierOrdersService
  ){}


  ngOnInit(): void {
      this.initilizeForm();
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initilizeForm();
    }
    
  }

  initilizeForm = () => {
    this.SOGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      description: new FormControl(this.Info.description),
    });
    this.item_description = this.Info.description;
  }

  closeUpdateSOModal = () => {
    $('.update_supplier_order_modal').fadeOut();
  }

  saveData = () => {
    this.SOGroup.patchValue({
      description: this.item_description
    });
    this._SupplierOrdersService.updateItem(this.Info.id,this.SOGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }
}
