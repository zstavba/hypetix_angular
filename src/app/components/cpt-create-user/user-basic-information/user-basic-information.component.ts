import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BankService } from '../../../../auth/API/bank.service';
import { Areas } from '../../../../auth/Classes/areas';
import { Language } from '../../../../auth/Classes/language';
import $ from 'jquery';

enum UserType {
  admin =  "admin",
  partner = "partner",
  worker = "worker",
  guest =  "guest",
  spenders = "spenders",
  suppliers = 'suppliers',
  manufacturer = 'manufacturer',
  buyers = "buyers",
  passengers = "passengers",
  recipent = "recipents",
  bank = "bank"
  
};

@Component({
  selector: 'user-basic-information',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './user-basic-information.component.html',
  styleUrl: './user-basic-information.component.scss'
})
export class UserBasicInformationComponent implements OnInit {

  @Output() BasicInformation: EventEmitter<any> = new EventEmitter<any>();

  public LanguageList: Array<Language> = new Array<Language>();
  public selectedLanguageItem: Language = new Language();
  public selectedLanguageItemActive: boolean = false; 
  
  public AreasList: Array<Areas> = new Array<Areas>();
  public selectedAreaItem: Areas = new Areas();
  public selectedAreaItemActive: boolean = false; 
  

  public UserInformation: FormGroup = new FormGroup({
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    adress: new FormControl('',Validators.required),
    fk_area_id: new FormControl(''),
    fk_language_id: new FormControl(''),
    user_type: new FormControl('',Validators.required),
    fk_currencie_id: new FormControl(''),
    tax_number: new FormControl('',Validators.required),
    id_number: new FormControl(''),
  });

  constructor(
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.getArea();
    this.getLanguages();
  }

  setItems = () => {
    this.BasicInformation.emit(this.UserInformation.value)
  }
  

  getArea = () => {
    this._BankService.getAreas().subscribe(
      (response: Areas[]) => {
        this.AreasList = response; 
      }
    )
  }

  setArea = (item: Areas) => {
    this.selectedAreaItem = item; 
    this.selectedAreaItemActive = true; 
    this.UserInformation.patchValue({
      area: item
    });
  }

  getLanguages = () => {
    this._BankService.getLanguage().subscribe(
      (response: Language[]) => {
        this.LanguageList = response; 
      } 
    )
  }

  setLanguage = (item: Language) => {
    this.selectedLanguageItem = item; 
    this.selectedLanguageItemActive = true; 
    this.UserInformation.patchValue({
      fk_language_id: item
    });
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }
  
  UserType = () : typeof UserType => {
    return UserType
  }

}
