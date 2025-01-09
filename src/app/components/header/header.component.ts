import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  standalone: true,
  selector: 'a-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    
  }

  toggleSubMenu = () => {
    $('.sub_menu').fadeToggle();
  }

}
