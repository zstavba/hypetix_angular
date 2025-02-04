import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'user-bank-account',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './user-bank-account.component.html',
  styleUrl: './user-bank-account.component.scss'
})
export class UserBankAccountComponent implements OnInit {

  @Output() BankInformation: EventEmitter<any> = new EventEmitter<any>();

  public BankGroup: FormGroup = new FormGroup({
    bank_number: new FormControl('',Validators.required)
  });


  ngOnInit(): void {
    
  }

  setItems = () =>{
    this.BankInformation.emit(this.BankGroup.value);
  }

}
