import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationsComponent } from '../../../../components/navigations/navigations.component';
import { SessionService } from '../../../../../auth/API/session.service';
import { User } from '../../../../../auth/Classes/user';

@Component({
  standalone: true,
  selector: 'app-ca-classifications',
  imports: [
    NavigationsComponent
  ],
  templateUrl: './ca-classifications.component.html',
  styleUrl: './ca-classifications.component.scss'
})
export class CaClassificationsComponent implements OnInit {
  public URLsList: Array<any> = new Array<any>();
  public UserInformation: User | null = new User();


  constructor(
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
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
        title: "Klasifikacija",
        url: 'dashboard/coders/articles/classifications'
      }
    ];
    this.UserInformation = this._SessionService.getSessionData();
  }

}
