import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateArticleModalComponent } from '../../../../components/create-article-modal/create-article-modal.component';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';

@Component({
  standalone: true,
  selector: 'app-ca-articles-list',
  imports: [
    NavigationsComponent,
    CreateArticleModalComponent
  ],
  templateUrl: './ca-articles-list.component.html',
  styleUrl: './ca-articles-list.component.scss'
})
export class CaArticlesListComponent implements OnInit {

  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();

  constructor(
    private _SessionService: SessionService
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
        title: "Tipi artiklov",
        url: 'dashboard/coders/articles/article/types'
      }
    ];
  }

}

