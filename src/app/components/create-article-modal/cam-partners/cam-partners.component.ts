import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../../../auth/Classes/user';
import { UserService } from '../../../../auth/API/user.service';
import $ from 'jquery';

@Component({
  selector: 'cam-partners',
  imports: [],
  templateUrl: './cam-partners.component.html',
  styleUrl: './cam-partners.component.scss'
})
export class CamPartnersComponent implements OnInit{

  @Output() partner_information: EventEmitter<any> = new EventEmitter<any>();
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public PartnersList: Array<User> = new Array<User>();
  public selectedUser: User = new User();
  public selectedUserActive: boolean = false; 
  public selectedUsers: Array<User> = new Array<User>();

  constructor(
    private _UserService: UserService
  ){}

  ngOnInit(): void {
    this.getUsersBy("partner");
  }

  getUsersBy = (type: string) => {
    this._UserService.getByType(type).subscribe(
      (response: User[]) => {
        this.PartnersList = response; 
      }
    );
  }

  setUser = (item: User) => {
    this.selectedUser = item;
    this.selectedUserActive = true;
  }

  toggleComboBox = (item: string) => {
    $(`.${item}`).fadeToggle();
  }
  pushSelectedUser = () => {
    this.selectedUsers.push(this.selectedUser);
  }

  setData = () => {
    this.systemMessage.emit("Podatki so poknjiženi !")
    this.partner_information.emit(this.selectedUsers);
  }

  deleteItem = (ID: number) => {
    this.selectedUsers = this.selectedUsers.filter((user: User) => user.id !== ID );
  }

}
