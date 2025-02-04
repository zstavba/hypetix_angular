import { Component, Output, SimpleChanges,EventEmitter, OnInit, Input } from '@angular/core';
import { CustomerOrder } from '../../../auth/Classes/customer-order';
import { Generator } from '../../../auth/functions/generator';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CustomerOrderService } from '../../../auth/API/customer-order.service';
import $ from 'jquery';
@Component({
  selector: 'update-customer-order-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './update-customer-order-modal.component.html',
  styleUrl: './update-customer-order-modal.component.scss'
})
export class UpdateCustomerOrderModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: CustomerOrder = new CustomerOrder();
  public generator: Generator = new Generator();
  public item_description: string = '';

  public COGroup: FormGroup | any ;

  constructor(
    private _CustomerOrderService: CustomerOrderService
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
    this.COGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      description: new FormControl(this.Info.description)
    });
    this.item_description = this.Info.description;
  }

  closeCOModal = () => {
    $('.update-customer-order-modal').fadeOut();
  }

  saveData = () => {
    this.COGroup.patchValue({
      description: this.item_description
    });
    this._CustomerOrderService.updateItem(this.Info.id,this.COGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    );
  }

}
