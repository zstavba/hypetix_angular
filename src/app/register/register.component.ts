import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { isPlainObject } from 'jquery';
import { UserSearchPipe } from '../../auth/Pipes/user-search.pipe';
import { UserService } from '../../auth/API/user.service';
import $ from 'jquery';
import { NotificationComponent } from '../components/notification/notification.component';


@Component({
  standalone: true,
  selector: 'app-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  public systemMessage: string = '';

  public RegisterForm: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    emsho: new FormControl(''),
    tax_number: new FormControl('')
  })

  constructor(
    private _UserService: UserService
  ){}

  ngOnInit(): void {
    
  }

  handleMessage = (data: any) => {
    console.log(data);
  }

  saveData = () => {
    this._UserService.createUser(this.RegisterForm.value).subscribe(
      (response: any) => {
          $('.register_notification').fadeIn();
          this.systemMessage = response.message;
          setTimeout(() => {
            $('.register_notification').fadeOut();
            this.systemMessage = "";    
          },4000);
      },
      (error: any) => {
        $('.register_notification').fadeIn();
        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.register_notification').fadeOut();
          this.systemMessage = "";    
        },4000);
      }
    )
  }

}
