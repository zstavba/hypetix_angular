import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ZipCode } from '../../../auth/Classes/zip-code';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery';
import { Country } from '../../../auth/Classes/country';
import { BankService } from '../../../auth/API/bank.service';
import { SessionService } from '../../../auth/API/session.service';


@Component({
  selector: 'update-zip-code-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-zip-code-modal.component.html',
  styleUrl: './update-zip-code-modal.component.scss'
})
export class UpdateZipCodeModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: ZipCode = new ZipCode();

  
  public ZCGroup: FormGroup | any; 

  public CountryList: Array<Country> = new Array<Country>();
  public selectedCountryItem: Country = new Country();
  public selectedCountryItemActive: boolean = false; 

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.initilizeForm();
    this.getCountry();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initilizeForm();
    }
    
  }


  initilizeForm = () => {

    this.ZCGroup =  new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      fk_country_id: new FormControl(this.Info.fk_country_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      name: new FormControl(this.Info.name,Validators.required),
      attribute: new FormControl(this.Info.attribute,Validators.required),
  })
  this.selectedCountryItem = this.Info.fk_country_id;


  }

  closeZipCodeModal = () => {
    $('.update_zipcode_modal').fadeOut();
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
  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._BankService.updateZipCode(this.Info.id,this.ZCGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
