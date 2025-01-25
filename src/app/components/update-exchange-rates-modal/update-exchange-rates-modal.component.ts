import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExchangeRates } from '../../../auth/Classes/exchange-rates';
import { Currencie } from '../../../auth/Classes/currencie';
import { CurrencieService } from '../../../auth/API/currencie.service';
import $ from 'jquery';
import { ExchangeRatesService } from '../../../auth/API/exchange-rates.service';

@Component({
  selector: 'update-exchange-rates-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-exchange-rates-modal.component.html',
  styleUrl: './update-exchange-rates-modal.component.scss'
})
export class UpdateExchangeRatesModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: ExchangeRates = new ExchangeRates();

  public CurrencieList: Array<Currencie> = new Array<Currencie>();
  public selectedCurrencieItem: Currencie = new Currencie();
  public selectedCurrencieItemActive: boolean = false;
  

  public ECGroup: FormGroup | any; 

  constructor(
      private _CurrencieService: CurrencieService,
      private _ExchangeRatesService: ExchangeRatesService
  ){}

  ngOnInit(): void {
    this.getCurrencies();
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
    
  }

  initializeForm = () => {
    this.ECGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      fk_currencie_id: new FormControl(this.Info.fk_currencie_id),
      ident: new FormControl(this.Info.ident),
      title: new FormControl(this.Info.title),
      type: new FormControl(this.Info.type),
      unit: new FormControl(this.Info.unit),
      course: new FormControl(this.Info.course),
      status: new FormControl(this.Info.status),
      course_value: new FormControl(this.Info.course_value)
    });
    this.selectedCurrencieItem = this.Info.fk_currencie_id;
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

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  closeUpdateModal = () => {
    $('.update_exchnage_rates_modal').fadeOut();
  }

  saveData = () => {
    this._ExchangeRatesService.updateItem(this.Info.id,this.ECGroup).subscribe(
      (response : any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    );
  }

}
