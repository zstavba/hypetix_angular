import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import $ from 'jquery';
@Component({
  standalone: true,
  selector: 'sidebar',
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  public UserInformation: User | null = new User();

  constructor(
    private _SessionService: SessionService
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
  }

  toggleUserMenu = () => {
    $('.user_menu').fadeToggle();
  }

}
