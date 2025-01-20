import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceTypeService } from '../../../auth/API/price-type.service';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';



@Component({
  selector: 'create-price-type-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-price-type-modal.component.html',
  styleUrl: './create-price-type-modal.component.scss'
})
export class CreatePriceTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public UserInformation: User | null = new User();
  public generator: Generator = new Generator();


  public PTGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('', Validators.required),
    status: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required)
  })

  constructor(
    private _SessionService: SessionService,
    private _PriceTypeService: PriceTypeService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.PTGroup.patchValue({
      fk_user_id: this.UserInformation
    });
  }

  closePriceTypeModal = () => {
    $('.create_price_type_modal').fadeOut();
  }

  saveData = () => {
    console.log(this.PTGroup.value);
    this._PriceTypeService.createItem(this.PTGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
