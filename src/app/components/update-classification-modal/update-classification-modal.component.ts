import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Classification } from '../../../auth/Classes/classification';
import { ClassificationService } from '../../../auth/API/classification.service';
import $ from 'jquery';
@Component({
  selector: 'update-classification-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-classification-modal.component.html',
  styleUrl: './update-classification-modal.component.scss'
})
export class UpdateClassificationModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Classification = new Classification();
  
  public ClassificationGroup: FormGroup| any;

  constructor(
    private _ClassificationsService: ClassificationService
  ){} 

  ngOnInit(): void {
      this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
   if(changes["Info"]){
    this.initializeForm();
   }
    
  }

  initializeForm = () => {
    this.ClassificationGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      status: new FormControl(this.Info.status,Validators.required),
      network: new FormControl(this.Info.network,Validators.required)
    })
  }

  closeClassificationModal = () => {
    $('.update_classification_modal').fadeOut();
  }

  saveData = () => {
    this._ClassificationsService.updateItem(this.Info.id,this.ClassificationGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
