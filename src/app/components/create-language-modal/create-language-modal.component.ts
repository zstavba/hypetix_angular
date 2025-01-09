import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { BankService } from '../../../auth/API/bank.service';

@Component({
  selector: 'create-language-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-language-modal.component.html',
  styleUrl: './create-language-modal.component.scss'
})
export class CreateLanguageModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>()

  public LanguageGroup: FormGroup =  new FormGroup({
    fk_user_id: new FormControl(''),
    attribute: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.LanguageGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeCreateLanguageModal = () => {
    $('.create_language_modal').fadeOut();
  }

  saveData = () => {
    
    this._BankService.createLanguage(this.LanguageGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )

  }


}
