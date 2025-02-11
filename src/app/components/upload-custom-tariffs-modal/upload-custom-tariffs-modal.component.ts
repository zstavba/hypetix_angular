import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { CustomTariffs } from '../../../auth/Classes/custom-tariffs';
import { CustomTariffsService } from '../../../auth/API/custom-tariffs.service';
@Component({
  selector: 'upload-custom-tariffs-modal',
  imports: [],
  templateUrl: './upload-custom-tariffs-modal.component.html',
  styleUrl: './upload-custom-tariffs-modal.component.scss'
})
export class UploadCustomTariffsModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public CTGroup: FormGroup =  new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SesionService: SessionService,
    private _CustomTariffsService: CustomTariffsService
  ){}

  ngOnInit(): void {
    this.CTGroup.patchValue({
      fk_user_id: this._SesionService.getSessionData()
    });
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0]; 
    this.CTGroup.patchValue({
      file: file
    });
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
  }

  closeUploadModal = () => {
    $('.upload_custom_tariffs_modal').fadeOut();
  }

  saveData = () => {
    this._CustomTariffsService.uploadFile(this.CTGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
