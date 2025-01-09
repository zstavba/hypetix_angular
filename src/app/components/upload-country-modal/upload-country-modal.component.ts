import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../../../auth/API/bank.service';
import $ from 'jquery';
@Component({
  selector: 'upload-country-modal',
  imports: [],
  templateUrl: './upload-country-modal.component.html',
  styleUrl: './upload-country-modal.component.scss'
})
export class UploadCountryModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _BankService: BankService
  ){}

  public FileGroup: FormGroup = new FormGroup({
    file: new FormControl('')
  })

  ngOnInit(): void {
    
  }

  getFiles = (event: any) => {
    const files: File = event.target.files[0];
    this.FileGroup.patchValue({
      file: files
    });
   
  }

  saveData = () => {
      this._BankService.uploadCountry(this.FileGroup.value).subscribe(
        (response: any) => {
          this.systemMessage.emit(response.message);
        },
        (error: any) => {
          this.systemMessage.emit(error.error.message);
        }
      )
  }

  closeUploadModal = () => {
    $('.upload_country_modal').fadeOut();
  }

}
