import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upload-payment-terms-modal',
  imports: [],
  templateUrl: './upload-payment-terms-modal.component.html',
  styleUrl: './upload-payment-terms-modal.component.scss'
})
export class UploadPaymentTermsModalComponent implements OnInit  {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
    
  }

}
