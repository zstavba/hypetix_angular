import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { BankService } from '../../../auth/API/bank.service';
import { Generator } from '../../../auth/functions/generator';
import { Country } from '../../../auth/Classes/country';
@Component({
  selector: 'create-zip-code-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-zip-code-modal.component.html',
  styleUrl: './create-zip-code-modal.component.scss'
})
export class CreateZipCodeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();

  public CountryList: Array<Country> = new Array<Country>();
  public selectedCountryItem: Country = new Country();
  public selectedCountryItemActive: boolean = false; 


  public ZCGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_country_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    name: new FormControl('',Validators.required),
    attribute: new FormControl('',Validators.required),
  })

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.ZCGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
    this.getCountry();
  }

  closeZipCodeModal = () => {
    $('.create_zip_code_modal').fadeOut();
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._BankService.createZipCode(this.ZCGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  getCountry = () => {
    this._BankService.getCountry().subscribe(
      (response: Country[]) => {
        this.CountryList = response; 
      }
    )
  }

  setCountry = (C: Country) => {
    this.selectedCountryItem = C; 
    this.selectedCountryItemActive = true; 
    this.ZCGroup.patchValue({
      fk_country_id: C
    });
    this.systemMessage.emit("Država je bila uspešno izbrana !")
  }

}