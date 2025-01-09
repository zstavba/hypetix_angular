import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { PaymentTerms } from '../../../auth/Classes/payment-terms';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { PaymentTermsService } from '../../../auth/API/payment-terms.service';

@Component({
  selector: 'update-payment-terms-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-payment-terms-modal.component.html',
  styleUrl: './update-payment-terms-modal.component.scss'
})
export class UpdatePaymentTermsModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: PaymentTerms = new PaymentTerms();

  public input_days: string[] = [];
  public input_sconto: string[] = [];

  public PTGroup : FormGroup | any; 

  constructor(
    private _PTService: PaymentTermsService
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
    this.PTGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      payment_deadline: new FormControl(this.Info.payment_deadline,Validators.required),
      net_condition: new FormControl(this.Info.net_condition,Validators.required),
      days: new FormControl(this.Info.days),
      sconto: new FormControl(this.Info.sconto),
      before_currency: new FormControl(this.Info.before_currency,Validators.required),
      from_receipt: new FormControl(this.Info.from_receipt,Validators.required)
    });
     // Initialize input_days and input_sconto with existing values if available
      // Ensure input_days and input_sconto are arrays
     this.input_days = this.Info.days;
     this.input_sconto = this.Info.sconto;

  }

  closePaymentTermModal = () => {
    $('.update_payment_terms_modal').fadeOut();
  }

  getInputDays = () => {
    this.PTGroup.patchValue({
      days: this.input_days
    });
    this.systemMessage.emit("Podatki so bili uspešno shranjeni v obrazec !")
  }

  getInputSconto = () => {
    this.PTGroup.patchValue({
      sconto: this.input_sconto
    });
    this.systemMessage.emit("Podatki so bili uspešno shranjeni v obrazec !")
  }


  saveData = () => {
    this._PTService.updateItem(this.Info.id,this.PTGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }


}
