import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { Generator } from '../../../auth/functions/generator';
import { DeliveryConditionsService } from '../../../auth/API/delivery-conditions.service';
import { SessionService } from '../../../auth/API/session.service';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import { GroupType } from '../../../auth/Classes/group-type';

@Component({
  selector: 'create-delivery-conditions-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-delivery-conditions-modal.component.html',
  styleUrl: './create-delivery-conditions-modal.component.scss'
})
export class CreateDeliveryConditionsModalComponent implements OnInit {
 
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>(); 
  public generator: Generator = new Generator();

  public GroupList: Array<GroupType> = new Array<GroupType>();
  public selectedGroup: GroupType = new GroupType();
  public selectedGroupActive: boolean = false; 


  public DCGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_group_id: new FormControl(''),
    title: new FormControl('',Validators.required),
    location: new FormControl('',Validators.required),
    ident: new FormControl(this.generator.generateIdent(),Validators.required),
    price: new FormControl('',Validators.required)
  });

  constructor(
    private _SessionService: SessionService,
    private _DeliveryConditionsSerivce: DeliveryConditionsService,
    private _GroupTypeService: GroupTypeService
  ){}

  ngOnInit(): void {
    this.DCGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
    this.getGroupType();
  }

  closeDCModal = () => {
    $('.create_delivery_conditions_modal').fadeOut();
  }

  saveData = () => {
    this._DeliveryConditionsSerivce.createItem(this.DCGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
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

}
