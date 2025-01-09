import { Component, EventEmitter, OnInit, Output, SimpleChanges, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Language } from '../../../auth/Classes/language';
import $ from 'jquery';
import { BankService } from '../../../auth/API/bank.service';


@Component({
  selector: 'update-language-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-language-modal.component.html',
  styleUrl: './update-language-modal.component.scss'
})
export class UpdateLanguageModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Language = new Language();

  public LanguageGroup: FormGroup | any; 

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
    this.LanguageGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      attribute: new FormControl(this.Info.attribute,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      status: new FormControl(this.Info.status,Validators.required)
    });
  
  }

  closeUpdateModal = () => {
    $('.update_language_modal').fadeOut();
  }

  saveData = () => {
    this._BankService.updateLanguage(this.Info.id,this.LanguageGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }



}
