import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from '../../../auth/API/session.service';
import { ExchangeRatesService } from '../../../auth/API/exchange-rates.service';
import $ from 'jquery';

@Component({
  selector: 'upload-exchange-rates-modal',
  imports: [],
  templateUrl: './upload-exchange-rates-modal.component.html',
  styleUrl: './upload-exchange-rates-modal.component.scss'
})
export class UploadExchangeRatesModalComponent  implements OnInit {
  
  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    file: new FormControl(''),
    fk_user_id: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _ExchangeRatesService: ExchangeRatesService
    
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
    })
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
  }

  saveData = () => {
    this._ExchangeRatesService.upload(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

  closeERModal = () => {
    $('.upload_exchange_rates_modal').fadeOut();
  }


}
