import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TrafficType } from '../../../auth/Classes/traffic-type';
import $ from 'jquery';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrafficTypeService } from '../../../auth/API/traffic-type.service';
import { response } from 'express';
@Component({
  selector: 'update-traffic-type-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-traffic-type-modal.component.html',
  styleUrl: './update-traffic-type-modal.component.scss'
})
export class UpdateTrafficTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: TrafficType = new TrafficType();

    public TTGroup: FormGroup | any;

  constructor(
    private _TrafficTypeService: TrafficTypeService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }    
  }

  closeUpdateTrafficTypeModal = () => {
    $('.update_traffic_type_modal').fadeOut();
  }

  initializeForm = () => {
    this.TTGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      attribute: new FormControl(this.Info.attribute,Validators.required),
      status: new FormControl(this.Info.status,Validators.required),
    })
  }

  saveData = () => {
    this._TrafficTypeService.updateItem(this.Info.id,this.TTGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      } 
    )
  }

}
