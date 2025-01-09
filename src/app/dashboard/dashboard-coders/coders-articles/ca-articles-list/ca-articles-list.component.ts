import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CreateArticleModalComponent } from '../../../../components/create-article-modal/create-article-modal.component';

@Component({
  standalone: true,
  selector: 'app-ca-articles-list',
  imports: [
    RouterLink,
    CreateArticleModalComponent
  ],
  templateUrl: './ca-articles-list.component.html',
  styleUrl: './ca-articles-list.component.scss'
})
export class CaArticlesListComponent {

}
