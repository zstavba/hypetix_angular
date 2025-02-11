import { Component, Output, Input, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Areas } from '../../../auth/Classes/areas';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from 'jquery';
import { BankService } from '../../../auth/API/bank.service';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
@Component({
  selector: 'update-areas-modal', 
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-areas-modal.component.html',
  styleUrl: './update-areas-modal.component.scss'
})
export class UpdateAreasModalComponent  implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Areas = new Areas();
  
  public AreaGroup: FormGroup | any; 

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
    this.AreaGroup  = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required)
    });
  }

  closeUpdateModal = () => {
    $('.update_areas_modal').fadeOut();
  }

  saveData = () => {
    this._BankService.updateArea(this.Info.id,this.AreaGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
