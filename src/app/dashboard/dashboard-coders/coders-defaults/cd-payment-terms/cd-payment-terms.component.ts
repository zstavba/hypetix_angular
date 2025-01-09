import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreatePaymentTermsModalComponent } from '../../../../components/create-payment-terms-modal/create-payment-terms-modal.component';
import $ from 'jquery';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { UpdatePaymentTermsModalComponent } from '../../../../components/update-payment-terms-modal/update-payment-terms-modal.component';
import { UploadPaymentTermsModalComponent } from '../../../../components/upload-payment-terms-modal/upload-payment-terms-modal.component';
import { PaymentTermsService } from '../../../../../auth/API/payment-terms.service';
import { PaymentTerms } from '../../../../../auth/Classes/payment-terms';
import { response } from 'express';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPaymentTermPipe } from '../../../../../auth/Pipes/search-payment-term.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cd-payment-terms',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    NotificationComponent,
    CreatePaymentTermsModalComponent,
    UpdatePaymentTermsModalComponent,
    UploadPaymentTermsModalComponent,
    NgxPaginationModule,
    SearchPaymentTermPipe
  ],
  templateUrl: './cd-payment-terms.component.html',
  styleUrl: './cd-payment-terms.component.scss'
})
export class CdPaymentTermsComponent implements OnInit{

  public systemMessage: string = '';
  public PTList: Array<PaymentTerms> = new Array<PaymentTerms>();
  public ipp: number = 9;
  public p: any; 
  public selectedPaymentTerm: PaymentTerms = new PaymentTerms();
  public searchTerm: string = '';


  constructor(
    private _PTService: PaymentTermsService
  ){}

  ngOnInit(): void {
    this.getTerms();
  }

  onNotify = (message: string) => {
    $('.payment_Terms_notififcation').fadeIn();
    this.systemMessage = message; 
    setTimeout(() => {
      $('.payment_Terms_notififcation').fadeOut();
      this.systemMessage = '';
    },4000);
  }

  toggleCreatePaymenttermsModal = () => {
    $('.create_payment_term_modal').fadeIn();
  }

  getTerms = () => {
    this._PTService.getItems().subscribe(
      (response: PaymentTerms[]) => {
        this.PTList = response; 
      }
    )
  }

  deleteItem = (ID: number) => {
    this._PTService.deleteItem(ID).subscribe(
      (response: any) => {
        this.getTerms();
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateSelectedItem = (Item: PaymentTerms) => {
    this.selectedPaymentTerm = Item;
    $('.update_payment_terms_modal').fadeIn();
  }

}
