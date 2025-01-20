import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrafficTypeService } from '../../../auth/API/traffic-type.service';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { Generator } from '../../../auth/functions/generator';

@Component({
  selector: 'create-traffic-type-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-traffic-type-modal.component.html',
  styleUrl: './create-traffic-type-modal.component.scss'
})
export class CreateTrafficTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  public generator: Generator = new Generator();


  public TTGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    title: new FormControl('',Validators.required),
    attribute: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required),
  })



  constructor(
    private _SessionService: SessionService,
    private _TrafficTypeService: TrafficTypeService
  ){}

  ngOnInit(): void {
    this.TTGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  closeCreateTrafficTypeModal = () => {
    $('.create_traffic_type_modal').fadeOut();
  }

  saveData = () => {
    this._TrafficTypeService.createItem(this.TTGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
