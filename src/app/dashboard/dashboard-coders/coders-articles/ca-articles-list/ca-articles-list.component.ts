import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateArticleModalComponent } from '../../../../components/create-article-modal/create-article-modal.component';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';
import { CamBasicsComponent } from '../../../../components/create-article-modal/cam-basics/cam-basics.component';
import $ from 'jquery';
import { AlternativeChipersService } from '../../../../../auth/API/alternative-chipers.service';
import { AlternativeChipers } from '../../../../../auth/Classes/alternative-chipers';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchChipperPipe } from '../../../../../auth/Pipes/search-chipper.pipe';

@Component({
  standalone: true,
  selector: 'app-ca-articles-list',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NavigationsComponent,
    CreateArticleModalComponent,
    RouterLink,
    NotificationComponent,
    NgxPaginationModule,
    SearchChipperPipe
  ],
  templateUrl: './ca-articles-list.component.html',
  styleUrl: './ca-articles-list.component.scss'
})
export class CaArticlesListComponent implements OnInit {

  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();
  public AlternativesList: Array<AlternativeChipers> = new Array<AlternativeChipers>();
  public systemMessage: string = '';
  public ipp: number = 9;
  public p: any; 
  public searchItem: string = '';


  constructor(
    private _SessionService: SessionService,
    private _ALternativeChippersService: AlternativeChipersService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
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
        title: "Artikli",
        url:  'dashboard/coders/articles',
      },
      {
        title: "Vsi artikli",
        url: 'dashboard/coders/articles/list/all'
      }
    ];
    this.getItems();
  }

  openCreateModal = () => {
    $('.create_article_modal').fadeIn();
  }

  getItems = () => {
    this._ALternativeChippersService.getItems().subscribe(
      (response: AlternativeChipers[]) => {
        this.AlternativesList = response;
      }
    )
  }

  onNotify = (message: string) => {
    $('.chipper_notification').fadeIn();
    this.systemMessage = message;
    setTimeout(() => {
      $('.chipper_notification').fadeOut();
      this.systemMessage = "";
      
    }, 4000)
  }

  deleteItem = (ID: number) => {
    this._ALternativeChippersService.deleteItem(ID).subscribe(
      (response: any) => {
        this.onNotify(response.message)
      },
      (error: any) => {
        this.onNotify(error.error.message);
      }
    )
  }

}

