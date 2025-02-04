import { Component, OnInit } from '@angular/core';
import { BankService } from '../../../../../auth/API/bank.service';
import $ from 'jquery';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { CreateLanguageModalComponent } from '../../../../components/create-language-modal/create-language-modal.component';
import { UpdateLanguageModalComponent } from '../../../../components/update-language-modal/update-language-modal.component';
import { UploadLanguageModalComponent } from '../../../../components/upload-language-modal/upload-language-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Language } from '../../../../../auth/Classes/language';
import { SearchLanguagesPipe } from '../../../../../auth/Pipes/search-languages.pipe';
import { User } from '../../../../../auth/Classes/user';
import { SessionService } from '../../../../../auth/API/session.service';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
@Component({
  selector: 'app-cd-languages',
  imports: [
    NotificationComponent,
    CreateLanguageModalComponent,
    UpdateLanguageModalComponent,
    UploadLanguageModalComponent,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    SearchLanguagesPipe,
    NavigationsComponent
  ],
  templateUrl: './cd-languages.component.html',
  styleUrl: './cd-languages.component.scss'
})
export class CdLanguagesComponent implements OnInit {

  public systemMessage: string = '';
  public searchLanguage: string = '';
  public LanguageList: Array<Language> = new Array<Language>();
  public ipp: number = 9;
  public p: any; 
  public selectedLanguage: Language = new Language();
  public UserInformation: User | null = new User();
  public URLsList: Array<any> = new Array<any>();


  constructor(
    private _SessionService: SessionService,
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.getLanguages();
    this.URLsList = [
      {
        title: "Domov",
        url: '/dashboard',
      },
      {
        title: "Šifranti",
        url:  '/dashboard/coders',
      },
      {
        title: "Splošno",
        url:  '/dashboard/coders/defaults',
      },
      {
        title: "Jeziki",
        url: '/dashboard/coders/default/languages'
      }
    ];
  }
  
  onNotify = (message: string) => {
    $('.language_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.language_notification').fadeOut();
      this.systemMessage = "";  
    },4000);
  }

  toggleCreateLanguageModal = () => {
    $('.create_language_modal').fadeIn();
  }
  toggleUploadLanguageModal = () => {
    $('.upload_language_modal').fadeIn();
  }

  getLanguages = () => {
    this._BankService.getLanguage().subscribe(
      (response: Language[]) => {
        this.LanguageList = response; 
      }
    )
  }

  deleteItem = (ID: number) => {
    this._BankService.deleteLanguage(ID).subscribe(
      (response: any) => {
        this.getLanguages();
        this.onNotify(response.message);
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

  updateSelectedItem = (item: Language) => {
    this.selectedLanguage = item; 
    $('.update_language_modal').fadeIn();
  }

}
