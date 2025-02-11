import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { ArticleTypeService } from '../../../auth/API/article-type.service';
import $ from 'jquery';
@Component({
  selector: 'upload-article-type-modal',
  imports: [],
  templateUrl: './upload-article-type-modal.component.html',
  styleUrl: './upload-article-type-modal.component.scss'
})
export class UploadArticleTypeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _ArticleTypeService: ArticleTypeService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
  }

  saveData = () => {
    this._ArticleTypeService.upload(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeUploadModal = () => {
    $('.upload_article_type_modal').fadeOut();
  }



}
