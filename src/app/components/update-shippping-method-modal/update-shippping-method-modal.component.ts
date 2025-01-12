import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShippingMethod } from '../../../auth/Classes/shipping-method';
import { ShippingMethodService } from '../../../auth/API/shipping-method.service';
import $ from 'jquery';


@Component({
  selector: 'update-shippping-method-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-shippping-method-modal.component.html',
  styleUrl: './update-shippping-method-modal.component.scss'
})
export class UpdateShipppingMethodModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  @Input() Info: ShippingMethod = new ShippingMethod();

  public SMGroup: FormGroup | any;

  constructor(
    private _ShippingMethodService: ShippingMethodService
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
    this.SMGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      attribute: new FormControl(this.Info.attribute,Validators.required),
      ident: new FormControl(this.Info.ident,Validators.required),
      status: new FormControl(this.Info.status,Validators.required),
      title: new FormControl(this.Info.title,Validators.required)
    })
  }

  closeMethodModal = () => {
    $('.update_shipping_method_modal').fadeOut();
  }

  saveData = () => {
    this._ShippingMethodService.updateItem(this.Info.id,this.SMGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
