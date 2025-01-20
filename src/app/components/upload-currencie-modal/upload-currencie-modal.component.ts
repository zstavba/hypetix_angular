import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'upload-currencie-modal',
  imports: [],
  templateUrl: './upload-currencie-modal.component.html',
  styleUrl: './upload-currencie-modal.component.scss'
})
export class UploadCurrencieModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

}
