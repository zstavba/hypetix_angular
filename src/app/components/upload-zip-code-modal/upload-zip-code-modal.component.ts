import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upload-zip-code-modal',
  imports: [],
  templateUrl: './upload-zip-code-modal.component.html',
  styleUrl: './upload-zip-code-modal.component.scss'
})
export class UploadZipCodeModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  

  ngOnInit(): void {
    
  }

}
