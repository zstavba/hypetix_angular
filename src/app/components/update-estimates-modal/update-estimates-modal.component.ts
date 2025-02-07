import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Estimates } from '../../../auth/Classes/estimates';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import $ from 'jquery';
import { EstimatesService } from '../../../auth/API/estimates.service';

@Component({
  selector: 'update-estimates-modal',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  templateUrl: './update-estimates-modal.component.html',
  styleUrl: './update-estimates-modal.component.scss'
})
export class UpdateEstimatesModalComponent implements OnInit {

  @Output() systemMessage: EventEmitter<string> = new EventEmitter<string>();
  @Input() Info: Estimates = new Estimates();  
  public EstimatesGroup: FormGroup | any; 
  public item_description: string = ''; 

  constructor(
    private _EstimatesService: EstimatesService
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
    this.EstimatesGroup = new FormGroup({
      fk_user_id: new FormControl(this.Info.fk_user_id),
      ident: new FormControl(this.Info.ident,Validators.required),
      title: new FormControl(this.Info.title,Validators.required),
      description: new FormControl(this.Info.description)
    });
    this.item_description = this.Info.description;
    console.log(this.Info);
  }

  closeUpdateModal = () => {
    $('.update_estimates_modal').fadeOut();
  }

  saveData = () => {
    this.EstimatesGroup.patchValue({
      description: this.item_description
    });
    this._EstimatesService.updateItem(this.Info.id,this.EstimatesGroup).subscribe(
      (response: any) => {
        this.systemMessage.emit(response.message);
      },
      (error: any) => {
        this.systemMessage.emit(error.error.message);
      }
    )
  }

}
