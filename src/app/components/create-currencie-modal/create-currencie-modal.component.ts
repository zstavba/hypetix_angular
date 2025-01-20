import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Generator } from '../../../auth/functions/generator';
import $ from  'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { BankService } from '../../../auth/API/bank.service';
import { CurrencieService } from '../../../auth/API/currencie.service';
import { Country } from '../../../auth/Classes/country';
import { SearchCountryPipe } from '../../../auth/Pipes/search-country.pipe';
@Component({
  selector: 'create-currencie-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SearchCountryPipe
  ],
  templateUrl: './create-currencie-modal.component.html',
  styleUrl: './create-currencie-modal.component.scss'
})
export class CreateCurrencieModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();

  public CountryList: Array<Country> = new Array<Country>();
  public selectedCountryItem: Country = new Country();
  public selectedCountryItemActive: boolean = false; 
  public searchC: string = '';

  public CGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_country_id: new FormControl(''),
    title: new FormControl('', Validators.required),
    type: new FormControl('',Validators.required),
    code: new FormControl(this.generator.generateIdent(),Validators.required),
    status: new FormControl('',Validators.required)

  })

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService,
    private _CurrencieService:CurrencieService
  ){}

  ngOnInit(): void {
    this.CGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
    this.getCountry();
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
    this.CGroup.patchValue({
      fk_country_id: C
    })
    this.systemMessage.emit("Država je bila uspešno izbrana !")
  }

  closeCreateModal = () => {
    $('.create_currencie_modal').fadeOut();
  }
  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._CurrencieService.createItem(this.CGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },  
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
