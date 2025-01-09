import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { DeliveryConditions } from '../../../auth/Classes/delivery-conditions';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeliveryConditionsService } from '../../../auth/API/delivery-conditions.service';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import { SessionService } from '../../../auth/API/session.service';
import { GroupType } from '../../../auth/Classes/group-type';
import $ from 'jquery';
@Component({
  selector: 'update-delivery-conditions-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-delivery-conditions-modal.component.html',
  styleUrl: './update-delivery-conditions-modal.component.scss'
})
export class UpdateDeliveryConditionsModalComponent implements OnInit {

   @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>(); 
   @Input() Info: DeliveryConditions = new DeliveryConditions();

   public GroupList: Array<GroupType> = new Array<GroupType>();
   public selectedGroup: GroupType = new GroupType();
   public selectedGroupActive: boolean = false; 
   public DCGroup: FormGroup | any;

  constructor(
        private _SessionService: SessionService,
        private _DeliveryConditionsSerivce: DeliveryConditionsService,
        private _GroupTypeService: GroupTypeService
    
  ){}

  ngOnInit(): void {
    this.initializeForm();
    this.getGroupType();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["Info"]){
      this.initializeForm();
    }
  }

  initializeForm = () => {
    this.DCGroup =  new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      fk_group_id: new FormControl(this.Info.fk_group_id),
      title: new FormControl(this.Info.title,Validators.required),
      location: new FormControl(this.Info.location,Validators.required),
      ident: new FormControl(this.Info.ident,Validators.required),
      price: new FormControl(this.Info.price,Validators.required)
    });
  }

  getGroupType = () => {
    this._GroupTypeService.get().subscribe(
      (response: GroupType[]) => {
         this.GroupList = response; 
      }
    )
  }

  setGroupType = (Group: GroupType) => {
    this.selectedGroup = Group;
    this.selectedGroupActive = true; 
    this.DCGroup.patchValue({
      fk_group_id: Group
    });
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }


  closeDCModal = () => {
    $('.update_delivery_conditions_modal').fadeOut();
  }

  saveData = () => {
    this._DeliveryConditionsSerivce.updateSelectedItem(this.Info.id,this.DCGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message)
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message)
      }
    )
  }

}
