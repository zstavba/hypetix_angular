import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import $ from 'jquery';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { MeassurmentUnits } from '../../../auth/Classes/meassurment-units';
import { MeassurmentUnitsService } from '../../../auth/API/meassurment-units.service';
import { User } from '../../../auth/Classes/user';
import { Generator } from '../../../auth/functions/generator';
import { CustomTariffsService } from '../../../auth/API/custom-tariffs.service';

@Component({
  selector: 'create-custom-tariffs-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-custom-tariffs-modal.component.html',
  styleUrl: './create-custom-tariffs-modal.component.scss'
})
export class CreateCustomTariffsModalComponent implements OnInit  {
  //create_custom_tariff_notification
  public systemMessage: string = '';
  public generator: Generator = new Generator();
  

  public CTGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_em_id: new FormControl(''),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    name: new FormControl('',Validators.required),
    stage: new FormControl('',Validators.required),
    consigment: new FormControl('',Validators.required),
    position: new FormControl('',Validators.required),
    validity: new FormControl('',Validators.required)
  });

  public UserInformation: User | null = new User();

  public MuList: Array<MeassurmentUnits> = new Array<MeassurmentUnits>();
  public selectedMuItem: MeassurmentUnits = new MeassurmentUnits();
  public selectedMuItemActive: boolean = false; 
  
  constructor(
    private _SessionService: SessionService,
    private _MuService: MeassurmentUnitsService,
    private _CustomTariffService: CustomTariffsService
  ){}


  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.CTGroup.patchValue({
      fk_user_id: this.UserInformation
    });
    this.getUnits();
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

  closeCreateCustomTariffsModal = () => {
    $('.create_custom_tariffs_modal').fadeOut();
  }

  toggleComboBox = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._CustomTariffService.create(this.CTGroup.value).subscribe(
      (response: any) => {
        $('.create_custom_tariff_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.create_custom_tariff_notification').fadeOut();
          this.systemMessage = ""   
        },4000);
      },
      (error: any) => {
        $('.create_custom_tariff_notification').fadeIn();
        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.create_custom_tariff_notification').fadeOut();
          this.systemMessage = ""   
        },4000);
      }
    )
  }

}
