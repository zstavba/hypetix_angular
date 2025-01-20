import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Country } from '../../../auth/Classes/country';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Currencie } from '../../../auth/Classes/currencie';
import $ from 'jquery';
import { BankService } from '../../../auth/API/bank.service';
import { CurrencieService } from '../../../auth/API/currencie.service';
import { SessionService } from '../../../auth/API/session.service';

@Component({
  selector: 'update-currencie-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-currencie-modal.component.html',
  styleUrl: './update-currencie-modal.component.scss'
})
export class UpdateCurrencieModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Currencie = new Currencie();
  public CountryList: Array<Country> = new Array<Country>();
  public selectedCountryItem: Country = new Country();
  public selectedCountryItemActive: boolean = false; 

  public CGroup: FormGroup | any; 

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService,
    private _CurrencieService:CurrencieService
  ){}

  ngOnInit(): void {
    this.initializeForm();
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

  ngOnChanges(changes: SimpleChanges): void {
      if(changes["Info"]){
        this.initializeForm();
      }    
  }

  initializeForm = () => {
    this.CGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      fk_country_id: new FormControl(this.Info.fk_country_id),
      title: new FormControl(this.Info.title, Validators.required),
      type: new FormControl(this.Info.type,Validators.required),
      code: new FormControl(this.Info.code,Validators.required),
      status: new FormControl(this.Info.status,Validators.required)
    });
    this.selectedCountryItem = this.Info.fk_country_id;
  }

  closeUpdateModal = () => {
    $('.update_curencie_modal').fadeOut();
  }

  closeCreateModal = () => {
    $('.create_currencie_modal').fadeOut();
  }
  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._CurrencieService.updateItem(this.Info.id,this.CGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

} 
