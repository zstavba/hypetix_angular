import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'update-zip-code-modal',
  imports: [],
  templateUrl: './update-zip-code-modal.component.html',
  styleUrl: './update-zip-code-modal.component.scss'
})
export class UpdateZipCodeModalComponent implements OnInit{

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    
  }

}
