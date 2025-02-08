import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { PerformanceService } from '../../../auth/API/performance.service';
import { SessionService } from '../../../auth/API/session.service';

@Component({
  selector: 'upload-performance-modal',
  imports: [],
  templateUrl: './upload-performance-modal.component.html',
  styleUrl: './upload-performance-modal.component.scss'
})
export class UploadPerformanceModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();


  public FileGroup: FormGroup = new FormGroup({
    fk_user_id:new FormControl(''),
    file: new FormControl('') 
  });

  constructor(
    private _SessionService: SessionService,
    private _PerformanceSerrvice: PerformanceService
  ){}

  ngOnInit(): void {
    this.FileGroup.patchValue({
      fk_user_id: this._SessionService.getSessionData()
    });
  }
     
  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    console.log(file);
    this.FileGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
  }

  saveData = () => {
    this._PerformanceSerrvice.uploadItems(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeUploadModal = () => {
    $('.upload_performance_modal').fadeOut();
  }



}
