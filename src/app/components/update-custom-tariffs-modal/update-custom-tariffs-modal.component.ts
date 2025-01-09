import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { CustomTariffs } from '../../../auth/Classes/custom-tariffs';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomTariffsService } from '../../../auth/API/custom-tariffs.service';
import { MeassurmentUnitsService } from '../../../auth/API/meassurment-units.service';
import { MeassurmentUnits } from '../../../auth/Classes/meassurment-units';
import $ from 'jquery';
@Component({
  standalone: true,
  selector: 'update-custom-tariffs-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-custom-tariffs-modal.component.html',
  styleUrl: './update-custom-tariffs-modal.component.scss'
})
export class UpdateCustomTariffsModalComponent implements OnInit {

  public systemMessage: string = '';
  @Input() Info: CustomTariffs = new CustomTariffs();

  public CTGroup: FormGroup | any;
  public MuList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public selectedMuItem: MeassurmentUnits = new MeassurmentUnits();
  public selectedMuItemActive: boolean = false; 

  constructor(
    private _CTServivce: CustomTariffsService,
    private _MuService: MeassurmentUnitsService,
    
  ){}

  ngOnInit(): void {
    this.initializeForm();
    this.getUnits();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['Info']){
      this.initializeForm();
    }
  }

  getUnits = () => {
    this._MuService.get().subscribe(
      (response: MeassurmentUnits[]) => {
        this.MuList = response;
      }
    );
  }

  setUnit = (Unit: MeassurmentUnits) => {
    this.selectedMuItem = Unit; 
    this.selectedMuItemActive = true; 
    this.CTGroup.patchValue({
      fk_em_id: this.selectedMuItem
    });
  }

  initializeForm = () => {
  this.CTGroup  = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      fk_em_id: new FormControl(this.Info.fk_em_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      name: new FormControl(this.Info.name,Validators.required),
      stage: new FormControl(this.Info.stage,Validators.required),
      consigment: new FormControl(this.Info.consigment,Validators.required),
      position: new FormControl(this.Info.position,Validators.required),
      validity: new FormControl(this.Info.validity,Validators.required)
    });
  }

  saveData = () => {
    this._CTServivce.updateItem(this.Info.id,this.CTGroup).subscribe(
      (response: any) => {
        $('.update_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.update_notification').fadeOut();
          this.systemMessage = "";     
        },4000);
      },
      (error: any) => {
        $('.update_notification').fadeIn();
        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.update_notification').fadeOut();
          this.systemMessage = "";     
        },4000);
      }
    )
  }

  toggleComboBox = (item: string) => {
    $(`.${item}`).fadeToggle();
  }


  closeCreateCustomTariffsModal = () => {
    $('.update_custom_tariff_modal').fadeOut();
  }
}
