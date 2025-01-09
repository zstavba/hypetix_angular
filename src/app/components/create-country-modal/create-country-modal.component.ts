import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import { BankService } from '../../../auth/API/bank.service';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import $ from 'jquery';

@Component({
  selector: 'create-country-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-country-modal.component.html',
  styleUrl: './create-country-modal.component.scss'
})
export class CreateCountryModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();
  public UserInformation: User | null = new User();

  public CountryGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    name: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    name_ang: new FormControl('',Validators.required),
    ident: new FormControl(this.generator.generateIdent(),Validators.required)
  })

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){

  }

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.CountryGroup.patchValue({
      fk_user_id: this.UserInformation,
    })
  }

  sendMessage = () => {
    this._BankService.createCountry(this.CountryGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeCreateCountryModal = () => {
    $('.create_country_modal').fadeOut();
  }

}
