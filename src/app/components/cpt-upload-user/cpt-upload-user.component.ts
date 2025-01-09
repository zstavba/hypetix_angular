import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { UserService } from '../../../auth/API/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  standalone: true,
  selector: 'cpt-upload-user',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cpt-upload-user.component.html',
  styleUrl: './cpt-upload-user.component.scss'
})
export class CptUploadUserComponent implements OnInit {

  public UserGroup: FormGroup = new FormGroup({
    file: new FormControl('')
  });

  constructor(
    private _UserService: UserService
  ){}

  ngOnInit(): void {
    
  }

  closeModal = () => {
    $('.ctp-upload-user').fadeOut();
  }


  getUserFile = (event: any) => {
    const file: File = event.target.files[0];
    this.UserGroup.patchValue({
      file:file
    });
  }

  saveData = () => {
    this._UserService.uploadUsers(this.UserGroup).subscribe(
      (response: any) => {
        console.log(response.message);
      },
      (error: any) => {
        console.log(error.error.message);

      }
    );
  }

}
