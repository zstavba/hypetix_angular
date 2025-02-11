import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Generator } from '../../../auth/functions/generator';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { BankService } from '../../../auth/API/bank.service';
import $ from 'jquery';
@Component({
  selector: 'create-areas-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-areas-modal.component.html',
  styleUrl: './create-areas-modal.component.scss'
})
export class CreateAreasModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public generator: Generator = new Generator();

  public AreaGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.AreaGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }


  saveData = () => {
    this._BankService.createArea(this.AreaGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeCreateModal = () => {
    $('.create_area_modal').fadeOut();
  }



}
