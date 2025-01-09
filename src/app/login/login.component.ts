import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../auth/API/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NotificationComponent } from '../components/notification/notification.component';
import $ from 'jquery';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { FirebaseService } from '../../auth/API/firebase.service';
import { response } from 'express';
import { User } from '../../auth/Classes/user';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    FormsModule,
    NotificationComponent,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit  {

  public systemMessage: string = '';
  public GoiogleUserInformation: any; 

  public LoginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  }); 


  constructor(
    private _UserService: UserService,
    private _FirebaseService: FirebaseService
  ){}

  ngOnInit(): void {
    
  }
  async loginWithGoogle() {
    try {
      const result = await this._FirebaseService.loginWithGoogle();
      result.subscribe(
        (response: any) => {
          this._UserService.saveUserInformation(response).subscribe(
            (response: User) => {
              let stringifyUser = JSON.stringify(response);
              sessionStorage.setItem("user",stringifyUser);
              $('.login_notification').fadeIn();
              this.systemMessage =  "Prijava z google računom je bila uspešna, kmalu boste preusmerjeni.";
              setTimeout(() => {
                $('.login_notification').fadeOut();
                this.systemMessage = ""  
              },4000);
            },
            (error: any) => {
              $('.login_notification').fadeIn();
              this.systemMessage = error.error.message;
              setTimeout(() => {
                $('.login_notification').fadeOut();
                this.systemMessage = ""  
              },4000);
            }
          )
        }
      );



   
    } catch (error) {
      console.error('Login failed:', error);
      alert('Google login failed. Please try again.');
    }
  }
  saveData = () => {
    this._UserService.login(this.LoginForm.value).subscribe(
      (response: any) => {
        $('.login_notification').fadeIn();
        this.systemMessage = "Prijava je bila uspešna !!";
        setTimeout(() => {
          $('.login_notification').fadeOut();
          this.systemMessage = "";
        },4000)
      },
      (error: any) => {
        $('.login_notification').fadeIn();
        this.systemMessage = error.error.message;
        setTimeout(() => {
          $('.login_notification').fadeOut();
          this.systemMessage = "";
        },4000)
      }
    ); 
  }


}
