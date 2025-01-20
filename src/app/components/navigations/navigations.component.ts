import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navigations',
  imports: [
    RouterLink
  ],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.scss'
})
export class NavigationsComponent implements OnInit {

  @Input() urls: Array<any> = new Array<any>();

  ngOnInit(): void {
    
  }

}
