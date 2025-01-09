import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { BankService } from '../../../auth/API/bank.service';
import { Generator } from '../../../auth/functions/generator';
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

  public ZCGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
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
  }

  closeZipCodeModal = () => {
    $('.create_zip_code_modal').fadeOut();
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

}