import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { SessionService } from '../../../auth/API/session.service';
import { PriceTypeService } from '../../../auth/API/price-type.service';
import $ from 'jquery';
import { PriceType } from '../../../auth/Classes/price-type';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'update-price-type-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-price-type-modal.component.html',
  styleUrl: './update-price-type-modal.component.scss'
})
export class UpdatePriceTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: PriceType = new PriceType();

  public PTGroup: FormGroup | any; 

  constructor(
    private _SessionService: SessionService,
    private _PriceTypeService: PriceTypeService
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
    this.PTGroup  = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title, Validators.required),
      status: new FormControl(this.Info.status,Validators.required),
      type: new FormControl(this.Info.type,Validators.required)
    })
  }


  closeUpdateModal = () => {
    $('.update_price_type_modal').fadeOut();
  }

  saveData = () => {
    this._PriceTypeService.updateItem(this.Info.id,this.PTGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    );
  }

}
