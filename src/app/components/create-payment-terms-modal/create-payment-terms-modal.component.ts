import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { PaymentTermsService } from '../../../auth/API/payment-terms.service';
import { SessionService } from '../../../auth/API/session.service';
import { Generator } from '../../../auth/functions/generator';

@Component({
  selector: 'create-payment-terms-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-payment-terms-modal.component.html',
  styleUrl: './create-payment-terms-modal.component.scss'
})
export class CreatePaymentTermsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public input_days: string[] = [];
  public input_sconto: string[] = [];

  public generator: Generator = new Generator();

  public PTGroup : FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    payment_deadline: new FormControl('',Validators.required),
    net_condition: new FormControl('',Validators.required),
    days: new FormControl([]),
    sconto: new FormControl([]),
    before_currency: new FormControl('',Validators.required),
    from_receipt: new FormControl('',Validators.required)
  })

  constructor(
    private _SessionService: SessionService,
    private _PTService: PaymentTermsService
  ){}


  ngOnInit(): void {
      this.PTGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData(),
      });
  }


  closePaymentTermModal = () => {
    $('.create_payment_term_modal').fadeOut();
  }

  getInputDays = () => {
    this.PTGroup.patchValue({
      days: this.input_days
    });
  }

  getInputSconto = () => {
    this.PTGroup.patchValue({
      sconto: this.input_sconto
    });
  }

  saveData = () => {
    this._PTService.createItem(this.PTGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
