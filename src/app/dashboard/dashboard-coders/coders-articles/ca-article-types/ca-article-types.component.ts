import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateArticleTypeModalComponent } from '../../../../components/create-article-type-modal/create-article-type-modal.component';
import { ArticleTypeService } from '../../../../../auth/API/article-type.service';
import { ArticleType } from '../../../../../auth/Classes/article-type';
import $ from 'jquery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleTypeSearchPipe } from '../../../../../auth/Pipes/article-type-search.pipe';
import { NotificationComponent } from '../../../../components/notification/notification.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateGroupTypeModalComponent } from '../../../../components/update-group-type-modal/update-group-type-modal.component';
import { UpdateArticleTypeModalComponent } from '../../../../components/update-article-type-modal/update-article-type-modal.component';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';


@Component({
  standalone: true,
  selector: 'app-ca-article-types',
  imports: [
    CreateArticleTypeModalComponent,
    ReactiveFormsModule,
    FormsModule,
    ArticleTypeSearchPipe,
    NotificationComponent,
    NgxPaginationModule,
    UpdateArticleTypeModalComponent,
    NavigationsComponent
  ],
  templateUrl: './ca-article-types.component.html',
  styleUrl: './ca-article-types.component.scss'
})
export class CaArticleTypesComponent implements OnInit {

  public ArticleTypeList: Array<ArticleType> = new Array<ArticleType>();
  public searchArticle: string = '';
  public systemMessage: string = '';
  public itemsPerPage: number = 9;
  public p: any; 
  public ArticleTypeInfo: ArticleType | null = new ArticleType();
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();

  constructor(
    private _SessionService: SessionService,
    private _ArticleTypeService:ArticleTypeService
  ){}

  ngOnInit(): void {
    this.getArticleType();
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
        title: "Tipi artiklov",
        url: 'dashboard/coders/articles/article/types'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
  }


  getArticleType = () => {
    this._ArticleTypeService.get().subscribe(
      (response: ArticleType[]) => {
        this.ArticleTypeList = response; 
      }
    )
  }

  toggleCreateArticleTypeModal = () => {
    $('.create_article_type_modal').fadeIn();
  }

  deleteItem = (ID: number) => {
    this._ArticleTypeService.deleteData(ID).subscribe(
      (response: any) => {
        this.getArticleType();
        $('.article_type_notification').fadeIn();
        this.systemMessage = response.message;
        setTimeout(() => {
          $('.article_type_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.article_type_notification').fadeIn();

        if(error.status == 404){
          this.systemMessage = 'Povezava do URLja ni bila najdena  !'
        }

        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.article_type_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

  updateItem = (Type: ArticleType) => {
    $('.update_article_modal').fadeIn();
    this.ArticleTypeInfo = Type;
  }

}
