import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'notification',
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent implements OnInit {

  @Input() class_type: string = '';
  @Input() system_message: string = ''; 


  ngOnInit(): void {
    
  }



}
