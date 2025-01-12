import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShippingMethodService } from '../../../auth/API/shipping-method.service';
import { SessionService } from '../../../auth/API/session.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import $ from 'jquery';
@Component({
  selector: 'create-shippping-method-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-shippping-method-modal.component.html',
  styleUrl: './create-shippping-method-modal.component.scss'
})
export class CreateShipppingMethodModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();

  public SMGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    attribute: new FormControl('',Validators.required),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    status: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required)
  })


  constructor(
    private _SessionService: SessionService,
    private _ShippingMethodService: ShippingMethodService
  ){}

  ngOnInit(): void {
    
      this.SMGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData()
      });

  }

  closeCreateSMModal = () => {
    $('.create_shipping_method_modal').fadeOut();
  }

  saveData = () => {
    this._ShippingMethodService.createItem(this.SMGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
