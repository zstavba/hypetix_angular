import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Tab,initTWE} from "tw-elements";
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Tabs} from 'flowbite';
import { UserBasicInformationComponent } from './user-basic-information/user-basic-information.component';
import { UserContactInformationComponent } from './user-contact-information/user-contact-information.component';
import { UserBankAccountComponent } from './user-bank-account/user-bank-account.component';


@Component({
  standalone: true,
  selector: 'cpt-create-user',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    UserBasicInformationComponent,
    UserContactInformationComponent,
    UserBankAccountComponent

  ],
  templateUrl: './cpt-create-user.component.html',
  styleUrl: './cpt-create-user.component.scss'
})
export class CptCreateUserComponent implements OnInit {

  public UserData: Array<any> = new Array<any>();

  constructor(){}

  ngOnInit(): void {

  }

  closeCreateUserModal = () => {
    $('.cpt-create-user').fadeOut();
  }

  getSelectedBasicInformation = (information: any) => {
    this.UserData.push({
      basic_information: information
    })
  }

  getSelectedContactInformation = (information: any) => {
    this.UserData.push({
      contact_information: information
    });
  }
  getSelectedBankAccount = (information: any) => {
    this.UserData.push({
      bank_information: information
    })
  }
  saveData = () => {
    console.log(this.UserData);
  }



}
