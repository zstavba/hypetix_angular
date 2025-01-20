import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExchangeRates } from '../../../auth/Classes/exchange-rates';
import { ExchangeRatesService } from '../../../auth/API/exchange-rates.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { CurrencieService } from '../../../auth/API/currencie.service';
import { Currencie } from '../../../auth/Classes/currencie';
import $ from 'jquery'; 
import { Generator } from '../../../auth/functions/generator';

@Component({
  selector: 'create-exchange-rates-modal',
  imports: [],
  templateUrl: './create-exchange-rates-modal.component.html',
  styleUrl: './create-exchange-rates-modal.component.scss'
})
export class CreateExchangeRatesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public CurrencieList: Array<Currencie> = new Array<Currencie>();
  public selectedCurrencieItem: Currencie = new Currencie();
  public selectedCurrencieItemActive: boolean = false;

  public generator: Generator = new Generator();

  public ECGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_currencie_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    unit: new FormControl('',Validators.required),
    course: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
    course_value: new FormControl('',Validators.required),
  })



  constructor(
    private _ExchnageRatesService: ExchangeRatesService,
    private _SessionService: SessionService,
    private _CurrencieService: CurrencieService
  ) {}

  ngOnInit(): void {
    this.ECGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });

  }

  getCurrencies = () => {
    this._CurrencieService.get().subscribe(
      (response: Currencie[]) => {
        this.CurrencieList = response; 
      }
    )
  }

  setCurrencieItem = (C: Currencie) => {
    this.selectedCurrencieItem = C; 
    this.selectedCurrencieItemActive = true; 
    this.ECGroup.patchValue({
      fk_currencie_id: C
    });
    this.systemMessage.emit("Valuta je bila uspešno izbrana !")
  }

  closeCreateECModal = () => {
    $('.create_exchange_rates_modal').fadeOut();
  }

  saveData = () => {
    this._ExchnageRatesService.createItem(this.ECGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      } 
    )
  }


}
