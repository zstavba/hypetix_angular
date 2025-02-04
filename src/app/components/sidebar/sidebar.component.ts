import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import $ from 'jquery';
import { Tooltip } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';


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

  // set the tooltip content element
  public $targetEl: HTMLElement | null =  null;

  // set the element that trigger the tooltip using hover or click
  public $triggerEl: HTMLElement | null = null;

  // options with default values
  public options: any = {
      placement: 'bottom',
      triggerType: 'hover',
      onHide: () => {
          console.log('tooltip is shown');
      },
      onShow: () => {
          console.log('tooltip is hidden');
      },
      onToggle: () => {
          console.log('tooltip is toggled');
      },
  };


  // instance options with default values
  public instanceOptions = {
    id: 'tooltipContent',
    override: true
  };


  constructor(
    private _SessionService: SessionService,
    @Inject(PLATFORM_ID) private platformId: any
  ){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.$targetEl = document.getElementById('tooltipContent');
      this.$triggerEl = document.getElementById('tooltipButton');

      if (this.$targetEl && this.$triggerEl) {
        new Tooltip(this.$targetEl, this.$triggerEl, this.options, this.instanceOptions);
      }
    }
    this.UserInformation = this._SessionService.getSessionData();
  }

  toggleUserMenu = () => {
    $('.user_menu').fadeToggle();
  }

}
