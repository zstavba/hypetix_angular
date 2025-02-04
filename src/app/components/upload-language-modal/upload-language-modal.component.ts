import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import $ from 'jquery';
import { BankService } from '../../../auth/API/bank.service';

@Component({
  standalone: true,
  selector: 'upload-language-modal',
  imports: [],
  templateUrl: './upload-language-modal.component.html',
  styleUrl: './upload-language-modal.component.scss'
})
export class UploadLanguageModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>()

  public FileGroup: FormGroup = new FormGroup({
    file: new FormControl('')
  });

  constructor(
    private _BankService: BankService
  ){}

  ngOnInit(): void {
    
  }

  getSelectedFile = (event:any) => {
    let file:File = event.target.files[0];
    this.FileGroup.patchValue({
      file:file
    });
  }

  closeUploadLanguageModal = () => {
    $('.upload_language_modal').fadeOut();
  }

  saveData = () => {
    this._BankService.uploadLanguage(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },  
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }


}
