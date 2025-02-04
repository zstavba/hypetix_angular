import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import $ from 'jquery';
import { SessionService } from '../../../auth/API/session.service';
import { InvoicesService } from '../../../auth/API/invoices.service';


@Component({
  selector: 'upload-invoices-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './upload-invoices-modal.component.html',
  styleUrl: './upload-invoices-modal.component.scss'
})
export class UploadInvoicesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  public FileGroup: FormGroup = new FormGroup({
    fk_user_id: new FormControl(''),
    file: new FormControl('')
  })

  constructor(
    private _SessionService: SessionService,
    private _InvoicesService: InvoicesService
  ){}

  ngOnInit(): void {  
      this.FileGroup.patchValue({
        fk_user_id: this._SessionService.getSessionData()
      });
  }

  getSelectedFile = (event: any) => {
    let file: File = event.target.files[0];
    this.systemMessage.emit("Datoteka je bila uspešno naložena !");
    this.FileGroup.patchValue({
      file: file
    });
  }

  closeUploadModal = () => {
    $('.upload_invoices_modal').fadeOut();
  }

  saveData = () => {
   this._InvoicesService.uploadItems(this.FileGroup.value).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
   );
  }

}
