import { Component, Input, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import $ from 'jquery';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { ArticleTypeService } from '../../../auth/API/article-type.service';
import { GroupType } from '../../../auth/Classes/group-type';
import { User } from '../../../auth/Classes/user';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import { ArticleType } from '../../../auth/Classes/article-type';


@Component({
  standalone: true,
  selector: 'update-article-type-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-article-type-modal.component.html',
  styleUrl: './update-article-type-modal.component.scss'
})
export class UpdateArticleTypeModalComponent implements OnInit {
  @Input() Info: ArticleType | null= new ArticleType();
  public UserInformation: User | null = new User();
  public systemMessage: string = '';

  public GroupTypeList: Array<GroupType> = new Array<GroupType>();
  public selectedGTItem: GroupType = new GroupType();
  public selectedGTItemActive: boolean = false; 


  public ATGroup: FormGroup = new FormGroup({
      fk_user_id: new FormControl(''),
      fk_group_type_id: new FormControl(''),
      title: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required),
      type: new FormControl('',Validators.required),
      group_name: new FormControl('',Validators.required),
      konto: new FormControl('',Validators.required),
      konto_consignation: new FormControl('',Validators.required),
  })

  constructor(
    private _SessionService: SessionService,
    private _ArticleTypeService: ArticleTypeService,
    private _GroupTypeService: GroupTypeService
    
  ){}

  ngOnInit(): void {
    this.UserInformation = this._SessionService.getSessionData();
    this.ATGroup.patchValue({
      fk_user_id: this.UserInformation
    })
    this.getGroupTypeList()
  }

  getGroupTypeList = () => {
    this._GroupTypeService.get().subscribe(
      (response: GroupType[]) => {
        this.GroupTypeList = response; 
      }
    )
  }

  setGroupType = (GT: GroupType) => {
    this.selectedGTItem = GT; 
    this.selectedGTItemActive = true; 
    this.ATGroup.patchValue({
      fk_group_type_id: GT
    });
  }

  closeUpdateModal = () => {
    $('.update_article_modal').fadeOut();
  }

  toggleComboBoxMenu  = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

  saveData = () => {
    this._ArticleTypeService.updateItem(this.ATGroup.value,this.Info?.id).subscribe(
      (response: any) => {
        $('.update_modal_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.update_modal_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.update_modal_notification').fadeIn();

        if(error.status == 404){
          this.systemMessage = 'Povezava do URLja ni bila najdena !'
        }


        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.update_modal_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

}
