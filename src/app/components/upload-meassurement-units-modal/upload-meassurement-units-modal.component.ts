import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { MeassurmentUnitsService } from '../../../auth/API/meassurment-units.service';
import $ from 'jquery';
@Component({
  selector: 'upload-meassurement-units-modal',
  imports: [],
  templateUrl: './upload-meassurement-units-modal.component.html',
  styleUrl: './upload-meassurement-units-modal.component.scss'
})
export class UploadMeassurementUnitsModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    file: new FormControl(''),
    fk_user_id: new FormControl('')
  });

  constructor(
    private _SessionService: SessionService,
    private _MeasurementUnitsService: MeassurmentUnitsService
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

  closeUploadModal = () => {
    $('.upload_mu_modal').fadeOut();
  }

  saveData = () => {
    this._MeasurementUnitsService.uploadFile(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
