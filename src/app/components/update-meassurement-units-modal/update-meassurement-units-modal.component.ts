import { Component, Output, Input, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MeassurmentUnits } from '../../../auth/Classes/meassurment-units';
import { MeassurmentUnitsService } from '../../../auth/API/meassurment-units.service';
import $ from 'jquery';
@Component({
  selector: 'update-meassurement-units-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-meassurement-units-modal.component.html',
  styleUrl: './update-meassurement-units-modal.component.scss'
})
export class UpdateMeassurementUnitsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: MeassurmentUnits = new MeassurmentUnits();
  public MUGroup: FormGroup | any; 

  constructor(
    private _MeassurementUnitsService: MeassurmentUnitsService
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
    this.MUGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      code: new FormControl(this.Info.idg,Validators.required),
      title: new FormControl(this.Info.title,Validators.required)
    });
  }

  saveData = () => {
    this._MeassurementUnitsService.updateItem(this.Info.id,this.MUGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeModal = () => {
    $('.update_mu_modal').fadeOut();
  }

}
