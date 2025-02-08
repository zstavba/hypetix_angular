import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserSearchPipe } from '../../../../../auth/Pipes/user-search.pipe';
import { UserService } from '../../../../../auth/API/user.service';
import { User } from '../../../../../auth/Classes/user';
import { CptUploadUserComponent } from '../../../../components/cpt-upload-user/cpt-upload-user.component';
import $ from 'jquery';
import { CptCreateUserComponent } from '../../../../components/cpt-create-user/cpt-create-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchUserPipe } from '../../../../../auth/Pipes/search-user.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-cp-table',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    CptUploadUserComponent,
    CptCreateUserComponent,
    NgxPaginationModule,
    SearchUserPipe
  ],
  templateUrl: './cp-table.component.html',
  styleUrl: './cp-table.component.scss'
})
export class CpTableComponent implements OnInit {
  public user_type: string | null= '';
  public UsersList: Array<User> = new Array<User>();
  public tableKeys: any;
  public ItemsPerPage: number = 9;
  public P: any; 
  public searchUser: string = '';


  constructor(
    private route: ActivatedRoute,
    private _UserService: UserService
  ) {}

  ngOnInit(): void {
    this.user_type =  this.route.snapshot.paramMap.get('user_type');
    this.getUsersByType();
    this.tableKeys = User.getKeys();
  }

  getUsersByType = () => {
    this._UserService.getByType(this.user_type).subscribe(
        (response: User[]) => {
          
          this.UsersList = response;
        }
    );
  }

  toggleFileUpload = () => {
    $('.ctp-upload-user').fadeIn();
  }

  toggleCreateUserModal = () => {
    $('.cpt-create-user').fadeIn();
  }


}
