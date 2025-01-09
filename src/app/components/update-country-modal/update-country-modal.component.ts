import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Country } from '../../../auth/Classes/country';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import $ from 'jquery'; 
import { BankService } from '../../../auth/API/bank.service';

@Component({
  selector: 'update-country-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-country-modal.component.html',
  styleUrl: './update-country-modal.component.scss'
})
export class UpdateCountryModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Country = new Country();
  public CountryGroup: FormGroup | any; 

  constructor(
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
    
  }

  initializeForm = () => {
   this.CountryGroup =  new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      name: new FormControl(this.Info.name,Validators.required),
      type: new FormControl(this.Info.type,Validators.required),
      name_ang: new FormControl(this.Info.name_ang,Validators.required),
      ident: new FormControl(this.Info.ident,Validators.required)
    })
  
  }

  saveData = () => {
    this._BankService.updateCountry(this.Info.id,this.CountryGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeCreateCountryModal = () => {
    $('.update_country_modal').fadeOut();
  }

}
