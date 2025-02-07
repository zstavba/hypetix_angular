import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { EstimatesService } from '../../../auth/API/estimates.service';
import $ from 'jquery';
@Component({
  selector: 'upload-estimates-modal',
  imports: [],
  templateUrl: './upload-estimates-modal.component.html',
  styleUrl: './upload-estimates-modal.component.scss'
})
export class UploadEstimatesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _EstimatesService: EstimatesService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.systemMessage.emit("Datoteka je bila naložena !");
    this.FileGroup.patchValue({
      file: file
    });
  }

  saveData = () => {
    this._EstimatesService.uploadItems(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeUploadModal = () => {
    $('.upload_estimates_modal').fadeOut();
  }



}
