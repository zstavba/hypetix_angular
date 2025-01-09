import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserSearchPipe } from '../../../../../auth/Pipes/user-search.pipe';
import { UserService } from '../../../../../auth/API/user.service';
import { User } from '../../../../../auth/Classes/user';
import { CptUploadUserComponent } from '../../../../components/cpt-upload-user/cpt-upload-user.component';
import $ from 'jquery';
import { CptCreateUserComponent } from '../../../../components/cpt-create-user/cpt-create-user.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  standalone: true,
  selector: 'app-cp-table',
  imports: [
    RouterLink,
    CptUploadUserComponent,
    CptCreateUserComponent,
    NgxPaginationModule
  ],
  templateUrl: './cp-table.component.html',
  styleUrl: './cp-table.component.scss'
})
export class CpTableComponent implements OnInit {
  public user_type: string | null= '';
  public UsersList: Array<User> = new Array<User>();
  public tableKeys: any;
  public ItemsPerPage: number = 7;
  public P: any; 


  constructor(
    private route: ActivatedRoute,
    private _UserService: UserService
  ) {}

  ngOnInit(): void {
    this.user_type =  this.route.snapshot.paramMap.get('user_type');
    this.getUsersByType();
    this.tableKeys = User.getKeys();
    console.log(this.tableKeys)
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
