import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { SectorService } from '../../../auth/API/sector.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'upload-sector-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './upload-sector-modal.component.html',
  styleUrl: './upload-sector-modal.component.scss'
})
export class UploadSectorModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _SectorService: SectorService
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
    this.systemMessage.emit("Datoteka je bila uspešno izbrana !");
  }

  closeUploadSectorModal = () => {
    $('.upload_sector_modal').fadeOut();
  }

  saveData = () => {
    this._SectorService.uploadData(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      } 
    )
  }

}
