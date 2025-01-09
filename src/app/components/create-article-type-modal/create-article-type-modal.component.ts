import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { ArticleTypeService } from '../../../auth/API/article-type.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { User } from '../../../auth/Classes/user';
import { GroupTypeService } from '../../../auth/API/group-type.service';
import { GroupType } from '../../../auth/Classes/group-type';
import { Generator } from '../../../auth/functions/generator';

@Component({
  standalone: true,
  selector: 'create-article-type-modal',
  imports: [
    NotificationComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-article-type-modal.component.html',
  styleUrl: './create-article-type-modal.component.scss'
})
export class CreateArticleTypeModalComponent implements OnInit  {

  public UserInformation: User | null = new User();
  public systemMessage: string = '';

  public GroupTypeList: Array<GroupType> = new Array<GroupType>();
  public selectedGTItem: GroupType = new GroupType();
  public selectedGTItemActive: boolean = false; 

  public generator: Generator = new Generator();

  public ATGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    fk_group_type_id: new FormControl(''),
    title: new FormControl('',Validators.required),
    code: new FormControl(this.generator.generateIdent(),Validators.required),
    type: new FormControl('',Validators.required),
    group_name: new FormControl('',Validators.required),
    konto: new FormControl('',Validators.required),
    konto_consignation: new FormControl('',Validators.required),
  })

  constructor(
    private _SessionService: SessionService,
    private _ArticleTyxpeService: ArticleTypeService,
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


  saveData = () => {
    this._ArticleTyxpeService.createData(this.ATGroup.value).subscribe(
      (response: any) => {
        $('.create_article_type_notification').fadeIn();
        this.systemMessage = response.message; 
        setTimeout(() => {
          $('.create_article_type_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      },
      (error: any) => {
        $('.create_article_type_notification').fadeIn();

        if(error.status == 404){
          this.systemMessage = "Povezava do URLja, ni bila najdena !"
        }

        this.systemMessage = error.error.message; 
        setTimeout(() => {
          $('.create_article_type_notification').fadeOut();
          this.systemMessage = '';
        },4000);
      }
    )
  }

  closeCreateArticleTypeModal = () => {
    $('.create_article_type_modal').fadeOut();
  }

  toggleComboBoxMenu = (item: string) => {
    $(`.${item}`).fadeToggle();
  }

}
