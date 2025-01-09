import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BankService } from '../../../../../auth/API/bank.service';
import $ from 'jquery';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { UpdateZipCodeModalComponent } from '../../../../components/update-zip-code-modal/update-zip-code-modal.component';
import { CreateZipCodeModalComponent } from '../../../../components/create-zip-code-modal/create-zip-code-modal.component';
import { UploadZipCodeModalComponent } from '../../../../components/upload-zip-code-modal/upload-zip-code-modal.component';

@Component({
  selector: 'app-cd-zip-code',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent,
    UpdateZipCodeModalComponent,
    CreateZipCodeModalComponent,
    UploadZipCodeModalComponent
  ],
  templateUrl: './cd-zip-code.component.html',
  styleUrl: './cd-zip-code.component.scss'
})
export class CdZipCodeComponent implements OnInit  {

  public systemMessage: string = '';

  constructor(
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    
  }

  onNotify = (message: string) => {
    $('.zip_code_notification').fadeIn();
    this.systemMessage = message; 
    setTimeout(() => {
      $('.zip_code_notification').fadeOut();
      this.systemMessage = '';
    },4000);
  }

}
