import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionService } from '../../../auth/API/session.service';
import { AlternativeChipersService } from '../../../auth/API/alternative-chipers.service';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { UserService } from '../../../auth/API/user.service';
import { User } from '../../../auth/Classes/user';

@Component({
  selector: 'chipper-add-partner',
  imports: [],
  templateUrl: './chipper-add-partner.component.html',
  styleUrl: './chipper-add-partner.component.scss'
})
export class ChipperAddPartnerComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() ID: string | null = '';

  public UsersList: Array<User> = new Array<User>();
  public selectedUser: User = new User();
  public slectedUserActive: boolean= false; 

  public PartnerGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_partner_id: new FormControl(''),
    fk_chipper_id: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _ALternativeChipperService: AlternativeChipersService,
    private _UserService: UserService
  ){}

  ngOnInit(): void {
    this.PartnerGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData(),
      fk_chipper_id: this.ID
    });
    this.getUserByType();
  }

  closeAddPartnerModal = () => {
    $('.add-partner-modal').fadeOut();
  }

  getUserByType = () => {
    this._UserService.getByType("partner").subscribe(
      (response: User[]) => {
        this.UsersList = response;
      }
    )
  }

  setUser = (item: User ) => {
    this.selectedUser = item; 
    this.slectedUserActive = true; 
    this.PartnerGroup.patchValue({
      fk_partner_id:item
    });
    this.systemMessage.emit("Partner je bil poknjižen !");
  }
  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._ALternativeChipperService.addPartner(this.ID, this.PartnerGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }
}
